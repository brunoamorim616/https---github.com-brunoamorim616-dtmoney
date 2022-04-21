import React from "react";
import { DOWN_ARROW, TOTAL, UPPER_ARROW } from "../../../../assets";
import { Container } from "./styles";
import { MoneyCardProps } from "./types";

export function MoneyCard({
  type,
  label,
  shouldHighlight,
}: MoneyCardProps): React.ReactElement {
  let cardImage;
  switch (type) {
    case "incomes":
      cardImage = UPPER_ARROW;
      break;
    case "outcomes":
      cardImage = DOWN_ARROW;
      break;
    case "total":
      cardImage = TOTAL;
      break;
    default:
      null;
  }
  return (
    <Container className={shouldHighlight ? "highlight_card" : "common_card"}>
      <header>
        <p>{label}</p>
        {cardImage && <img src={cardImage} alt={type} />}
      </header>
      <strong>R$ 90.000,00</strong>
    </Container>
  );
}
