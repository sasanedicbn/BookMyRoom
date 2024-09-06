import { useSelector } from 'react-redux';
import SeeDetailsInfo from './SeeDetailsInfo';
import ComponentWrapper from '../../../UX/ComponentWrapper';
import Spinner from '../../../global/Spinner';
import ConfirmCheckIn from './ConfirmCheckIn';
import Button from '../../../UX/Button';
import { handleCheckInDetails } from '../../../api/Booking/checkInDetails';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../../store/store';
import OptionsHeader from './OptionsHeader';

const CheckIn = () => {
    const details = useSelector((state:RootState) => state.details.details);
    const navigate = useNavigate()
    if(!details) return
    const handleCheckIn = async () => {
        await handleCheckInDetails(details.id, navigate); 
    };
    const backInDetails = () => {
        navigate(`/booking/${details?.id}`)
    }
    return (
        details ? (
            <ComponentWrapper type='tableWrapper'>
                <OptionsHeader />
                <SeeDetailsInfo />
                <ConfirmCheckIn />
                <div className='btn-container'>
                    <Button 
                        type='success' 
                        disabled={!details?.isPaid} 
                        onClick={handleCheckIn}
                
                    >
                        Check in booking #{details.id}
                    </Button>
                    <Button type='danger' onClick={backInDetails}>Back</Button>
                </div>
            </ComponentWrapper>
        ) : (
            <Spinner />
        )
    );
};

export default CheckIn;
