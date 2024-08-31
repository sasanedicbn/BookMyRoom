import { RootState } from "@reduxjs/toolkit/query"
import {FaMoon, FaSignOutAlt, FaUser } from "react-icons/fa"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const ContentNavBar = () => {
    const navigate = useNavigate()
    const userName = useSelector((state:RootState) => state.rooms.currentUser)
    console.log('userName', userName)
    const logOut = () => {
        navigate('/login')
    }
    return( 
        <div className="Content-NavBar">
            <div className="Content-NavBar-items">
                <img src="../src/assets/img/profile-img.jpg" alt="profile picture"/>
                <p className="Content-NavBar-user">{userName}</p>
                <div className="Content-NavBar-icons">
                 <FaUser />
                 <FaSignOutAlt onClick={logOut}/> 
                </div>

            </div>
        </div>
    )
}
export default ContentNavBar