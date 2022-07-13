import "./Navbar.css";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
    return (
        <div className="main">
            <div className="left">
                <input placeholder="Search.."></input>
                <SearchIcon style={{ cursor: 'pointer' }} />
            </div>
            <div className="right">
                {/* <div className="icon">
                    <DarkModeOutlinedIcon />

                </div> */}
                <Link to='/notification'>
                    <div className="icon">
                        <NotificationsNoneIcon />
                        <div className="notificationNumber">
                            1
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );

}

export default Navbar;