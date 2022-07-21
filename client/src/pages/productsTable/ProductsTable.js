import React from 'react'
import cookie from '../home/cookie.jpg'
import glass from '../home/glass.jpg'
import headPhone from '../home/headPhone.jpg'
import perfume from '../home/perfume.jpg'
import EditIcon from '@mui/icons-material/Edit';
import {useEffect, useState} from "react";
import TableRow from "./TableRow";
import api from "../../http";

import DeleteIcon from '@mui/icons-material/Delete';

const ProductsTable = ({ modalOpen }) => {
    const functio = () => {
        modalOpen()
    }

    const [products, setProducts]=useState([]);

    useEffect(()=>{
 api.get("/api/product/all").then((data)=>{
                    console.log(data.data);
                    setProducts(data.data);
                }).catch((err)=>{
                    alert("Network Conncetion Error");
                    console.log(err);
                });
    },[])
    return (
        <table>
            <thead>
                <tr>
                    <td>PHOTO</td>
                    <td>NAME</td>
                    <td>Measuring Unit</td>
                    <td>PRICE</td>
                    <td>CREATED AT</td>
                    <td>EDIT</td>
                    <td>REMOVE</td>
                </tr>
            </thead>
            <tbody>
              {products.map((data,id)=>{
                return <TableRow key={id} moq={data.moq} store={data.store} seller={data.seller} createdAt={data.createdAt} _id={data._id} title={data.title} description={data.description}
                category={data.category} image={data.image} price={data.price} slashedPrice={data.slashedPrice}
                measuringUnit={data.measuringUnit} />
            })}
            </tbody>
        </table>
    )
}

export default ProductsTable