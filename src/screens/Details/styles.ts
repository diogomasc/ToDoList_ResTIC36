import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #28385e;
  padding: 16px;
  padding-top: 64px;
`;

export const TopContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
`;

export const TopButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const TopText = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-left: 16px;
`;

export const TitleContainer = styled.View`
  background-color: #304163;
  border-radius: 4px;
  padding: 8px 16px;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const TextStatus = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-bottom: 8px;
`;

export const StatusContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const StatusCard = styled.View`
  background-color: #304163;
  border-radius: 4px;
  flex-direction: row;
  flex: 1;
  margin-right: 16px;
`;

export const StatusIcon = styled.View`
  background-color: #e88a1a;
  border-radius: 4px;
  padding: 16px;
`;

export const StatusTextContainer = styled.View`
  padding: 16px;
`;

export const StatusText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const StatusButtonDel = styled.TouchableOpacity`
  background-color: #f22424;
  border-radius: 4px;
  padding: 16px;
`;
