import "./Navbar.css";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SaveIcon from '@mui/icons-material/Save';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom'
import React from "react";

import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
    const modalOpen = () => {
        const modal = document.getElementById('modal');
        // const container = document.getElementById('UsersPage');
        // container.style.opacity = '0.3'
        modal.style.display = 'flex'
    }
    const modalClose = () => {
        const modal = document.getElementById('modal');
        // const container = document.getElementById('UsersPage');
        // container.style.opacity = '1'
        modal.style.display = 'none'
    }
    return (
        <>
            <div className="main" id="MainNav">
                <div className="left">
                    <input placeholder="Search.."></input>
                    <SearchIcon style={{ cursor: 'pointer' }} />
                </div>
                <div className="right">
                    {/* <div className="icon">
                    <DarkModeOutlinedIcon />

                </div> */}
                    <div className="icon">
                        <SettingsIcon onClick={() => modalOpen()} />
                    </div>
                    <Link to='/notification'>
                        <div className="icon">
                            <NotificationsNoneIcon />
                            <div className="notificationNumber">
                                1
                            </div>
                        </div>
                    </Link>
                </div>
            </div >
            <div id="modal">
                <h2>Enter Commission Percent</h2>
                <div className="editFields2">
                    <div className="editCommission1">
                        <label htmlFor="modalCommission">Commission Percent</label>
                        <input type="text" name="modalCommission" id="modalCommission" placeholder="Ex-$1000" />
                    </div>
                </div>
                <div className="editAndCloseBtn">
                    <div className="editBtn" onClick={() => modalClose()}><SaveIcon /> Save</div>
                </div>
            </div >
        </>
    );

}

export default Navbar;