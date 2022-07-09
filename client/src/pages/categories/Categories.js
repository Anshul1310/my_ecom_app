import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import CategoriesTable from '../categories/CategoriesTable'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { NavLink } from 'react-router-dom'
import './Categories.css'
import {useState, useEffect} from "react";
import api from "../../http";

import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CloseIcon from '@mui/icons-material/Close';

const Categories = () => {

	const [image, setImage] =useState();
	const [name,setName]=useState();


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

	const handleClick=(e)=>{
		 api.post("/api/categories/add",{name, image
                }).then((data)=>{
                    console.log(data.data)
                    modalClose();
                }).catch((err)=>{
                    alert("Network Conncetion Error");
                    console.log(err);
                });
	}
	const handleImageChnage=(e)=>{
		 const file=e.target.files[0];
        //to convert file to base64 string
        const reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend=function(){
            setImage(reader.result);
        }
	}
	return (
		<div className="notification_main">
			<Sidebar />
			<div style={{ width: '174px' }}></div>
			<div className="box" id="Container">
				<Navbar />
				<div className="categoriesPage">
					<div className="sortAndActions">
						<h2>All Categories</h2>
						<div className="searchBox">
							<input type="text" name="filter" id="filter" />
							<SearchIcon />
						</div>
						<div className="addCategoryBtn" onClick={() => modalOpen(this)}>
							<span>Add Category</span>
						</div>
						{/* <div className="sortBox">
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
                        </div> */}
					</div>
					<div className="categories">
						<CategoriesTable />
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
				<h2>Add Category</h2>
				<div className="editFields2">
					<div className="addCategory">
						{/*<select>
							<option value="Select Category">Select Category</option>
							<option value="food">Food</option>
							<option value="electronics">Electronics</option>
							<option value="decorative">Decorative</option>
							<option value="dailyUse">DailyUse</option>
							<option value="grocery">Grocery</option>
						</select>*/}
						<input type="text" placeholder="E.g. Vegetables"/>
					</div>
					<div className="addCategory">
						<input type="file" onChange={(e)=>handleImageChnage(e)}/>
					</div>
				</div>
				<div className="editAndCloseBtn">
					<div className="editBtn" onClick={(e)=>handleClick(e)}><AddCircleOutlineIcon /> Add</div>
					<div className="closeBtn" onClick={() => modalClose()}><CloseIcon /> Close</div>
				</div>
			</div>
		</div>
	)
}

export default Categories