import { useSelector } from "react-redux";

const ConfirmCheckIn = () => {
    const details = useSelector((state) => state.details.details)
    const { totalPrice, isPaid } = details
    return(
        <div className="container-checkIn">
        <label>I confirm that {details.Guests.fullName} has paid the total amount of ${totalPrice}?</label>
            <input 
                type="checkbox" 
                // checked={isPaid} 
                // onChange={handleCheckboxChange} 
            />
     </div>
    )
}

export default ConfirmCheckIn;