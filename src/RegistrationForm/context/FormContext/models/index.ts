import { IJsonForm } from "@/services/form";
import { FormHandles } from "@unform/core";

export interface IFormContext {
  formRef: React.RefObject<FormHandles>
  JSONForm: any;
  getJSONForm: () => void;
  steps: string[];
  currentStep: string;
  changeCurrentStep: (step: string) => void;
  getCurrentForm: () => IJsonForm | undefined;
  handleSubmit: () => void;
}
