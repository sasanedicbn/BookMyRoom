import { FaCalendarCheck, FaCog, FaHotel, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import Logo from "../../assets/Logo";
import ContentNavBar from "../../Pages/Bookings/ContentNavBar";
import RestartData from "../RestartData";

const SideBar = () => {
  return (
    <div className="main-content">
      <div className="SideBar-container">
        <Logo />
        <ul className="SideBar-ul">
          <li>
            <FaHotel />
            <NavLink to="/rooms" className="nav-link">
              Rooms
            </NavLink>
          </li>
          <li>
            <FaCalendarCheck />
            <NavLink to="/booking" className="nav-link">
              Booking
            </NavLink>
          </li>
          <li>
            <FaUsers />
            <NavLink to="/users" className="nav-link">
              Users
            </NavLink>
          </li>
          <li>
            <FaCog />
            <NavLink to="/settings" className="nav-link">
              Settings
            </NavLink>
          </li>
          <li>
            <RestartData/>
          </li>
        </ul>
      </div>
      <div className="main-content-data">
        <ContentNavBar />
        <Outlet />
      </div>
    </div>
  );
}

export default SideBar;
