import { useForm } from "@/RegistrationForm/context/FormContext";
import { ButtonStyled, Container } from "./styles";

export const Footer = () => {
  const { handleSubmit } = useForm();

  return (
    <Container>
      <ButtonStyled onClick={handleSubmit}>
        Avançar
      </ButtonStyled>
    </Container>
  );
};
