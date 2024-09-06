import { useSelector } from "react-redux";
import { FaInfoCircle, FaCheckCircle } from "react-icons/fa";
import { calculateNights, formatBookingDate } from "../../../constants/constnsts";
import BreakfastCheckbox from "./BreakFastCheckBox";
import { parseISO, format } from "date-fns";
import { RootState } from "../../../store/store";

const SeeDetailsInfo = () => {
    const details = useSelector((state:RootState) => state.details.details);
    const hasBreakfast = useSelector((state:RootState) => state.details.hasBreakfast);
    const priceForBreakfast = useSelector((state:RootState) => state.details.priceForBreakfast);
    if(!details) return;

    const { observations, totalPrice, isPaid, cabinId } = details;

    const nights = calculateNights(details.created_at, details.finish_booking);

    const formattedStartDate = format(parseISO(details.created_at), "EEE, d MMM yyyy");
    const formattedEndDate = format(parseISO(details.finish_booking), "EEE, d MMM yyyy");
    const finalPriceBreakfast = priceForBreakfast * nights;
    const actualPriceForCabin = totalPrice + (hasBreakfast ? finalPriceBreakfast : 0)

    return (
        <section className="optionsBody-wrapper">
            <header className="optionsBody-header">
                <div className="header-details">
                    <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                        ></path>
                    </svg>
                    <p>
                        {nights} nights in Cabin <span>{cabinId}</span>
                    </p>
                </div>
                <p>{formattedStartDate} — {formattedEndDate}</p>
            </header>

            <section className="optionsBody-section">
                <div className="guest-details">
                    <p>{details?.Guests?.fullName || "N/A"}</p>
                    <span>•</span>
                    <p>{details?.Guests?.email || "N/A"}</p>
                    <span>•</span>
                    <p>National ID: #{details?.Guests?.nationalID || "N/A"}</p>
                </div>

                <div className="info-block">
                    <span className="icon-text">
                        <FaInfoCircle />
                        <span>Observations</span>
                    </span>
                    <span className="status">
                        {observations || "No observations"}
                    </span>
                </div>

                <div className="info-block">
                    <span className="icon-text">
                        <FaCheckCircle />
                        <span>Breakfast included?</span>
                    </span>
                    <span className="status">
                        {hasBreakfast ? "Yes" : "No"}
                    </span>
                </div>

                <div className={`info-block-footer ${isPaid ? 'paid' : 'not-paid'}`}>
                    <div className="price-block">
                        <span className="icon-text">
                            <span>Total price</span>
                        </span>
                        ${actualPriceForCabin.toFixed(2)} (
                        ${totalPrice.toFixed(2)} cabin
                        {hasBreakfast && (
                            <> + ${finalPriceBreakfast} breakfast</>
                        )}
                        )
                    </div>
                    <p className="status-pay">{isPaid ? "Paid" : "Will pay at property"}</p>
                </div>
                <footer className="optionsBody-footer">
                    {(!hasBreakfast || hasBreakfast) && <BreakfastCheckbox bookingId={details.id.toString()} />}
                    <p>{formatBookingDate(details.Guests.created_at)}</p>
                </footer>
            </section>
        </section>
    );
};

export default SeeDetailsInfo;
