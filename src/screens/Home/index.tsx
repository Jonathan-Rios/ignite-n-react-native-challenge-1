import { Keyboard } from "react-native";
import {
  AddButton,
  Container,
  FormContainer,
  Header,
  ToDoContainer,
  ToDoList,
} from "./styles";

import LogoImg from "../../assets/logo.svg";
import { Input } from "@components/Input";
import { Counters } from "./components/Counters";
import { EmptyNote } from "./components/EmptyNote";
import { TodoItem } from "./components/TodoItem";
import { useEffect, useState } from "react";
import { storageSetToDos, storageToDoGet } from "@storage/storageToDos";
import { ToDoDTO } from "@dtos/ToDoDTO";
import { showMessage } from "react-native-flash-message";

export function Home() {
  const [toDoList, setToDoList] = useState<ToDoDTO[]>([]);
  const [description, setDescription] = useState("");

  useEffect(() => {
    async function loadedToDoList() {
      const storageToDoList = await storageToDoGet();

      setToDoList(storageToDoList);
    }

    loadedToDoList();
  }, []);

  useEffect(() => {
    async function updateToDoList() {
      await storageSetToDos(toDoList);
    }

    updateToDoList();
  }, [toDoList]);

  function handleAddToDoItem() {
    if (description.trim() === "") {
      showMessage({
        message: "Informe uma tarefa para adicionar!",
        type: "danger",
        icon: "danger",
      });

      return;
    }

    const newToDoItem = {
      id: new Date().getTime(),
      description,
      completed: false,
    };

    setDescription("");
    setToDoList((prev) => [...prev, newToDoItem]);

    showMessage({
      message: "Tarefa adicionada com sucesso!",
      type: "success",
      icon: "success",
    });

    Keyboard.dismiss();
  }

  function handleCompleteTask(selectedId: number, checked: boolean) {
    setToDoList((prev) =>
      prev.map((item) => {
        if (item.id === selectedId) {
          return {
            ...item,
            completed: checked,
          };
        }

        return item;
      })
    );
  }

  function handleRemoveTask(selectedId: number) {
    setToDoList((prev) => prev.filter((item) => item.id !== selectedId));

    showMessage({
      message: "Tarefa removida com sucesso!",
      type: "warning",
      icon: "warning",
    });
  }

  function getCompleted() {
    const completed =
      toDoList.filter((item) => item.completed === true).length || 0;

    return completed;
  }

  return (
    <>
      <Header>
        <LogoImg width="110px" height="32px" />
      </Header>
      <Container>
        <FormContainer>
          <Input
            value={description}
            placeholder="Adicione uma tarefa"
            onChangeText={setDescription}
            onSubmitEditing={handleAddToDoItem}
          />

          <AddButton
            icon="add-circle-outline"
            type="PRIMARY"
            onPress={handleAddToDoItem}
          />
        </FormContainer>

        <ToDoContainer>
          <Counters completed={getCompleted()} created={toDoList.length} />

          <ToDoList>
            {toDoList?.length ? (
              toDoList.map((item) => (
                <TodoItem
                  key={item.id}
                  id={item.id}
                  description={item.description}
                  completed={item.completed}
                  onCheck={handleCompleteTask}
                  onDelete={handleRemoveTask}
                />
              ))
            ) : (
              <EmptyNote />
            )}
          </ToDoList>
        </ToDoContainer>
      </Container>
    </>
  );
}
