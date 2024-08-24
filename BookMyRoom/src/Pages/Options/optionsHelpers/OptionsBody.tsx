import { FaInfoCircle, FaCheckCircle, FaDollarSign } from "react-icons/fa";

const OptionsBody = ({ details }) => {
    console.log('details', details);
    const { nationalID, observations, hasBreakfast, totalPrice, isPaid } = details;

    return (
        <section>
            <div>
                <p>{details?.Guests?.fullName || "N/A"}</p>
                <span>•</span>
                <p>{details?.Guests?.nationality || "N/A"}</p>
                <span>•</span>
                <p>National ID: {nationalID || "N/A"}</p>
            </div>
            <div className="info-block">
                <span className="icon-text">
                    <FaInfoCircle />
                    <span>Observations</span>
                </span>
                {observations || "No observations"}
            </div>
            
            <div className="info-block">
                <span className="icon-text">
                    <FaCheckCircle />
                    <span>Breakfast included?</span>
                </span>
                {hasBreakfast ? "Yes" : "No"}
            </div>
       
            <div className="info-block">
                <div className="price-block">
                    <span className="icon-text">
                        <FaDollarSign />
                        <span>Total price</span>
                    </span>
                    ${totalPrice?.toFixed(2) || "0.00"}
                </div>
                <p>{isPaid ? "Paid" : "Will pay at property"}</p>
            </div>
        </section>
    );
}

export default OptionsBody;
