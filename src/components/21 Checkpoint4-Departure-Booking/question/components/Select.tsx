// TODO: Add typescript and finish implementing this Select element.
// options is accepts an array of any type, as long as the type have a property 'label', Hint: Generic
// Label will be used as the value and key of the underlying <select/ > and <option> elements;
export const Select = ({ options, value }) => {
  return (
    <select>
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
