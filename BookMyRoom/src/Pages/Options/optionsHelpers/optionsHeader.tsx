import { FaArrowLeft } from "react-icons/fa";
import Button from "../../../UX/Button";
import { useNavigate } from "react-router-dom";

const OptionsHeader = ({ details }) => {
    const { id, status } = details;
    const navigate = useNavigate()
    
    const backHandler = () => {
     navigate('/booking')
    }
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
            <div className="back" >
                <FaArrowLeft />
                <Button type={'danger'} onClick={backHandler}>Back</Button>
            </div>
        </div>
    );
}

export default OptionsHeader;
