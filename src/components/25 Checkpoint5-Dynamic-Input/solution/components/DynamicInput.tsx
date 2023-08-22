import { InputHTMLAttributes, useState } from "react";
import { FormEdit } from "./FormEdit";
import { FormView } from "./FormView";

const useToggle = (initialVlaue: boolean) => {
  const [state, setState] = useState<boolean>(initialVlaue);
  const setToggle = () => setState(!state);

  return { state, setToggle };
};

interface DynamicTextInputProps
  extends React.DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}

export const DynamicTextInput = (props: DynamicTextInputProps) => {
  const curriedOnBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    if (props.onBlur) props.onBlur(e);
    toggleEdit();
  };

  const { state: isEditing, setToggle: toggleEdit } = useToggle(false);
  return isEditing ? (
    <FormEdit {...props} onBlur={curriedOnBlur} />
  ) : (
    <FormView
      id={props.id}
      label={props.label}
      value={props.value?.toString()}
      toggleEdit={toggleEdit}
    />
  );
};
