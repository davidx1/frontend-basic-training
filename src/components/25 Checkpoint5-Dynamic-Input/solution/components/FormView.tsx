interface FormViewProps {
  id?: string;
  label: string;
  value?: string;
  toggleEdit: () => void;
}

export const FormView = ({ label, id, value, toggleEdit }: FormViewProps) => {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <span id={id}>{value}</span>
      <button onClick={toggleEdit}>Edit</button>
    </p>
  );
};
