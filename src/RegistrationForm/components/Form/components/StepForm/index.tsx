import { useForm } from "@/RegistrationForm/context/FormContext";
import { useEffect } from "react";
import { MultipleFieldset } from "./MultipleFieldset";
import { SingleFieldset } from "./SingleFieldset";
import { FormStyled } from "./styles";

export const StepForm = () => {
  const { formRef, getCurrentForm } = useForm();

  return (
    <FormStyled ref={formRef} onSubmit={() => {}}>
      {getCurrentForm()?.fieldsets && getCurrentForm().fieldsets.map((fieldset) =>
        fieldset.is_multiple ? (
          <MultipleFieldset key={fieldset.name} fieldset={fieldset} />
        ) : (
          <SingleFieldset key={fieldset.name} fieldset={fieldset} />
        )
      )}
    </FormStyled>
  );
};

export default StepForm;
