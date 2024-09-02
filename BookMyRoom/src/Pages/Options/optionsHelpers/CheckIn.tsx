import { useSelector } from 'react-redux';
import SeeDetailsInfo from './SeeDetailsInfo';
import ComponentWrapper from '../../../UX/ComponentWrapper';
import Spinner from '../../../global/Spinner';
import OptionsHeader from './OptionsHeader';

const CheckIn = () => {
    const details = useSelector((state) => state.details.details);
    console.log('DETAILS DETELINA', details)

    return (
        details ? (
            <ComponentWrapper type='tableWrapper'>
              <OptionsHeader details={details}/>
              <SeeDetailsInfo details={details} hasBreakfast={false} setHasBreakfast={() => {}} priceForBreakfast={0} />
            </ComponentWrapper>
        ) : (
            <Spinner/>
        )
    );
};

export default CheckIn;
