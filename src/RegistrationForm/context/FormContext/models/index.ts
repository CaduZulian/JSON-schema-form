import { IJsonForm } from "@/services/form";
import { FormHandles } from "@unform/core";

export interface ISetStoragedData {
  [key: string]:
    | string
    | {
        [key: string]: string;
      }
    | {
        [key: string]: string;
      }[];
}

export interface IFormContext {
  formRef: React.RefObject<FormHandles>;
  JSONForm: any;
  getJSONForm: () => void;
  steps: string[];
  stepsDisabled: boolean[];
  currentStep: string;
  changeCurrentStep: (step: string) => void;
  getCurrentForm: () => IJsonForm;
  handleSubmit: () => void;
  getStoragedData: () => ISetStoragedData;
  setStoragedData: (props: ISetStoragedData) => void;
}
