import { Feather } from "@expo/vector-icons";
import { Container, Input, InputButton } from "./styles";

type Props = {
  inputRef: React.RefObject<TextInput>;
  onPress: () => void;
  onChangeText: (text: string) => void;
  onBlur: (e: any) => void;
  value: string;
};

export function InputAddTask({
  inputRef,
  onPress,
  onChangeText,
  onBlur,
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
        onBlur={onBlur}
      />
      <InputButton onPress={onPress}>
        <Feather name="plus-square" size={24} color="#FFF" />
      </InputButton>
    </Container>
  );
}
