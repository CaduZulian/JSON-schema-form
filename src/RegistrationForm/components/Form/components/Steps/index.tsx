import { useForm } from "@/RegistrationForm/context/FormContext";
import { ButtonStyled, Container } from "./styles";

export const Steps = () => {
  const {steps, currentStep, changeCurrentStep} = useForm()

  return (
    <Container>
      {steps.map((item) => {
        return (
          <ButtonStyled
            key={item}
            onClick={() => changeCurrentStep(item)}
            active={item === currentStep}
          >
            <span>{item}</span>
          </ButtonStyled>
        );
      })}
    </Container>
  );
};
