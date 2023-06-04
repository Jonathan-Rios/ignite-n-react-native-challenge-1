import { Counter } from "./Counter";
import { Container } from "./styles";

type CountersProps = {
  created: number;
  completed: number;
};

export function Counters({ created, completed }: CountersProps) {
  return (
    <Container>
      <Counter type="created" value={created} text="Criadas" />
      <Counter type="completed" value={completed} text="Concluídas" />
    </Container>
  );
}
