import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../../supabase/supabaseClient";
import ComponentWrapper from "../../UX/ComponentWrapper";

const SeeDetails = () => {
    const { id } = useParams(); 
    const [details, setDetails] = useState(null); 

    useEffect(() => {
        const fetchDetails = async () => {
            const { data, error } = await supabase
                .from('Bookings')
                .select('*') 
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
                <div>
                    <h1>Detalji za rezervaciju {details.id}</h1>
                    <p>Ime gosta: {details.Guests?.fullName}</p>
                    <p>Email gosta: {details.Guests?.email}</p>
                    <p>Datum prijave: {new Date(details.checkInDate).toLocaleDateString()}</p>
                    <p>Datum odjave: {new Date(details.checkOutDate).toLocaleDateString()}</p>
                    <p>Status: {details.status}</p>
                    <p>Ukupna cena: ${details.totalPrice}</p>
                </div>
            ) : (
                <p>Loading...</p> 
            )}
        </ComponentWrapper>
    );
};

export default SeeDetails;
