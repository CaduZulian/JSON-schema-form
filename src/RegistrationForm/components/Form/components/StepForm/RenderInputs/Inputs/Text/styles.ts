import styled from "styled-components";

export const Container = styled.div`
  width: calc(50% - 8px);
`;

export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  margin-bottom: 5px;
`;

export const Label = styled.label`
  font-size: 1rem;
  line-height: 150%;
  color: #212121;
`;

export const Required = styled.span`
  font-size: 12px;
  line-height: 150%;
  color: #9e9e9e;

  padding-left: 0.25rem;
`;

export const Input = styled.input<{ hasError?: boolean }>`
  width: 100%;
  height: 40px;
  padding: 0 1rem;
  font-size: 1rem;
  color: #111111;
  border-radius: 8px;
  border: solid 1px
    ${({ hasError }) =>
      hasError
        ? `
  #BF0201;`
        : `#DDE3E9;`};

  :focus-within {
    border: solid 1px #3fcfa9;
  }

  :disabled {
    background: #f3f5f7;
  }

  ::placeholder {
    color: #dde3e9;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 0.875rem;
  color: #bf0201;
`;
