import { useSelector } from 'react-redux';
import SeeDetailsInfo from './SeeDetailsInfo';
import ComponentWrapper from '../../../UX/ComponentWrapper';
import Spinner from '../../../global/Spinner';
import OptionsHeader from './OptionsHeader';
import ConfirmCheckIn from './ConfirmCheckIn';

const CheckIn = () => {
    const details = useSelector((state) => state.details.details);
    

    return (
        details ? (
            <ComponentWrapper type='tableWrapper'>
              <OptionsHeader />
              <SeeDetailsInfo />
              <ConfirmCheckIn/>
            </ComponentWrapper>
        ) : (
            <Spinner/>
        )
    );
};

export default CheckIn;
