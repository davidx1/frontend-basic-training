//TODO: Create a field that display static text, with an 'Edit' button next to it
//TODO: When the 'Edit' button is pressed, the static text should turn into an input field
//TODO: When the input field loses focus, the item should turn back to a static text
//TODO: Any changes to the value in the input field should be automatically saved when it loses focus

import { InputHTMLAttributes } from "react";

interface DynamicTextInputProps
  extends React.DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}

export const DynamicTextInput = (props: DynamicTextInputProps) => {
  return <input {...props} />;
};
