import * as Yup from "yup";

export interface IField {
  name: string;
  label: string;
  type:
    | "text"
    | "masked"
    | "date"
    | "nullableDate"
    | "time"
    | "select"
    | "radio"
    | "money"
    | "search"
    | "noaddsearch"
    | "cpfcnpj"
    | "textarea"
    | "blank";
  validation?: any;
}

export interface IFieldset {
  legend: string;
  name: string;
  is_multiple: boolean;
  fields: IField[];
}

export interface IJsonForm {
  stepTitle: string;
  fieldsets: IFieldset[];
}

export const Form: IJsonForm[] = [
  {
    stepTitle: "Etapa 1",
    fieldsets: [
      {
        legend: "Teste 1",
        name: "test1",
        is_multiple: false,
        fields: [
          { label: "Input 1", type: "text", name: "input1", validation: Yup.string().required('o campo lol é obrigatório') },
          { label: "Input 2", type: "text", name: "input2" },
          { label: "Input 3", type: "text", name: "input3" },
        ],
      },
    ],
  },
  {
    stepTitle: "Etapa 2",
    fieldsets: [
      { legend: "Teste 2", name: "test2", is_multiple: true, fields: [] },
    ],
  },
];
