// SeeDetails.tsx
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../../supabase/supabaseClient";
import ComponentWrapper from "../../UX/ComponentWrapper";
import OptionsHeader from "./optionsHelpers/OptionsHeader";
import OptionsBody from "./optionsHelpers/OptionsBody";
import Spinner from "../../global/Spinner";
import { BookingDetails } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { setDetails } from "../../store/detailsSlice";

const SeeDetails = () => {
    const { id } = useParams<{ id: string }>();
    // const [details, setDetails] = useState<BookingDetails | null>(null);
    const dispatch = useDispatch()
    const details = useSelector((state) => state.details.details)

    useEffect(() => {
        const fetchDetails = async () => {
            const { data, error } = await supabase
                .from('Bookings')
                .select('*, Guests(*)')
                .eq('id', id)
                .single();

            if (error) {
                console.log('Error fetching details', error);
            } else {
                dispatch(setDetails(data));
                console.log('iz id params details data',data)
            }
        };

        fetchDetails();
        
    }, [id]);

    return (
        <ComponentWrapper type={'tableWrapper'}>
            {details ? (
                <>
                <p>RAdi</p>
                    <OptionsHeader  />
                    {/* <OptionsBody details={details} /> */}
                </>
            ) : (
                <Spinner />
            )}
        </ComponentWrapper>
    );
};

export default SeeDetails;
