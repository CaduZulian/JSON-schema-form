import validateForm from "@/RegistrationForm/validation";
import { IJsonForm } from "@/services/form";
import { FormHandles } from "@unform/core";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { ApiFake } from "../../../services/api";
import * as Yup from "yup";

// types
import { IFormContext, ISetStoragedData } from "./models";

const FormContext = createContext({} as IFormContext);

interface IFormProvider {
  children: React.ReactNode;
}

const FormProvider = ({ children }: IFormProvider) => {
  const formRef = useRef<FormHandles>(null);

  const [JSONForm, setJSONForm] = useState<IJsonForm[]>();
  const [steps, setSteps] = useState<string[]>([]);
  const [stepsDisabled, setStepsDisabled] = useState<boolean[]>([]);
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

      const StepDisabledArray = JSONForm.map(({ fieldsets }, index) => {
        const storagedData = getStoragedData();

        return index === 0
          ? false
          : !fieldsets.some(({ name: fieldsetName, fields, is_multiple }) => {
              return fields.some(({ name: fieldName }) => {
                if (is_multiple) {
                  return storagedData[fieldsetName]?.some(
                    (item: { [key: string]: string }) => {
                      return item[fieldName] && item[fieldName] !== "";
                    }
                  );
                } else {
                  return (
                    storagedData[fieldsetName]?.[fieldName] &&
                    storagedData[fieldsetName]?.[fieldName] !== ""
                  );
                }
              });
            });
      });

      setSteps(stepTitles);
      setStepsDisabled(StepDisabledArray);
      setCurrentStep(stepTitles[0]);
    }
  }, [JSONForm]);

  const changeCurrentStep = async (step: string) => {
    if (steps.indexOf(currentStep) < steps.indexOf(step)) {
      if (!(await validationData())) return;
    }

    setCurrentStep(step);
  };

  const getCurrentForm = () => {
    if (JSONForm) {
      return JSONForm.filter(({ stepTitle }) => {
        return stepTitle === currentStep;
      })[0];
    }

    return {} as IJsonForm;
  };

  const validationData = async () => {
    const formData =
      steps.indexOf(currentStep) !== steps.length - 1
        ? [getCurrentForm()]
        : JSONForm;

    if (
      formData?.some(({ fieldsets }) =>
        fieldsets.some(({ fields }) =>
          fields.some(({ validation }) => validation)
        )
      )
    ) {
      let validations = {};

      formData.forEach(({ fieldsets, stepTitle }) => {
        fieldsets.forEach(({ name: fieldsetName, fields, is_multiple }) => {
          fields.forEach(({ name: fieldName, validation }) => {
            if (
              (stepTitle === currentStep ||
                steps.indexOf(currentStep) !== steps.length - 1) &&
              validation
            ) {
              if (is_multiple) {
                validations = {
                  ...validations,
                  [`${fieldsetName}`]: Yup.array().of(
                    Yup.object().shape({
                      [fieldName]: validation,
                    })
                  ),
                };
              } else {
                validations = {
                  ...validations,
                  [`${fieldsetName}`]: Yup.object().shape({
                    [fieldName]: validation,
                  }),
                };
              }
            }
          });
        });
      });

      const data = formRef.current?.getData();

      return await validateForm(formRef, data, validations);
    }
  };

  const handleSubmit = async () => {
    if (JSONForm) {
      if (JSONForm?.length > steps.indexOf(currentStep) + 1) {
        if (!(await validationData())) return;

        const data = formRef.current?.getData();

        const storagedData = getStoragedData();

        setStoragedData({ ...storagedData, ...data });

        setCurrentStep(steps[steps.indexOf(currentStep) + 1]);
        setStepsDisabled((oldData) => {
          const newData = oldData;
          newData[steps.indexOf(currentStep) + 1] = false;
          return newData;
        });
      } else {
        if (!(await validationData())) return;

        const storagedData = getStoragedData();
        const data = formRef.current?.getData();

        const finalData = { ...storagedData, ...data };

        let response = {};

        JSONForm.forEach(({ fieldsets }) => {
          fieldsets.forEach(({ name, responseOptions, is_multiple }) => {
            if (!is_multiple && responseOptions) {
              if (responseOptions.isArray === true) {
                response = { ...response, [name]: [finalData[name]] };
              } else if (responseOptions.isFieldset === false) {
                response = { ...response, ...finalData[name] };
              } else {
                response = { ...response, [name]: finalData[name] };
              }
            } else {
              response = { ...response, [name]: finalData[name] };
            }
          });
        });

        console.log(response);
      }
    }
  };

  const getStoragedData = () => {
    return JSON.parse(localStorage.getItem("registrationForm") ?? "{}");
  };

  const setStoragedData = (props: ISetStoragedData) => {
    return localStorage.setItem("registrationForm", JSON.stringify(props));
  };

  return (
    <FormContext.Provider
      value={{
        JSONForm,
        getJSONForm,
        steps,
        stepsDisabled,
        currentStep,
        changeCurrentStep,
        getCurrentForm,
        formRef,
        handleSubmit,
        getStoragedData,
        setStoragedData,
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
