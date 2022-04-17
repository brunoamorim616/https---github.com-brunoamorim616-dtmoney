import { MoneyCard } from "./components";
import { Content, Container } from "./styles";
import { configuration } from "./config";
import React from "react";

export function Summary(): React.ReactElement {
  const { render } = configuration;
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
