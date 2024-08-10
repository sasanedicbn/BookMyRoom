const Select = ({ options, onChange}) => {
    return (
      <select onChange={onChange} className='sort-select'>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  };
  
  export default Select;
  