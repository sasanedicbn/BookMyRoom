import {FaMoon, FaSignOutAlt, FaUser } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const ContentNavBar = () => {
    const navigate = useNavigate()
    const logOut = () => {
        navigate('/login')
    }
    return( 
        <div className="Content-NavBar">
            <div className="Content-NavBar-items">
                <img src="../src/img/profile-img.jpg" alt="profile picture"/>
                <p className="Content-NavBar-user">Ivan Ivanovic</p>
                <div className="Content-NavBar-icons">
                 <FaUser />
                 <FaMoon/>
                 <FaSignOutAlt onClick={logOut}/> 
                </div>

            </div>
        </div>
    )
}
export default ContentNavBar