import { CheckButton, Container, DeleteButton, Text } from "./styles";

interface TodoItemProps {
  id: number;
  description: string;
  completed: boolean;
  onCheck: (id: number, checked: boolean) => void;
  onDelete: (id: number) => void;
}

export function TodoItem({
  id,
  description,
  completed,
  onCheck,
  onDelete,
}: TodoItemProps) {
  return (
    <Container>
      <CheckButton
        checked={completed}
        onPress={() => onCheck(id, !completed)}
        icon={completed ? "check" : null}
        iconSize={16}
      />

      <Text completed={completed}>{description}</Text>

      <DeleteButton
        icon="delete"
        type="SECONDARY"
        onPress={() => onDelete(id)}
      />
    </Container>
  );
}
