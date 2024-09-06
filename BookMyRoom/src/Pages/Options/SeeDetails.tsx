import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { supabase } from "../../supabase/supabaseClient";
import ComponentWrapper from "../../UX/ComponentWrapper";
import OptionsBody from "./optionsHelpers/OptionsBody";
import Spinner from "../../global/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { setDetails } from "../../store/detailsSlice";
import { RootState } from "../../store/store";
import OptionsHeader from "./optionsHelpers/OptionsHeader";

const SeeDetails = () => {
    const { id } = useParams<{ id: string }>()
    const dispatch = useDispatch();
    const details = useSelector((state:RootState ) => state.details.details);

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
            }
        };

        fetchDetails();
        
    }, [id, dispatch]);

    return (
        <ComponentWrapper type={'tableWrapper'}>
            {details ? (
                <>
                    <OptionsHeader />
                    <OptionsBody />
                </>
            ) : (
                <Spinner />
            )}
        </ComponentWrapper>
    );
};

export default SeeDetails;
