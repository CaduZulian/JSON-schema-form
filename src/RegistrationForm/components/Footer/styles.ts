import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 0 2rem;

  height: 150px;

  border-top: 1px solid #dddddd;
`

export const ButtonStyled = styled.button<{active?: boolean}>`
  padding: 1rem;
  background-color: ${({active}) => active ? '#249175' : '#34d0a8'};
  color: #fff;
  height: fit-content;
`;