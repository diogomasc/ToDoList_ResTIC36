import { Feather } from "@expo/vector-icons";
import { Container, TaskDone, TaskText, TaskDelete } from "./styles";
import { TaskProps, RootStackParamList } from "../../utils/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import { useContext } from "react";
import { TaskContext } from "../../context/TaskContextProps";

type Props = NativeStackNavigationProp<RootStackParamList>;

export function Task(props: TaskProps) {
  const navigation = useNavigation<Props>();
  const { selectTask } = useContext(TaskContext);

  function handlePress() {
    navigation.navigate("Details");
    selectTask(props);
  }

  return (
    <Container onPress={handlePress}>
      <TaskDone
        onPress={props.onCheck}
        style={props.status ? { backgroundColor: "#0E9577" } : {}}
      >
        <Feather
          name={props.status ? "check-square" : "square"}
          size={24}
          color="white"
        />
      </TaskDone>
      <TaskText
        style={props.status ? { textDecorationLine: "line-through" } : {}}
      >
        {props.title}
      </TaskText>
      <TaskDelete onPress={props.onRemove}>
        <Feather name="trash" size={24} color="white" />
      </TaskDelete>
    </Container>
  );
}
