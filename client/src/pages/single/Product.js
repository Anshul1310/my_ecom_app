import "./Product.css";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { useLocation } from 'react-router-dom'
import React from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom'

import api from "../../http";
import {useEffect, useState} from "react";
const Product = () => {
	const location = useLocation();
	
    
	const [id, setId]=useState(null);

	const [categories, setCategories]=useState([]);
	const [title,setTitle]=useState("");
	const [description,setDescription]=useState("");
	const [category,setCategory]=useState("");
	const [isChanged, setIsChanged]=useState(false);
	const [measuringUnit,setMeasuringUnit]=useState("");
	const [price,setPrice]=useState("");
	const [slashedPrice,setSlashePrice]=useState("");
	const [moq, setMoq]=useState("");
	const [image, setImage]=useState("#");

	useEffect(()=>{
		if(location.state!=null){
		let from=location.state.from;
		if(from!=null){
			setTitle(from.title);
			setDescription(from.description);
			setCategory(from.category);
			setMoq(from.moq);
			setPrice(from.price);
			setId(from._id);
			setSlashePrice(from.slashedPrice);
			setMeasuringUnit(from.measuringUnit);
			setMoq(from.moq)
			setImage("http://localhost:4000"+from.image);

		}
	}
	api.get("/api/categories/all").then((data)=>{
                  	setCategories(data.data);
                  	console.log(data.data)
                }).catch((err)=>{
                    alert("Network Conncetion Error");
                    console.log(err);
                });
	},[]);
const uploadProduct=(e)=>{
	if(id!=null){
		console.log(id);
api.post("/api/product/update",{
title,id, description,category,isChanged, measuringUnit, price, slashedPrice, moq, image
                }).then((data)=>{
                    console.log(data.data)
                }).catch((err)=>{
                    alert("Network Conncetion Error");
                    console.log(err);
                });
	}else{
		api.post("/api/product/add",{
title,id, description,category,isChanged, measuringUnit, price, slashedPrice, moq, image
                }).then((data)=>{
                    console.log(data.data)
                }).catch((err)=>{
                    alert("Network Conncetion Error");
                    console.log(err);
                });
	}
}

const handleChange=(e)=>{
		const file=e.target.files[0];
		setIsChanged(true);
		//to convert file to base64 string
		const reader=new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend=function(){
			setImage(reader.result);
		}
	}
	return (
		<div className="main">
			<Sidebar />
			<div style={{ width: '174px' }}></div>
			<div className="container">
				<Navbar />
				{/* <div className="borderContainer">

					<div className="info_order">
						<div className="image_order">
							<div>
								<img src="https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg" />
								<input type="file" />
							</div>
						</div>

						<div className="fields">
							<div className="text_fields_products">
								<label>Title</label>
								<input placeHolder="Fresh Indian Apples" type="text" />
							</div>
							<div className="text_fields_products">
								<label>Price</label>
								<input placeHolder="100" type="number" />
							</div>
							<div className="text_fields_products">
								<label>Unit for measuring</label>
								<select name="Measuring Unit" id="cars">
									<option value="Dozen">Volvo</option>
									<option value="Unit">Saab</option>
									<option value="Litres">Mercedes</option>
									<option value="Kilogram">Audi</option>
									<option value="Pieces">Audi</option>
									<option value="Box">Audi</option>
									<option value="Packets">Audi</option>
								</select>
							</div>
							<div className="text_fields_products">
								<label>Minimum Order Quanity</label>
								<input placeHolder="5 Packets" type="number" />
							</div>
							<div className="text_fields_products">
								<label>Category</label>
								<select name="cars" id="cars">
									<option value="Vegetables">Volvo</option>
									<option value="saab">Saab</option>
									<option value="mercedes">Mercedes</option>
									<option value="audi">Audi</option>
								</select>
							</div>
							<div className="text_fields_products">
								<label>Slashed Price</label>
								<input placeHolder="90" type="number" />
							</div>

							<div className="text_fields_products">
								<label>Description</label>
								<textarea cols="20" rows="5"></textarea>
							</div>
						</div>
					</div>

					<div className="saveBtn">
						<label>Send</label>
					</div>
				</div> */}


				<div className="borderContainer">
					<div className="addProductHead">
						<Link to='/products'><ArrowBackIcon className="arrowBack" /></Link>
						<h2>Add Product</h2>
					</div>
					<div className="information">
						<div className="fields">
							<div className="productName">
								<label htmlFor="product">Product Name</label>
								<input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} name="product" id="product" placeholder="Ex-Iphone13" />
							</div>
							<div className="productDes">
								<label htmlFor="description">Description</label>
								<textarea name="description" value={description} onChange={(e)=>setDescription(e.target.value)} id="description" rows='3' placeholder="Ex-The iPhone 13 models come in 5.4 and 6.1-inch sizes, with the 5.4-inch iPhone 13 Pro positioned as Apple's smallest iPhone"></textarea>
							</div>
							<div className="productCate">
								<label htmlFor="category">Category</label>
								<select value={category} name="category" onChange={(e)=>setCategory(e.target.value)} id="category">
									{
										categories.map((data, id)=>{
											return <option key={id} value="Trending">{data.name}</option>
										})
									}
								</select>
							</div>
							<div className="productExpiry">
								<label htmlFor="expiryDate">Measuring Unit</label>
								<input type="text" name="expiryDate" value={measuringUnit} onChange={(e)=>{setMeasuringUnit(e.target.value)}} id="expiryDate" placeholder="Ex-No Expiry Date" />
							</div>
							<div className="stockUnits">
								<label htmlFor="stock">Slashed Price</label>
								<input type="text" name="stock" value={slashedPrice} onChange={(e)=>setSlashePrice(e.target.value)} id="stock" placeholder="Ex-100" />
							</div>
							<div className="stockUnits">
								<label htmlFor="stock">Minimum Order Quantity</label>
								<input type="text" name="stock" value={moq} onChange={(e)=>setMoq(e.target.value)} id="stock" placeholder="Ex-100" />
							</div>
							<div className="productPrice">
								<label>Price</label>
								<input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} name="price" id="price" placeholder="Ex-$750" />
							</div>
						</div>
						<div className="productImage">
							<div className="img" >
								<input type="file" name="fileInput" onChange={(e)=>handleChange(e)} id="fileInput" />
								<img width="100%" height="100%" src={image}/>
							</div>
							<div className="upload" ><label htmlFor="fileInput">UPLOAD PRODUCT IMAGE</label></div>
						</div>
					</div>
					<div onClick={(e)=>uploadProduct(e)} className="addButton">SAVE</div>
				</div>

			</div>
		</div>
	)
}

export default Product;
