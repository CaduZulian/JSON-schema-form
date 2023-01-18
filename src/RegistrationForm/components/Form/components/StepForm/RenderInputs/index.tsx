import { IField } from "@/services/form";
import { Text } from "./Inputs";

interface IRenderInputs {
  fields: IField[];
  fieldsetName: string;
  storagedData: any;
  type: "multiple" | "single";
  inputIndex?: number;
}

export const RenderInputs = ({
  fields,
  fieldsetName,
  storagedData,
  type,
  inputIndex,
}: IRenderInputs) => {
  const fieldsArray = fields.map(
    ({ type: inputType, name, label, ...rest }) => {
      switch (inputType) {
        case "text": {
          return (
            <Text
              key={name}
              label={label}
              name={
                type === "multiple" && inputIndex !== undefined
                  ? `${fieldsetName}[${inputIndex}].${name}`
                  : name
              }
              defaultValue={
                type === "multiple" && inputIndex !== undefined
                  ? storagedData?.[fieldsetName]?.[inputIndex]?.[name]
                  : storagedData?.[fieldsetName]?.[name]
              }
              fieldsetName={type === "multiple" ? null : fieldsetName}
              {...rest}
            />
          );
        }
        default: {
          return <div key={name} />;
        }
      }
    }
  );

  return <>{fieldsArray}</>;
};
