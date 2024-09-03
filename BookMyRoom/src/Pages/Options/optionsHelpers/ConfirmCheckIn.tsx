import { useSelector } from "react-redux";

const ConfirmCheckIn = () => {
    const details = useSelector((state) => state.details.details)
    const { totalPrice, isPaid, hasBreakfast, nights } = details
    const priceForBreakfast = useSelector((state) => state.details.priceForBreakfast);
 
    const finalPriceBreakfast = priceForBreakfast * nights;
    const actualPriceForCabin = totalPrice + (hasBreakfast ? finalPriceBreakfast : 0)
    return(
        <div className="container-checkIn">
        <label>I confirm that {details.Guests.fullName} has paid the total amount of ${actualPriceForCabin}?</label>
            <input 
                type="checkbox" 
                // checked={isPaid} 
                // onChange={handleCheckboxChange} 
            />
     </div>
    )
}

export default ConfirmCheckIn;