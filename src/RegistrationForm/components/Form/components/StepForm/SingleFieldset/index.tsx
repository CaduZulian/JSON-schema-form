import { useForm } from "@/RegistrationForm/context/FormContext";
import { IFieldset } from "@/services/form";
import { Scope } from "@unform/core";
import { useEffect } from "react";
import { RenderInputs } from "../RenderInputs";
import { FieldsetStyled, LegendStyled } from "../styles";

interface ISingleFieldset {
  fieldset: IFieldset;
}

export const SingleFieldset = ({ fieldset }: ISingleFieldset) => {
  const { formRef, getStoragedData, setStoragedData } = useForm();
  // console.log("SingleFieldset");
  // console.log(fieldset);

  useEffect(() => {
    function saveChangesBeforeLeave() {
      const storagedData = getStoragedData();

      const data = formRef.current?.getData();

      setStoragedData({
        ...storagedData,
        ...data,
      });
    }

    window.addEventListener("beforeunload", saveChangesBeforeLeave);
    return () => {
      window.removeEventListener("beforeunload", saveChangesBeforeLeave);

      saveChangesBeforeLeave();
    };
  }, []);

  return (
    <Scope path={fieldset.name}>
      <FieldsetStyled>
        <LegendStyled>{fieldset.legend}</LegendStyled>

        <RenderInputs
          type="single"
          fields={fieldset.fields}
          fieldsetName={fieldset.name}
          storagedData={getStoragedData()}
        />
      </FieldsetStyled>
    </Scope>
  );
};
