import styled from "styled-components";
import { Form as Unform } from "@unform/web";

export const FormStyled = styled(Unform)``;

export const FieldsetStyled = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: space-between;

  gap: 1rem;
  padding: 1rem;

  div.input-block {
    display: flex;
    flex-direction: column;
    width: calc(50% - 16px);
    margin-bottom: 24px;

    label {
      font-family: sans-serif;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #212121;
    }
  }
`;

export const LegendStyled = styled.legend`
  font-family: sans-serif;
  font-weight: bold;
  font-size: 24px;
  line-height: 22px;
  color: #212121;
`;
