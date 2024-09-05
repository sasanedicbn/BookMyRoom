import { useSelector, useDispatch } from "react-redux";
import { calculateNights } from "../../../constants/constnsts";
import { setisPaid } from "../../../store/detailsSlice";
import { RootState } from "../../../store/store";

const ConfirmCheckIn = () => {
    const dispatch = useDispatch();
    const details = useSelector((state: RootState) => state.details.details);
    const priceForBreakfast = useSelector((state: RootState) => state.details.priceForBreakfast);

    // if (!details) {
    //     return 
    // }

    const { totalPrice, isPaid, hasBreakfast } = details;

    const nights = calculateNights(details.created_at, details.finish_booking);
    const finalPriceBreakfast = priceForBreakfast * nights;
    const actualPriceForCabin = totalPrice + (hasBreakfast ? finalPriceBreakfast : 0);

    const handleCheckboxChange = () => {
        dispatch(setisPaid(!isPaid));  
    };

    return (
        <div className="container-checkIn">
            <label>
                I confirm that {details.Guests.fullName} has paid the total amount of ${actualPriceForCabin}?
            </label>
            <input 
                type="checkbox" 
                checked={isPaid} 
                onChange={handleCheckboxChange} 
            />
        </div>
    );
}

export default ConfirmCheckIn;
