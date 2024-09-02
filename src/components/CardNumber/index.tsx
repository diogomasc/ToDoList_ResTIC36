import { Container, CardTitle, CardValue } from "./styles";
import React from "react";

type CardNumberProps = {
  title: string;
  num: number;
  color?: string;
};

export function CardNumber({ title, num, color }: CardNumberProps) {
  return (
    <Container>
      <CardTitle>{title}</CardTitle>
      <CardValue style={color ? { color: color } : {}}>{num}</CardValue>
    </Container>
  );
}
