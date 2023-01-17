import { useEffect } from "react";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import { PDFViewer } from "./components/PDFViewer";
import { useForm } from "./context/FormContext";
import { Container, Main } from "./styles";

export const RegistrationForm = () => {
  const { JSONForm, getJSONForm } = useForm();

  useEffect(() => {
    getJSONForm();
  }, []);

  return (
    <Container>
      <Main>
        <PDFViewer />

        <Form />
      </Main>

      <Footer />
    </Container>
  );
};
