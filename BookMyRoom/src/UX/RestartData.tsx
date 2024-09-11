import { uploadBookings } from "../script/UploadBookings";
import Button from "./Button";

const RestartData = () => {

    return(
      <div className="restartData-container">
        <Button type="success">Upload ALL</Button>
        <Button type="success" onClick={() => uploadBookings()}>Upload bookings ONLY</Button>
      </div>
    )
}
export default RestartData;