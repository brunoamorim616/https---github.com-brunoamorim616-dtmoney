import styled from "styled-components";

export const Container = styled.div`
  min-width: 260px;
  max-width: 270px;

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
    font-size: 1.3rem;
    font-weight: 400;
  }

  @media (max-width: 925px) {
    min-width: 220px;
  }
`;
