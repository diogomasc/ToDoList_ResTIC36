import React, { useContext } from "react";
import { Text, View } from "react-native";
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
import { Feather } from "@expo/vector-icons";
import { RootStackParamList } from "../../utils/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { useNavigation } from "@react-navigation/native";

import { TaskContext } from "../../context/TaskContext";

type Props = NativeStackNavigationProp<RootStackParamList>;

export default function Details() {
  const { task } = useContext(TaskContext);

  const navigation = useNavigation<Props["navigation"]>();

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
        <StatusCard>
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
        <StatusButtonDel>
          <Feather name="trash-2" size={24} color="white" />
        </StatusButtonDel>
      </StatusContainer>
    </Container>
  );
}
