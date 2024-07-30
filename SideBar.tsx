import { FaBed, FaCalendarCheck, FaCog, FaHotel, FaUsers } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import ContentNavBar from "../Home/ContentNavBar";

const SideBar = () => {
  return (
    <div className="main-content">
      <div className="SideBar-container">
        <span className="SideBar-icon"><FaBed /></span>
        <p className="SideBar-title">BOOK MY ROOM</p>
        <ul className="SideBar-ul">
          <li><FaHotel /><Link to="/rooms">Rooms</Link></li>
          <li><FaCalendarCheck /><Link to="/booking">Booking</Link></li>
          <li><FaUsers /><Link to="/users">Users</Link></li>
          <li><FaCog /><Link to="/settings">Settings</Link></li>
        </ul>
      </div>
      <div className="main-content-data">
       <ContentNavBar/>
       <Outlet />
       </div>
    </div>
  );
}

export default SideBar;