import { useForm } from "@/RegistrationForm/context/FormContext";
import { IFieldset } from "@/services/form";
import { useEffect, useState } from "react";
import { RenderInputs } from "../RenderInputs";
import { FieldsetStyled, LegendStyled } from "../styles";

interface IMultipleFieldset {
  fieldset: IFieldset;
}

export const MultipleFieldset = ({ fieldset }: IMultipleFieldset) => {
  // console.log("MultipleFieldset");
  // console.log(fieldset);
  const { formRef, getStoragedData, setStoragedData } = useForm();

  const [nFieldset, setNFieldset] = useState<number>(defaultValueNFieldset);

  function defaultValueNFieldset() {
    if (
      getStoragedData()?.[fieldset.name] &&
      getStoragedData()?.[fieldset.name]?.length > 0
    ) {
      return Number(getStoragedData()?.[fieldset.name]?.length);
    } else {
      return 1;
    }
  }

  useEffect(() => {
    function saveChangesBeforeLeave() {
      const storagedData = getStoragedData();

      const data = formRef.current?.getData();

      setStoragedData({ ...storagedData, ...data });
    }

    window.addEventListener("beforeunload", saveChangesBeforeLeave);
    return () => {
      window.removeEventListener("beforeunload", saveChangesBeforeLeave);

      saveChangesBeforeLeave();
    };
  }, []);

  return (
    <>
      {Array(nFieldset)
        .fill(0)
        .map((_, index) => {
          return (
            <FieldsetStyled key={`${fieldset.name} - ${index}`}>
              <LegendStyled>
                {fieldset.legend} {nFieldset > 1 ? index + 1 : null}
              </LegendStyled>

              {index === 0 ? (
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "flex-end",
                    gap: "1rem",
                  }}
                >
                  <button
                    onClick={() => setNFieldset((oldState) => oldState + 1)}
                    style={{ backgroundColor: "#00ff00" }}
                  >
                    adicionar
                  </button>
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "flex-end",
                    gap: "1rem",
                  }}
                >
                  <button
                    onClick={() => setNFieldset((oldState) => oldState + 1)}
                  >
                    adicionar
                  </button>

                  <button
                    onClick={() => setNFieldset((oldState) => oldState - 1)}
                  >
                    remover
                  </button>
                </div>
              )}

              <RenderInputs
                type="multiple"
                fields={fieldset.fields}
                fieldsetName={fieldset.name}
                storagedData={getStoragedData()}
                inputIndex={index}
              />
            </FieldsetStyled>
          );
        })}
    </>
  );
};
