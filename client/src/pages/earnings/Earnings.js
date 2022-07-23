import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { NavLink } from 'react-router-dom'
import './earnings.css'
import EarningsTable from '../earnings/EarningsTable';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';

const Earnings = () => {
    const modalOpen = () => {
        const modal = document.getElementById('modal2');
        const container = document.getElementById('Container');
        container.style.opacity = '0.3'
        modal.style.display = 'flex'
    }
    const modalClose = () => {
        const modal = document.getElementById('modal2');
        const container = document.getElementById('Container');
        container.style.opacity = '1'
        modal.style.display = 'none'
    }
    return (
        <div className="main">
            <Sidebar />
            <div style={{ width: '174px' }}></div>
            <div className="container" id="Container">
                <Navbar />
                <div className="earningsPage">
                    <div className="sortAndActions">
                        <h2>All Earnings</h2>
                        <div className="sortBox">
                            <select name="sorting" id="sorting">
                                <option value="sort">Sort By</option>
                                <option value="desc">Desc</option>
                                <option value="asc">Asc</option>
                            </select>
                        </div>
                        <div className="NumOfItems">
                            <select name="itemNum" id="itemNum">
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                                <option value="40">40</option>
                            </select>
                        </div>
                        <div className="earningHeading">
                            <h3>Total Earnings:$7000</h3>
                        </div>
                    </div>
                    <div className="productsAndEarnings">
                        <EarningsTable modalOpen={modalOpen} />
                    </div>
                    <div className="pageNum">
                        <KeyboardDoubleArrowLeftIcon />
                        <NavLink to='#'>1</NavLink>
                        <NavLink to='#'>2</NavLink>
                        <NavLink to='#'>3</NavLink>
                        <KeyboardDoubleArrowRightIcon />
                    </div>
                </div>
            </div>

            <div id="modal2">
                <h2>Edit Earning Details</h2>
                <div className="editFields2">
                    <div className="editProductName">
                        <label htmlFor="modalProduct">Product Name</label>
                        <input type="text" name="modalProduct" id="modalProduct" placeholder="Ex-Iphone13" />
                    </div>
                    <div className="editProductCate">
                        <label htmlFor="modalCategory">Category</label>
                        <select name="category" id="modalCategory">
                            <option value="select">Select Catgeory</option>
                            <option value="NewArrival">New Arrival</option>
                            <option value="MostPopular">Most Popular</option>
                            <option value="Trending">Trending</option>
                        </select>
                    </div>
                    <div className="editProductExpiry">
                        <label htmlFor="modalExpiryDate">Expiry Date</label>
                        <input type="text" name="modalExpiryDate" id="modalExpiryDate" placeholder="Ex-No Expiry Date" />
                    </div>
                    <div className="editStockUnits">
                        <label htmlFor="modalStock">Units in Stock</label>
                        <input type="text" name="modalStock" id="modalStock" placeholder="Ex-100" />
                    </div>
                    <div className="editProductPrice">
                        <label htmlFor="modalPrice">Price</label>
                        <input type="text" name="modalPrice" id="modalPrice" placeholder="Ex-$750" />
                    </div>
                    <div className="editCommission">
                        <label htmlFor="modalCommission">Commission</label>
                        <input type="text" name="modalCommission" id="modalCommission" placeholder="Ex-$1000" />
                    </div>
                </div>

                <div className="productImage1">
                    <div className="img1" >
                        <input type="file" name="fileInput" id="fileInput" />
                        <img width="100%" height="100%" />
                    </div>
                    <div className="upload" ><label htmlFor="fileInput">UPLOAD</label></div>
                </div>

                <div className="editAndCloseBtn">
                    <div className="editBtn"><EditIcon /> Edit Order</div>
                    <div className="closeBtn" onClick={() => modalClose()}><CloseIcon /> Close</div>
                </div>
            </div>
        </div>
    )
}

export default Earnings