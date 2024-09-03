import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBreakfastSetting } from "../../../api/Booking/fetchBreakfast";
import { btnsMap, getSeeDetailsBtns } from "../../../constants/constnsts";
import Button from "../../../UX/Button";
import SeeDetailsInfo from "./SeeDetailsInfo";
import { setCurrentBtns, setPriceForBreakfast } from "../../../store/detailsSlice";
import { RootState } from "../../../store";

const OptionsBody = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const details = useSelector((state: RootState) => state.details.details);
    const currentBtns = useSelector((state: RootState) => state.details.currentBtns);
    const priceForBreakfast = useSelector((state: RootState) => state.details.priceForBreakfast);
    const hasBreakfast = useSelector((state: RootState) => state.details.hasBreakfast);

    useEffect(() => {
        if (details) {
            dispatch(setCurrentBtns(getSeeDetailsBtns(details.status)));
        }
    }, [details, dispatch]);

    useEffect(() => {
        const fetchPrice = async () => {
            const data = await fetchBreakfastSetting();
            if (data) {
                dispatch(setPriceForBreakfast(data[0].breakfast));
            }
        };

        fetchPrice();
    }, [dispatch]);

    return (
        <>
            <SeeDetailsInfo
                details={details}
                hasBreakfast={hasBreakfast}
                setHasBreakfast={(value: boolean) => dispatch(setHasBreakfast(value))}
                priceForBreakfast={priceForBreakfast}
            />
            <div className="optionsBtns">
                {currentBtns.map((btn, index) => (
                    <Button key={index} type={btnsMap[btn].type} onClick={() => btnsMap[btn].handler(details.id, navigate)}>
                        {btn}
                    </Button>
                ))}
            </div>
        </>
    );
};

export default OptionsBody;
