import { useParams } from "react-router-dom";
import SeeDetailsInfo from "./SeeDetailsInfo";

const CheckIn = () => {
    const {id} = useParams()
    return(
     <SeeDetailsInfo/>
    )
}

export default CheckIn;