import { Container, Text, Strong } from "./styles";

import EmptyIcon from "@assets/empty-icon.svg";

export function EmptyNote() {
  return (
    <Container>
      <EmptyIcon />
      <Strong>Você ainda não tem tarefas cadastradas</Strong>
      <Text>Crie tarefas e organize seus itens a fazer</Text>
    </Container>
  );
}
