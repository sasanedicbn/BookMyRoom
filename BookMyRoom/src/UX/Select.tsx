import React from 'react';

type SelectOption = {
  value: string | number;
  label: string;
}

type SelectProps = {
  options: SelectOption[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ options, onChange }:SelectProps) => {

  

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