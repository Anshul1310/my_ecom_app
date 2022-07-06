import "./Users.css";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom'

const ViewUser = () => {
    const editUser = () => {
        const input = document.querySelectorAll('input');
        const select = document.querySelectorAll('select');
        document.getElementById('cls').style.display = "flex"
        document.querySelectorAll('textarea')[0].disabled = false;
        for (let i = 0; i < input.length; i++) {
            input[i].disabled = false
        }
        for (let i = 0; i < select.length; i++) {
            select[i].disabled = false
        }
    }
    const closeEdit = () => {
        const input = document.querySelectorAll('input');
        const select = document.querySelectorAll('select');
        document.getElementById('cls').style.display = "none"
        document.querySelectorAll('textarea')[0].disabled = true;
        for (let i = 0; i < input.length; i++) {
            input[i].disabled = true
        }
        for (let i = 0; i < select.length; i++) {
            select[i].disabled = true
        }
    }
    return (
        <div className="main">
            <Sidebar />
            <div style={{ width: '174px' }}></div>
            <div className="container">
                <Navbar />
                <div className="borderContainer">
                    <div className="viewHead">
                        <Link to='/users'><ArrowBackIcon className="arrowBack" /></Link>
                        <h2>User Details</h2>
                    </div>
                    <div className="information1">
                        <div className="editFields1">
                            <div className="viewUser">
                                <label> Organization</label>
                                <input type="text" disabled placeholder="Ex-orgXYZ" />
                            </div>
                            <div className="viewUser">
                                <label>Contact Person</label>
                                <input type="text" disabled placeholder="Ex-Susan Bond" />
                            </div>
                            <div className="viewUser">
                                <label > Address</label>
                                <textarea disabled rows='3' placeholder="Ex-Bole Subcity Kebele 14 H.No179/B Addis Ababa 7512"></textarea>
                            </div>
                            <div className="viewUser">
                                <label > Phone Number</label>
                                <input type="text" disabled placeholder="Ex - +251 398198287 " />
                            </div>
                            <div className="viewUser">
                                <label > Additional Phone Number</label>
                                <input type="text" disabled placeholder="Ex - +251 398198287 " />
                            </div>
                            <div className="viewUser">
                                <label >Email</label>
                                <input type="email" disabled placeholder='Ex-johndoes@example.com ' />
                            </div>
                            <div className="viewUser">
                                <label>Buyer Type</label>
                                <select disabled>
                                    <option value="select">Select Category</option>
                                    <option value="Multi Farmer">Retailer</option>
                                    <option value="Producer">Supermarket</option>
                                    <option value="Importer">Unions</option>
                                    <option value="Distributor">Other groups</option>
                                </select>
                            </div>
                            <div className="viewUser">
                                <label >Buyer Level</label>
                                <select disabled>
                                    <option value="Level 1">Level 1</option>
                                    <option value="Level 2">Level 2</option>
                                    <option value="Level 3">Level 3</option>
                                </select>
                            </div>
                            <div className="viewUser">
                                <label >TIN</label>
                                <input type="text" disabled placeholder="NNN-NNN-NNN" />
                            </div>
                        </div>
                        <div className="editAndCloseBtn">
                            <div className="editBtn" onClick={() => editUser()}><EditIcon /> Edit Details</div>
                            <div className="closeBtn" id="cls" onClick={() => closeEdit()}><CloseIcon /> Close</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewUser;
