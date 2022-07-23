import "./Orders.css";
import React,{useState} from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import TableRow from "./TableRow";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import { Link,useLocation } from 'react-router-dom'

const ViewOrder = () => {

    const location = useLocation();
    const { from } = location.state;
    const [status, setStatus] = useState(from.status)
    const [date,setDate]=useState(from.date);
    const [note, setNote] = useState(from.note)
    const [buyer, setBuyer] = useState(from.buyer);
    const [items,setItems]=useState(from.items);
    const [orderId, setOrderId]=useState(from.orderId)

    // const editOrder = () => {
    //     const input = document.querySelectorAll('input');
    //     document.getElementById('cls').style.display = "flex"
    //     for (let i = 0; i < input.length; i++) {
    //         input[i]. = false
    //     }
    // }
    // const closeEdit = () => {
    //     const input = document.querySelectorAll('input');
    //     document.getElementById('cls').style.display = "none"
    //     for (let i = 0; i < input.length; i++) {
    //         input[i]. = true
    //     }
    // }
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
                                <input type="text" value={buyer}  placeholder='Cortie Gemson' />
                            </div>
                            {/*<div className="viewOrder">
                                <label>Seller</label>
                                <input type="text"  placeholder='John Doe' />
                            </div>*/}
                            {/*<div className="viewOrder">
                                <label >Store</label>
                                <input type="text"  placeholder='JBM Store' />
                            </div>*/}
                            {/*<div className="viewOrder">
                                <label >Items</label>
                                <input type="text"  placeholder='perfume' />
                            </div>*/}
                            {/*<div className="viewOrder">
                                <label >Quantity</label>
                                <input type="text"  placeholder='10' />
                            </div>*/}
                            <div className="viewOrder">
                                <label >Notes</label>
                                <input type="text"  placeholder='imported perfumes' />
                            </div>
                            <div className="viewOrder">
                                <label >Date</label>
                                <input type="text"  placeholder='21/03/2022' />
                            </div>
                            <div className="viewOrder">
                                <label >Time</label>
                                <input type="text"  placeholder='1:01 pm' />
                            </div>
                            <div className="viewSeller">
                                <label>Status</label>
                                <select  onChange={(e)=>setStatus(e.target.value)} value={status}  >
                                    <option value="dispatched">Dispatched</option>
                                    <option value="preparing">Preparing</option>
                                    <option value="onTheWay">On the Way</option>
                                    <option value="delivered">Delivered</option>
                                </select>
                            </div>
                        </div>
                        <div className="editAndCloseBtn">
                            <div className="editBtn"><EditIcon /> Edit Order</div>
                            <div className="closeBtn" id="cls" ><CloseIcon /> Close</div>
                        </div>
                    </div>
                </div>
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <td>IMAGE</td>
                                <td>TITLE</td>
                                <td>PRICE</td>
                                <td>MEASURING UNIT</td>
                                <td>QUANTITY</td>
                                <td>SELLER</td>
                            </tr>
                        </thead>
                        <tbody>
                        {
                             items.map((data,key)=>{
                                return <TableRow key={key} title={data.title} measuringUnit={data.measuringUnit}
                                    price={data.price} quantity={data.quantity} seller={data.seller} />
                            })
                        }
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ViewOrder;
