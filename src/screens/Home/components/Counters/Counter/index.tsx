import { Badge, Container, Title } from "./styles";

export type CounterTypes = "created" | "completed";

type CounterProps = {
  type: CounterTypes;
  value: number;
  text: string;
};

export function Counter({ value, type, text }: CounterProps) {
  return (
    <Container>
      <Title type={type}>{text}</Title>
      <Badge>{value}</Badge>
    </Container>
  );
}
