interface GenericSelectProp<T extends { label: string }> {
  options: T[];
  value: T;
  onChange: (newVal: T) => void;
}

export const Select = <T extends { label: string }>({
  options,
  value,
  onChange,
}: GenericSelectProp<T>) => {
  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const displayString = e.target.value;
    const selected = options.find((option) => option.label === displayString);
    if (selected) {
      onChange(selected);
    }
  };

  return (
    <select onChange={handleChange} value={value.label}>
      {options.map(({ label }) => {
        return (
          <option value={label} key={label}>
            {label}
          </option>
        );
      })}
    </select>
  );
};
