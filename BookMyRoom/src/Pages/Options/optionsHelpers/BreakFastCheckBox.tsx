import  { useState } from 'react';

const BreakfastCheckbox = ({ onChange }) => {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setChecked(event.target.checked);
        if (onChange) {
            onChange(event.target.checked);
        }
    };

    return (
        <div className="breakfast-checkbox">
            <label>
                Do you want to add breakfast?
                <input 
                    type="checkbox" 
                    checked={checked} 
                    onChange={handleCheckboxChange} 
                />
            </label>
        </div>
    );
};

export default BreakfastCheckbox;
