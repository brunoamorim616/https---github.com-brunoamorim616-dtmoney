import React from "react";
import { MoneyCard } from "./components";
import componentConfiguration from "./configuration.json";
import { Container, Content } from "./styles";

export function Summary(): React.ReactElement {
  const { render } = componentConfiguration;
  return (
    <Container>
      <Content>
        {render.map(({ componentProps }, index: number) => (
          <MoneyCard key={componentProps.type + index} {...componentProps} />
        ))}
      </Content>
    </Container>
  );
}
