// SeeDetails.tsx
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../../supabase/supabaseClient";
import ComponentWrapper from "../../UX/ComponentWrapper";
import OptionsHeader from "./optionsHelpers/OptionsHeader";
import OptionsBody from "./optionsHelpers/OptionsBody";
import Spinner from "../../global/Spinner";
import { BookingDetails } from "../../types/types";

const SeeDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [details, setDetails] = useState<BookingDetails | null>(null);

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
                setDetails(data);
            }
        };

        fetchDetails();
    }, [id]);

    return (
        <ComponentWrapper type={'tableWrapper'}>
            {details ? (
                <>
                    <OptionsHeader details={details} />
                    <OptionsBody details={details} />
                </>
            ) : (
                <Spinner />
            )}
        </ComponentWrapper>
    );
};

export default SeeDetails;
