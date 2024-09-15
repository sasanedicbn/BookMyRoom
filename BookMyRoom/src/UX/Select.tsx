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
  const [searchSelectParams, setSearchSelectParams] = useSearchParams();

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    searchSelectParams.set('select', value); 
    setSearchSelectParams(searchSelectParams); 
    onChange(event); 
  }

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