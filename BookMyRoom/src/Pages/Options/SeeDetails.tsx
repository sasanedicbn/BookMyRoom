import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../../supabase/supabaseClient";
import ComponentWrapper from "../../UX/ComponentWrapper";
import OptionsHeader from "./optionsHelpers/OptionsHeader";
import OptionsBody from "./optionsHelpers/OptionsBody";

const SeeDetails = () => {
    const { id } = useParams(); 
    const [details, setDetails] = useState(null); 

    useEffect(() => {
        const fetchDetails = async () => {
            const { data, error } = await supabase
                .from('Bookings')
                .select('*, Guests(*)') 
                .eq('id', id)
                .single(); 

            if (error) {
                
                console.log('Greska prilikom hvatanja detalja', error);
            } else {
                setDetails(data); 
            }
        };

        fetchDetails();
    }, [id]);

    console.log('Detalji iz single:', details); 

    return (
        <ComponentWrapper type={'tableWrapper'}>
            {details ? (
                <>
                <OptionsHeader details={details}/>
                <OptionsBody details={details}/>
                </>
            ) : (
                <p>Loading...</p> 
            )}
        </ComponentWrapper>
    );
};

export default SeeDetails;
