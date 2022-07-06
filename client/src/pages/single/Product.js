import "./Product.css";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom'

const Product = () => {
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
								<input type="text" name="product" id="product" placeholder="Ex-Iphone13" />
							</div>
							<div className="productDes">
								<label htmlFor="description">Description</label>
								<textarea name="description" id="description" rows='3' placeholder="Ex-The iPhone 13 models come in 5.4 and 6.1-inch sizes, with the 5.4-inch iPhone 13 Pro positioned as Apple's smallest iPhone"></textarea>
							</div>
							<div className="productCate">
								<label htmlFor="category">Category</label>
								<select name="category" id="category">
									<option value="select">Select Catgeory</option>
									<option value="NewArrival">New Arrival</option>
									<option value="MostPopular">Most Popular</option>
									<option value="Trending">Trending</option>
								</select>
							</div>
							<div className="productExpiry">
								<label htmlFor="expiryDate">Expiry Date</label>
								<input type="text" name="expiryDate" id="expiryDate" placeholder="Ex-No Expiry Date" />
							</div>
							<div className="stockUnits">
								<label htmlFor="stock">Units in Stock</label>
								<input type="text" name="stock" id="stock" placeholder="Ex-100" />
							</div>
							<div className="productPrice">
								<label htmlFor="price">Price</label>
								<input type="text" name="price" id="price" placeholder="Ex-$750" />
							</div>
						</div>
						<div className="productImage">
							<div className="img" onClick={() => document.getElementById('fileInput').click()}>
								<input type="file" name="fileInput" id="fileInput" />
								<CloudUploadIcon />
							</div>
							<div className="upload">UPLOAD PRODUCT IMAGE</div>
						</div>
					</div>
					<div className="addButton">ADD PRODUCT</div>
				</div>

			</div>
		</div>
	)
}

export default Product;
