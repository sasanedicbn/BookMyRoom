import { useLocation } from "react-router-dom";
import ComponentWrapper from "../../UX/ComponentWrapper";
import BookingsComponent from "./BookingsComponent";

const Bookings = () => {
   
    return (
        <ComponentWrapper type={'tableWrapper'}>
            <BookingsComponent/>
        </ComponentWrapper>
    );
}

export default Bookings;
