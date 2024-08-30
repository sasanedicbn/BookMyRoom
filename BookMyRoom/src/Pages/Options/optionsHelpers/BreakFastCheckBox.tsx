import { useState, ChangeEvent } from 'react';
import { updateHasBreakfast } from '../../../api/Booking/updateBreakfast';

type BreakfastCheckboxProps = {
    bookingId: string;
    onChange: (isChecked: boolean) => void;
}

const BreakfastCheckbox = ({ bookingId, onChange }: BreakfastCheckboxProps) => {
    const [checked, setChecked] = useState<boolean>(false);

    const handleCheckboxChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        console.log('isChecked', isChecked);
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
