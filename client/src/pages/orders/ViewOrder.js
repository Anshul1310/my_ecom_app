import "./Orders.css";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom'

const ViewOrder = () => {
    const editOrder = () => {
        const input = document.querySelectorAll('input');
        document.getElementById('cls').style.display = "flex"
        for (let i = 0; i < input.length; i++) {
            input[i].disabled = false
        }
    }
    const closeEdit = () => {
        const input = document.querySelectorAll('input');
        document.getElementById('cls').style.display = "none"
        for (let i = 0; i < input.length; i++) {
            input[i].disabled = true
        }
    }
    return (
        <div className="main">
            <Sidebar />
            <div style={{ width: '174px' }}></div>
            <div className="container">
                <Navbar />
                <div className="borderContainer">
                    <div className="viewOrderHead">
                        <Link to='/orders'><ArrowBackIcon className="arrowBack" /></Link>
                        <h2>Order Details</h2>
                    </div>
                    <div className="information1">
                        <div className="editFields">
                            <div className="viewOrder">
                                <label>Buyer</label>
                                <input type="text" disabled placeholder='Cortie Gemson' />
                            </div>
                            <div className="viewOrder">
                                <label>Seller</label>
                                <input type="text" disabled placeholder='John Doe' />
                            </div>
                            <div className="viewOrder">
                                <label >Store</label>
                                <input type="text" disabled placeholder='JBM Store' />
                            </div>
                            <div className="viewOrder">
                                <label >Items</label>
                                <input type="text" disabled placeholder='perfume' />
                            </div>
                            <div className="viewOrder">
                                <label >Quantity</label>
                                <input type="text" disabled placeholder='10' />
                            </div>
                            <div className="viewOrder">
                                <label >Notes</label>
                                <input type="text" disabled placeholder='imported perfumes' />
                            </div>
                            <div className="viewOrder">
                                <label >Date</label>
                                <input type="text" disabled placeholder='21/03/2022' />
                            </div>
                            <div className="viewOrder">
                                <label >Time</label>
                                <input type="text" disabled placeholder='1:01 pm' />
                            </div>
                            <div className="viewOrder">
                                <label >Status</label>
                                <input type="text" disabled placeholder='Shipped' />
                            </div>
                        </div>
                        <div className="editAndCloseBtn">
                            <div className="editBtn" onClick={() => editOrder()}><EditIcon /> Edit Order</div>
                            <div className="closeBtn" id="cls" onClick={() => closeEdit()}><CloseIcon /> Close</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ViewOrder;
