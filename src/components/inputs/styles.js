import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
  margin-left: 30px;

  div {
    span {
      color: var(--red);
    }
  }
`;

export const InputContainer = styled.div`
  background: var(--Grey-2);
  border-radius: 4px;
  border: 1px solid var(--Grey-0);
  color: var(--Grey-0);
  padding: 1rem;
  width: 100%;
  transition: 0.4s;
  width: 300px;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red);
    `}

  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--Grey-0);
  }

`;
