import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateHasBreakfast } from '../../../api/Booking/updateBreakfast';
import { setHasBreakfast } from '../../../store/detailsSlice';
import { RootState } from '../../../store';

type BreakfastCheckboxProps = {
    bookingId: string;
};

const BreakfastCheckbox = ({ bookingId }: BreakfastCheckboxProps) => {
    const dispatch = useDispatch();
    const hasBreakfast = useSelector((state: RootState) => state.details.hasBreakfast);

    const handleCheckboxChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        dispatch(setHasBreakfast(isChecked));
        await updateHasBreakfast(bookingId, isChecked);
    };

    return (
        <div className="breakfast-checkbox">
            <label>
                Do you want to add breakfast?
                <input 
                    type="checkbox" 
                    checked={hasBreakfast} 
                    onChange={handleCheckboxChange} 
                />
            </label>
        </div>
    );
};

export default BreakfastCheckbox;
