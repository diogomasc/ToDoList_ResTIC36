import { Feather } from "@expo/vector-icons";
import { Container, Input, InputButton } from "./styles";

export function InputAddTask() {
  return (
    <Container>
      <Input
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="white"
        keyboardType="default"
      />
      <InputButton>
        <Feather name="plus-square" size={24} color="#FFF" />
      </InputButton>
    </Container>
  );
}
