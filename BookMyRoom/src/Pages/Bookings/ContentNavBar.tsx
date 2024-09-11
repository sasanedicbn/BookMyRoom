import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import RestartData from "../../UX/RestartData";

const ContentNavBar = () => {
  const navigate = useNavigate();
  const userName = useSelector((state: RootState) => state.rooms.currentUser);

  const logOut = () => {
    navigate('/login');
  };

  return (
    <div className="Content-NavBar">
      <div className="Content-NavBar-items">
        <RestartData/>
        <img src="../src/assets/img/profile-img.jpg" alt="profile picture" />
        <p className="Content-NavBar-user">{userName ? userName.currentUser : "Guest"}</p>
        <div className="Content-NavBar-icons">
          <FaUser />
          <FaSignOutAlt onClick={logOut} />
        </div>
      </div>
    </div>
  );
};

export default ContentNavBar;
