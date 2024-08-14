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
// ako je booking check-in => u modal treba da bude check-out, see-details  i delete,
//ako je booking checked-out => u modal treba da bude see-details i delete,
// -!- unconfermed => u modal treba da bude checked-in, see details i delete
// isti modal kao i za kabine