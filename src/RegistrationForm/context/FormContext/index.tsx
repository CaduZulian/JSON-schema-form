import { IJsonForm } from "@/services/form";
import { FormHandles } from "@unform/core";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { ApiFake } from "../../../services/api";

// types
import { IFormContext } from "./models";

const FormContext = createContext({} as IFormContext);

interface IFormProvider {
  children: React.ReactNode;
}

const FormProvider = ({ children }: IFormProvider) => {
  const formRef = useRef<FormHandles>(null);

  const [JSONForm, setJSONForm] = useState<IJsonForm[]>();
  const [steps, setSteps] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState<string>("");

  const getJSONForm = () => {
    ApiFake()
      .get()
      .then((response) => {
        setJSONForm(response);
      });
  };

  useEffect(() => {
    if (JSONForm) {
      const stepTitles = JSONForm.map(({ stepTitle }) => {
        return stepTitle;
      });

      setSteps(stepTitles);
      setCurrentStep(stepTitles[0]);
    }
  }, [JSONForm]);

  const changeCurrentStep = (step: string) => {
    setCurrentStep(step);
  };

  const getCurrentForm = () => {
    if (JSONForm) {
      return JSONForm.filter(({ stepTitle }) => {
        return stepTitle === currentStep;
      })[0];
    }
  };

  const handleSubmit = () => {
    if (JSONForm && JSONForm?.length > steps.indexOf(currentStep) + 1) {
      const data = formRef.current?.getData();

      const storagedData = localStorage.getItem("registrationForm")
        ? JSON.parse(localStorage.getItem("registrationForm")!)
        : {};
      
      localStorage.setItem(
        "registrationForm",
        JSON.stringify({ ...storagedData, ...data })
      );

      setCurrentStep(steps[steps.indexOf(currentStep) + 1]);
    }

    //if (!(validateForm(formRef, data, validations))) return
  };

  return (
    <FormContext.Provider
      value={{
        JSONForm,
        getJSONForm,
        steps,
        currentStep,
        changeCurrentStep,
        getCurrentForm,
        formRef,
        handleSubmit,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

const useForm = () => {
  return useContext(FormContext);
};

export { FormProvider, useForm };
