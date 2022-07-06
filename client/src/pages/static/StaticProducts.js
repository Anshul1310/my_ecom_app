import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Link, NavLink } from 'react-router-dom'
import './staticProducts.css'
import StaticProductsTable from '../static/StaticProductsTable';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';

const StaticProducts = () => {
    const modalOpen = () => {
        const modal = document.getElementById('modal');
        const container = document.getElementById('Container');
        container.style.opacity = '0.3'
        modal.style.display = 'flex'
    }
    const modalClose = () => {
        const modal = document.getElementById('modal');
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
                <div className="staticProductsPage">
                    <div className="sortAndActions">
                        <h2>All Products</h2>
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
                        <div className="addSProducts">
                            <Link to='/staticProducts/addProduct'>
                                <span>Add Products</span>
                            </Link>
                        </div>
                    </div>
                    <div className="staticProducts">
                        <StaticProductsTable modalOpen={modalOpen} />
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

            <div id="modal">
                <h2>Edit Product Details</h2>
                <div className="editFields2">
                    <div className="staticProductsInput">
                        <label>Product Name</label>
                        <input type="text" placeholder="Ex-Cookie" />
                    </div>
                    <div className="staticProductsInput">
                        <label>Unit Of Measurement</label>
                        <input type="text" placeholder="Ex-kg" />
                    </div>
                    <div className="staticProductsInput">
                        <label>Price</label>
                        <input type="text" placeholder="Ex-$750" />
                    </div>
                    <div className="staticProductsInput">
                        <label>Date</label>
                        <input type="text" placeholder="Ex-30/06/2022" />
                    </div>
                </div>
                <div className="editAndCloseBtn">
                    <div className="editBtn"><EditIcon /> Edit Product</div>
                    <div className="closeBtn" onClick={() => modalClose()}><CloseIcon /> Close</div>
                </div>
            </div>
        </div>
    )
}

export default StaticProducts