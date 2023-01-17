import { Form } from "./form";

export const ApiFake = () => {
  const get = async () => {
    return Form;
  };

  return {
    get,
  };
};
