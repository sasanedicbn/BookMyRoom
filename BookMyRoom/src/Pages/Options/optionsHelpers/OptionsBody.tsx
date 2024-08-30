// OptionsBody.tsx
import { FaInfoCircle, FaCheckCircle } from "react-icons/fa";
import Button from "../../../UX/Button";
import { btnsMap, formatBookingDate, getSeeDetailsBtns } from "../../../constants/constnsts";
import { useEffect, useState } from "react";
import { differenceInDays, parseISO, format } from "date-fns";
import { fetchBreakfastSetting } from "../../../api/Booking/fetchBreakfast";
import BreakfastCheckbox from "./BreakFastCheckBox";
import { BookingDetails } from "../../../types/types";

type OptionsBodyProps = {
    details: BookingDetails;
};

const OptionsBody = ({ details }: OptionsBodyProps) => {
    const [currentBtns, setCurrentBtns] = useState<string[]>([]);
    const [priceForBreakfast, setPriceForBreakfast] = useState<number>(0);
    const [hasBreakfast, setHasBreakfast] = useState<boolean>(details.hasBreakfast);

    const { observations, totalPrice, isPaid, cabinId } = details;

    useEffect(() => {
        const fetchPrice = async () => {
            const data = await fetchBreakfastSetting();
            if (data) {
                setPriceForBreakfast(data[0].breakfast);
            }
        };

        fetchPrice();
    }, []);

    const actualPriceForCabin = totalPrice - (hasBreakfast ? priceForBreakfast : 0);

    const createdAt = parseISO(details.created_at);
    const finishBooking = parseISO(details.finish_booking);
    const nights = differenceInDays(finishBooking, createdAt);

    const formattedStartDate = format(createdAt, "EEE, d MMM yyyy");
    const formattedEndDate = format(finishBooking, "EEE, d MMM yyyy");
    const finalPrice = totalPrice * nights;
    const finalPriceBreakfast = priceForBreakfast * nights;

    useEffect(() => {
        setCurrentBtns(getSeeDetailsBtns(details.status));
    }, [details]);

    return (
        <>
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
                            ${finalPrice.toFixed(2)} (
                            ${actualPriceForCabin.toFixed(2)} cabin
                            {hasBreakfast && (
                                <> + ${finalPriceBreakfast.toFixed(2)} breakfast</>
                            )}
                            )
                        </div>
                        <p className="status-pay">{isPaid ? "Paid" : "Will pay at property"}</p>
                    </div>
                    <footer className="optionsBody-footer">
                        {!hasBreakfast && <BreakfastCheckbox bookingId={details.id.toString()} onChange={(isChecked) => setHasBreakfast(isChecked)} />}
                        <p>{formatBookingDate(details.Guests.created_at)}</p>
                    </footer>
                </section>
            </section>
            <div className="optionsBtns">
                {currentBtns.map((btn, index) => (
                    <Button key={index} type={btnsMap[btn].type} onClick={() => btnsMap[btn].handler(details.id.toString())}>
                        {btn}
                    </Button>
                ))}
            </div>
        </>
    );
};

export default OptionsBody;
