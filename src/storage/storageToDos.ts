import AsyncStorage from "@react-native-async-storage/async-storage";

import { ToDoDTO } from "@dtos/ToDoDTO";
import { TODO_STORAGE } from "@storage/storageConfig";

export async function storageSetToDos(todos: ToDoDTO[]) {
  await AsyncStorage.setItem(TODO_STORAGE, JSON.stringify(todos));
}

export async function storageToDoGet() {
  const storage = await AsyncStorage.getItem(TODO_STORAGE);

  const todos: ToDoDTO[] = storage ? JSON.parse(storage) : [];

  return todos;
}
