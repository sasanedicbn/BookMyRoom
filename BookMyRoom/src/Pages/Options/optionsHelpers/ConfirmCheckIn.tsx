import { useSelector } from "react-redux";

const ConfirmCheckIn = () => {
    const details = useSelector((state) => state.details.details)
    const { totalPrice } = details
    return(
        <div className="breakfast-checkbox">
        <label>   
            I confirm that ${details.Guests.fullName} has paid the total amount of $${totalPrice}.
            <input 
                type="checkbox" 
                checked={hasBreakfast} 
                onChange={handleCheckboxChange} 
            />
        </label>
    </div>
    )
}

export default ConfirmCheckIn;