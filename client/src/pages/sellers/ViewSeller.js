import "./seller.css";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom'

const ViewSeller = () => {
    const editSeller = () => {
        const input = document.querySelectorAll('input');
        const select = document.querySelectorAll('select')
        document.getElementById('cls').style.display = "flex"
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
                        <Link to='/sellers'><ArrowBackIcon className="arrowBack" /></Link>
                        <h2>Seller Details</h2>
                    </div>
                    <div className="information1">
                        <div className="editFields1">
                            <div className="viewSeller">
                                <label> Name</label>
                                <input type="text" disabled placeholder="Ex-John Doe" />
                            </div>
                            <div className="viewSeller">
                                <label> Email</label>
                                <input type="email" disabled placeholder="Ex-johndoe@gmail.com" />
                            </div>

                            <div className="viewSeller">
                                <label>Category</label>
                                <select disabled>
                                    <option value="select">Select Catgeory</option>
                                    <option value="MultiFarmer">Multi Farmer</option>
                                    <option value="Producer">Producer</option>
                                    <option value="Importer">Importer</option>
                                    <option value="Distributor">Distributor</option>
                                    <option value="Wholesaler">Wholesaler</option>
                                </select>
                            </div>

                            <div className="viewSeller">
                                <label>Gender</label>
                                <input type="email" disabled placeholder="Ex-Male" />
                            </div>
                            <div className="viewSeller">
                                <label> Age</label>
                                <input type="text" disabled placeholder="Ex-28" />
                            </div>

                            <div className="viewSeller">
                                <label >Category</label>
                                <select disabled>
                                    <option value="select">Select Region</option>
                                    <option value="Tigray">Tigray</option>
                                    <option value="Afar">Afar</option>
                                    <option value="Amhara">Amhara</option>
                                    <option value="Oromia">Oromia</option>
                                    <option value="Somali">Somali</option>
                                    <option value="Benishangul-Gumuz">Benishangul-Gumuz</option>
                                    <option value="SNNPR">SNNPR</option>
                                    <option value="Gambella ">Gambella </option>
                                    <option value="Harari  ">Harari  </option>
                                </select>
                            </div>
                            <div className="viewSeller">
                                <label> Zone</label>
                                <input type="text" disabled placeholder="North Gondar" />
                            </div>
                            <div className="viewSeller">
                                <label > Woreda</label>
                                <input type="text" disabled placeholder="Woreda" />
                            </div>
                            <div className="viewSeller">
                                <label> Kebele</label>
                                <input type="text" disabled placeholder="Kebele" />
                            </div>
                            <div className="viewSeller">
                                <label > Phone Number</label>
                                <input type="text" disabled placeholder='Ex - +251 398198287 ' />
                            </div>
                            <div className="viewSeller">
                                <label >Additional Phone Number</label>
                                <input type="text" disabled placeholder='Ex - +251 398198287 ' />
                            </div>

                            <div className="viewSeller">
                                <label >Seller Level</label>
                                <select disabled>
                                    <option value="Level 1">Level 1</option>
                                    <option value="Level 2">Level 2</option>
                                    <option value="Level 3">Level 3</option>
                                </select>
                            </div>
                            <div className="viewSeller">
                                <label >Book Number</label>
                                <input type="text" disabled placeholder="NNNN-NNNN-NNNN" />
                            </div>
                            <div className="viewSeller">
                                <label >TIN</label>
                                <input type="text" disabled placeholder="NNN-NNN-NNN" />
                            </div>
                        </div>
                        <div className="editAndCloseBtn">
                            <div className="editBtn" onClick={() => editSeller()}><EditIcon /> Edit Details</div>
                            <div className="closeBtn" id='cls' onClick={() => closeEdit()}><CloseIcon /> Close</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewSeller;
