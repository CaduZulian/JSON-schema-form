import * as Yup from "yup";
import { FormHandles } from "@unform/core";

export default async function validateForm(
  formRef: React.RefObject<FormHandles>,
  data: Record<string, any> | undefined,
  validations: any
) {
  try {
    formRef.current?.setErrors({});
    const schema = Yup.object().shape(validations);

    await schema.validate(data, { abortEarly: false });
    return true;
  } catch (err) {
    const validationErrors: any = {};
    if (err instanceof Yup.ValidationError) {
      err.inner.forEach((error) => {
        validationErrors[error.path || ""] = error.message;
      });
      formRef.current?.setErrors(validationErrors);
    }
    return false;
  }
}
