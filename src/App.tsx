import { RegistrationForm } from "./RegistrationForm"
import { FormProvider } from "./RegistrationForm/context/FormContext"
import { GlobalStyles } from "./styles/globals"

function App() {
  return (
    <FormProvider>
      <RegistrationForm />
      <GlobalStyles />
    </FormProvider>
  )
}

export default App
