import { ChangeEvent, useState } from "react";

export const useForm = (initialForm: Record<string, string>) => {
  const [formState, setFormState] = useState(initialForm);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const onReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFormState(initialForm);
    console.log("Contenido del formulario borrado");
  };

  return {
    formState,
    onChangeInput,
    onReset,
  };
};
