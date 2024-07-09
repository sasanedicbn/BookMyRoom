import { Outlet } from "react-router-dom";


const SideBar = () => {
  return (
    <div className="main-content">
    <div className="SideBar-container">
      <ul className="SideBar-ul">
        <li><button>Rooms</button></li>
        <li><button>Booking</button></li>
        <li><button>Users</button></li>
      </ul>
    </div>
    <Outlet/>
    </div>
  );
}

export default SideBar;
