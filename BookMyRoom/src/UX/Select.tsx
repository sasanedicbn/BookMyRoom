const Select = ({ options, onChange, className }) => {
    return (
      <select onChange={onChange} className={className}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  };
  
  export default Select;
  