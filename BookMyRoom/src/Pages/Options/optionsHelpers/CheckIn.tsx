import { useSelector } from 'react-redux';
import SeeDetailsInfo from './SeeDetailsInfo';
import ComponentWrapper from '../../../UX/ComponentWrapper';
import Spinner from '../../../global/Spinner';
import OptionsHeader from './OptionsHeader';
import ConfirmCheckIn from './ConfirmCheckIn';
import Button from '../../../UX/Button';
import { handleCheckInDetails } from '../../../api/Booking/checkInDetails';
import { useNavigate } from 'react-router-dom';

const CheckIn = () => {
    const details = useSelector((state) => state.details.details);
    const navigate = useNavigate()

    const handleCheckIn = async () => {
        if (!details) return; 
        await handleCheckInDetails(details.id, navigate); 
    };
    return (
        details ? (
            <ComponentWrapper type='tableWrapper'>
                <OptionsHeader />
                <SeeDetailsInfo />
                <ConfirmCheckIn />
                <div className='btn-container'>
                    <Button 
                        type='success' 
                        disabled={!details.isPaid} 
                        onClick={handleCheckIn}
                
                    >
                        Check in booking #{details.id}
                    </Button>
                    <Button type='danger'>Back</Button>
                </div>
            </ComponentWrapper>
        ) : (
            <Spinner />
        )
    );
};

export default CheckIn;
