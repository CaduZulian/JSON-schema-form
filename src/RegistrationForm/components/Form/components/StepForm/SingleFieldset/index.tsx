import { IFieldset } from "@/services/form";
import { Scope } from "@unform/core";
import { RenderInputs } from "../RenderInputs";
import { FieldsetStyled, LegendStyled } from "../styles";

interface ISingleFieldset {
  fieldset: IFieldset;
}

export const SingleFieldset = ({ fieldset }: ISingleFieldset) => {
  // console.log("SingleFieldset");
  // console.log(fieldset);

  return (
    <Scope path={fieldset.name}>
      <FieldsetStyled>
        <LegendStyled>{fieldset.legend}</LegendStyled>

        <RenderInputs
          fields={fieldset.fields}
          fieldsetName={fieldset.name}
          storagedData={JSON.parse(localStorage.getItem("registrationForm") ?? '')}
        />
      </FieldsetStyled>
    </Scope>
  );
};
