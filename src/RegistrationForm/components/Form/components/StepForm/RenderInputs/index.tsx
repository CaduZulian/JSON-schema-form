import { IField } from "@/services/form";
import { Text } from "./Inputs";

interface IRenderInputs {
  fields: IField[];
  fieldsetName: string;
  storagedData: any;
}

export const RenderInputs = ({
  fields,
  fieldsetName,
  storagedData,
}: IRenderInputs) => {
  const fieldsArray = fields.map(({ type, name, label, ...rest }) => {
    switch (type) {
      case "text": {
        return (
          <Text
            key={name}
            name={name}
            label={label}
            defaultValue={storagedData?.[fieldsetName]?.[name]}
            fieldsetName={fieldsetName}
            {...rest}
          />
        );
      }
      default: {
        return <div key={name} />;
      }
    }
  });

  return <>{fieldsArray}</>;
};
