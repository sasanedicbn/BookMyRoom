import { useSelector } from 'react-redux';
import SeeDetailsInfo from './SeeDetailsInfo';

const CheckIn = () => {
    const details = useSelector((state) => state.details.initialState);
    console.log('DETAILS DETELINA', details)

    return (
        details ? (
            <SeeDetailsInfo details={details} hasBreakfast={false} setHasBreakfast={() => {}} priceForBreakfast={0} />
        ) : (
            <div>Loading...</div>
        )
    );
};

export default CheckIn;
