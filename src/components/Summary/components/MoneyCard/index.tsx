import React from "react";
import upperArrow from "../../../../assets/money/incomes.svg";
import { Container } from "./styles";

export function MoneyCard() {
  return (
    <Container>
      <header>
        <p>Incomes</p>
        <img src={upperArrow} alt="incomes" />
      </header>
      <strong>R$ 90.000,00</strong>
    </Container>
  );
}
