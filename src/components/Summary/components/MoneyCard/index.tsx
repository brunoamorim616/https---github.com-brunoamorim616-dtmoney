import React from "react";
import { TOTAL, UPPER_ARROW, DOWN_ARROW } from "../../../../assets";
import { MoneyCardProps } from "../../@types";
import { Container } from "./styles";

function MoneyCard({
  type,
  label,
  configuration,
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
    <Container
      className={
        configuration.should_highlight ? "highlight_card" : "common_card"
      }
    >
      <header>
        <p>{label}</p>
        {cardImage && <img src={cardImage} alt="incomes" />}
      </header>
      <strong>R$ 90.000,00</strong>
    </Container>
  );
}

export default React.memo(MoneyCard);
