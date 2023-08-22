import { InputHTMLAttributes, useEffect, useRef } from "react";

export interface FormEditProps
  extends React.DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}

export const FormEdit = ({ label, ...rest }: FormEditProps) => {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return (
    <p>
      <label htmlFor={rest.id}>{label}</label>
      <input {...rest} type="text" ref={ref} />
    </p>
  );
};
