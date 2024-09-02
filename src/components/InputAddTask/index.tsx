import { Feather } from "@expo/vector-icons";
import { Container, Input, InputButton } from "./styles";

type Props = {
  inputRef: React.RefObject<TextInput>;
  onPress: () => void;
  onChangeText: (text: string) => void;
  value: string;
};

export function InputAddTask({
  inputRef,
  onPress,
  onChangeText,
  value,
}: Props) {
  return (
    <Container>
      <Input
        ref={inputRef}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="white"
        keyboardType="default"
        value={value}
        onChangeText={onChangeText}
      />
      <InputButton onPress={onPress}>
        <Feather name="plus-square" size={24} color="#FFF" />
      </InputButton>
    </Container>
  );
}
