import styled from "styled-components";

export const Container = styled.header`
  padding-top: 2rem;
  padding-bottom: 10rem;

  background-color: var(--blue);

  div {
    display: flex;
    flex-wrap: wrap;

    align-items: center;
    justify-content: space-around;

    button {
      height: auto;
      width: auto;

      padding: 0.5rem 2rem;

      border-width: 0;
      border-radius: 0.2rem;
      background-color: var(--blue-light);

      color: white;
      font-weight: 600;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }

    img {
      @media (max-width: 345px) {
        margin-bottom: 2rem;
      }
    }
  }
`;
