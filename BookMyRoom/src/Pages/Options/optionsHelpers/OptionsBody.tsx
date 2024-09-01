// OptionsBody.tsx
import { useEffect, useState } from "react";
import { fetchBreakfastSetting } from "../../../api/Booking/fetchBreakfast";
import { btnsMap, getSeeDetailsBtns } from "../../../constants/constnsts";
import Button from "../../../UX/Button";
import { BookingDetails } from "../../../types/types";
import SeeDetailsInfo from "./SeeDetailsInfo";

type OptionsBodyProps = {
    details: BookingDetails;
};

const OptionsBody = ({ details }: OptionsBodyProps) => {
    const [currentBtns, setCurrentBtns] = useState<string[]>([]);
    const [priceForBreakfast, setPriceForBreakfast] = useState<number>(0);
    const [hasBreakfast, setHasBreakfast] = useState<boolean>(details.hasBreakfast);

    useEffect(() => {
        const fetchPrice = async () => {
            const data = await fetchBreakfastSetting();
            if (data) {
                setPriceForBreakfast(data[0].breakfast);
            }
        };

        fetchPrice();
    }, []);

    useEffect(() => {
        setCurrentBtns(getSeeDetailsBtns(details.status));
    }, [details]);

    return (
        <>
            <SeeDetailsInfo
                details={details}
                hasBreakfast={hasBreakfast}
                setHasBreakfast={setHasBreakfast}
                priceForBreakfast={priceForBreakfast} // Prosledi priceForBreakfast
            />
            <div className="optionsBtns">
                {currentBtns.map((btn, index) => (
                    <Button key={index} type={btnsMap[btn].type} onClick={() => btnsMap[btn].handler(details.id)}>
                        {btn}
                    </Button>
                ))}
            </div>
        </>
    );
};

export default OptionsBody;
