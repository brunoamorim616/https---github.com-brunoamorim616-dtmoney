import React from "react";
import { MoneyCard } from "./components/MoneyCard";
import { Content, Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <Content>
        <MoneyCard />

        <MoneyCard />

        <MoneyCard />
      </Content>
    </Container>
  );
}
