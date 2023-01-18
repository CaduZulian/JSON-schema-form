import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  height: 100px;
  border-bottom: 1px solid #dddddd;
  gap: 1rem;
`;

export const ButtonStyled = styled.button<{active: boolean}>`
  padding: 1rem;
  background-color: ${({active}) => active ? '#249175' : '#34d0a8'};
  color: #fff;
  height: fit-content;

  :disabled {
    opacity: 0.5;
  }
`;
