import { IFieldset } from "@/services/form";
import { Scope } from "@unform/core";
import { RenderInputs } from "../RenderInputs";
import { FieldsetStyled, LegendStyled } from "../styles";

interface IMultipleFieldset {
  fieldset: IFieldset;
}

export const MultipleFieldset = ({ fieldset }: IMultipleFieldset) => {
  // console.log("MultipleFieldset");
  // console.log(fieldset);``

  return (
    <Scope path={fieldset.name}>
      <FieldsetStyled>
        <LegendStyled>{fieldset.legend}</LegendStyled>


        <RenderInputs fields={fieldset.fields} fieldsetName={fieldset.name} storagedData={localStorage.getItem('registrationForm')}/>
      </FieldsetStyled>
    </Scope>
  );
};
