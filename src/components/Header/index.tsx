import React from "react";
import logoImg from "../../assets/identity/logo.svg";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <div>
        <img src={logoImg} />
        <button type="button">Nova Transação</button>
      </div>
    </Container>
  );
}
