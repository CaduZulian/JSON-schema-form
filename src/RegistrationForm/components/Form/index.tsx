import { useForm } from "@/RegistrationForm/context/FormContext";
import StepForm from "./components/StepForm";

import { Steps } from "./components/Steps";
import { Container } from "./styles";

export const Form = () => {
  return (
    <Container>
      <Steps />

      <StepForm />
    </Container>
  );
};
