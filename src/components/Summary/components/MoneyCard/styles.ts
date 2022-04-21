import styled from "styled-components";

export const Container = styled.div`
  min-width: 260px;

  padding: 2rem 2rem;

  background-color: var(--shape);
  border-radius: 0.3rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {
    width: 1.5rem;
  }

  strong {
    padding-top: 100px;
    font-size: 1.5rem;
    font-weight: 400;
  }

  &.highlight_card {
    background: var(--green);
    color: white;

    p {
      font-weight: 500;
    }

    strong {
      font-weight: 600;
    }
  }

  @media (max-width: 925px) {
    min-width: 220px;
  }
`;
