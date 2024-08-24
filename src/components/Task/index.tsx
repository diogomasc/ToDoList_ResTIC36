import { Container, TaskText, TaskDone, TaskDelete } from "./styles";
import { Feather } from "@expo/vector-icons";

export function Task() {
  return (
    <Container>
      <TaskDone>
        <Feather name="check-square" size={24} color="white" />
      </TaskDone>
      <TaskText>Tarefa</TaskText>
      <TaskDelete>
        <Feather name="trash" size={24} color="white" />
      </TaskDelete>
    </Container>
  );
}
