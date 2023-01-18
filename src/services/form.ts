import * as Yup from "yup";

export interface IResponseOptions {
  isFieldset?: boolean;
  isArray?: boolean;
}

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
  responseOptions?: IResponseOptions;
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
        responseOptions: {
          isFieldset: false
        },
        fields: [
          { label: "Input 1", type: "text", name: "input1", validation: Yup.string().required('o campo lol é obrigatório') },
          { label: "Input 2", type: "text", name: "input2" },
          { label: "Input 3", type: "text", name: "input3" },
        ],
      },
      {
        legend: "Teste multi",
        name: "testMulti",
        is_multiple: true,
        fields: [
          { label: "Input 1", type: "text", name: "multi_input1", validation: Yup.string().required('o campo lol é obrigatório') },
          { label: "Input 2", type: "text", name: "multi_input2" },
          { label: "Input 3", type: "text", name: "multi_input3" },
        ],
      },
    ],
  },
  {
    stepTitle: "Etapa 2",
    fieldsets: [
      {
        legend: "Teste 1",
        name: "test2",
        is_multiple: false,
        responseOptions: {
          isArray: false
        },
        fields: [
          { label: "Input 1", type: "text", name: "input1", validation: Yup.string().required('o campo lol é obrigatório') },
          { label: "Input 2", type: "text", name: "input2" },
          { label: "Input 3", type: "text", name: "input3" },
        ],
      },
      {
        legend: "Teste multi",
        name: "testMulti2",
        is_multiple: true,
        fields: [
          { label: "Input 1", type: "text", name: "multi_input1", validation: Yup.string().required('o campo lol é obrigatório') },
          { label: "Input 2", type: "text", name: "multi_input2" },
          { label: "Input 3", type: "text", name: "multi_input3" },
        ],
      },
    ],
  },
  {
    stepTitle: "Etapa 3",
    fieldsets: [
      {
        legend: "Teste 1",
        name: "test3",
        is_multiple: false,
        fields: [
          { label: "Input 1", type: "text", name: "input1", validation: Yup.string().required('o campo lol é obrigatório') },
          { label: "Input 2", type: "text", name: "input2" },
          { label: "Input 3", type: "text", name: "input3" },
        ],
      },
      {
        legend: "Teste multi",
        name: "testMulti3",
        is_multiple: true,
        fields: [
          { label: "Input 1", type: "text", name: "multi_input1", validation: Yup.string().required('o campo lol é obrigatório') },
          { label: "Input 2", type: "text", name: "multi_input2" },
          { label: "Input 3", type: "text", name: "multi_input3" },
        ],
      },
    ],
  },
  {
    stepTitle: "Etapa 4",
    fieldsets: [
      {
        legend: "Teste 1",
        name: "test4",
        is_multiple: false,
        fields: [
          { label: "Input 1", type: "text", name: "input1", validation: Yup.string().required('o campo lol é obrigatório') },
          { label: "Input 2", type: "text", name: "input2" },
          { label: "Input 3", type: "text", name: "input3" },
        ],
      },
      {
        legend: "Teste multi",
        name: "testMulti4",
        is_multiple: true,
        fields: [
          { label: "Input 1", type: "text", name: "multi_input1", validation: Yup.string().required('o campo lol é obrigatório') },
          { label: "Input 2", type: "text", name: "multi_input2" },
          { label: "Input 3", type: "text", name: "multi_input3" },
        ],
      },
    ],
  },
  {
    stepTitle: "Etapa 5",
    fieldsets: [
      {
        legend: "Teste 1",
        name: "test5",
        is_multiple: false,
        fields: [
          { label: "Input 1", type: "text", name: "input1", validation: Yup.string().required('o campo lol é obrigatório') },
          { label: "Input 2", type: "text", name: "input2" },
          { label: "Input 3", type: "text", name: "input3" },
        ],
      },
      {
        legend: "Teste multi",
        name: "testMulti5",
        is_multiple: true,
        fields: [
          { label: "Input 1", type: "text", name: "multi_input1", validation: Yup.string().required('o campo lol é obrigatório') },
          { label: "Input 2", type: "text", name: "multi_input2" },
          { label: "Input 3", type: "text", name: "multi_input3" },
        ],
      },
    ],
  },
];
