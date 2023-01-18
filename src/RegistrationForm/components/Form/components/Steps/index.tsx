import { useForm } from "@/RegistrationForm/context/FormContext";
import { ButtonStyled, Container } from "./styles";

export const Steps = () => {
  const {steps, stepsDisabled, currentStep, changeCurrentStep} = useForm()

  return (
    <Container>
      {steps.map((item, index) => {
        return (
          <ButtonStyled
            key={item}
            onClick={() => changeCurrentStep(item)}
            active={item === currentStep}
            disabled={stepsDisabled?.[index]}
          >
            <span>{item}</span>
          </ButtonStyled>
        );
      })}
    </Container>
  );
};
