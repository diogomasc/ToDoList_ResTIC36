import React, { useContext } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../utils/types";
import { TaskContext } from "../../context/TaskContext";
import {
  Container,
  TitleContainer,
  TopButton,
  TopContainer,
  TopText,
  Title,
  TextStatus,
  StatusContainer,
  StatusIcon,
  StatusButtonDel,
  StatusText,
  StatusCard,
  StatusTextContainer,
} from "./styles";

type Props = NativeStackNavigationProp<RootStackParamList>;

export default function Details() {
  const { task, handleTaskDelete, handleTaskChangeStatus } =
    useContext(TaskContext);
  const navigation = useNavigation<Props>();

  const handleDelete = () => {
    Alert.alert("Confirmação", "Tem certeza que deseja excluir esta tarefa?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Excluir",
        onPress: () => {
          handleTaskDelete(task);
          Alert.alert("Sucesso", "Tarefa excluída com sucesso!");
          navigation.popToTop();
        },
      },
    ]);
  };

  const handleToggleStatus = () => {
    handleTaskChangeStatus(task);
  };

  return (
    <Container>
      <TopContainer>
        <TopButton onPress={() => navigation.popToTop()}>
          <Feather name="chevron-left" size={24} color="white" />
          <TopText>Voltar</TopText>
        </TopButton>
      </TopContainer>
      <TitleContainer>
        <Title>{task.title}</Title>
      </TitleContainer>
      <TextStatus>Status da Tarefa:</TextStatus>
      <StatusContainer>
        <StatusCard onPress={handleToggleStatus}>
          <StatusIcon>
            <Feather
              name={task.status ? "check-square" : "square"}
              size={24}
              color="white"
            />
          </StatusIcon>
          <StatusTextContainer>
            <StatusText>{task.status ? "Finalizada" : "Em aberto"}</StatusText>
          </StatusTextContainer>
        </StatusCard>
        <StatusButtonDel onPress={handleDelete}>
          <Feather name="trash-2" size={24} color="white" />
        </StatusButtonDel>
      </StatusContainer>
    </Container>
  );
}
