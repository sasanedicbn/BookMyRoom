import React from 'react';
import { useSearchParams } from 'react-router-dom';

type SelectOption = {
  value: string | number;
  label: string;
}

type SelectProps = {
  options: SelectOption[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ options, onChange }) => {

  

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