import "./staticProducts.css";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom'

const AddStaticProduct = () => {
    return (
        <div className="main">
            <Sidebar />
            <div style={{ width: '174px' }}></div>
            <div className="container">
                <Navbar />
                <div className="borderContainer">
                    <div className="addProductHead">
                        <Link to='/staticProducts'><ArrowBackIcon className="arrowBack" /></Link>
                        <h2>Add Product</h2>
                    </div>
                    <div className="information">
                        <div className="fields">
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

export default AddStaticProduct;
