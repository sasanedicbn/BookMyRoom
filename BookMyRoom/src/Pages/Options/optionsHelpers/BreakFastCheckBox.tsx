import { useState } from 'react';
import { updateHasBreakfast } from '../../../api/updateBreakfast';

const BreakfastCheckbox = ({ bookingId, onChange }) => {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = async (event) => {
        const isChecked = event.target.checked;
        console.log('ischedked', isChecked)
        setChecked(isChecked);
        if (onChange) {
            onChange(isChecked);
        }
        
        await updateHasBreakfast(bookingId, isChecked);
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
