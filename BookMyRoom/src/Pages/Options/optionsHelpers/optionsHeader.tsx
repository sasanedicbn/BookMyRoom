import { FaArrowLeft } from "react-icons/fa";
import Button from "../../../UX/Button";

const OptionsHeader = ({ details }) => {
    const { id, status } = details;

    return (
        <div className="options-header">
            <div>
                <h2>Booking <span>#{id}</span></h2>
                <p className={`${
                    status === 'checked-in' ? 'checked-in' :
                    status === 'unconfirmed' ? 'unconfirmed' :
                    status === 'checked-out' ? 'checked-out' : ''
                }`}>
                    {status}
                </p>
            </div>
            <div className="back">
                <FaArrowLeft />
                <Button type={'danger'}>Back</Button>
            </div>
        </div>
    );
}

export default OptionsHeader;
