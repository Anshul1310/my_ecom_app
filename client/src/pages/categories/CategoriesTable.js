import React from 'react'
import {useState, useEffect} from "react";
import TableRow from "./TableRow";
import api from "../../http";

const CategoriesTable = () => {

    const [categories,setCategories]=useState([]);

    useEffect(()=>{
        api.get("/api/categories/all").then((data)=>{
                    setCategories(data.data);
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
                    <td>CATEGORIES</td>
                    <td>DELETE</td>
                </tr>
            </thead>
            <tbody>
            {
                categories.map((data, key)=>{
                   return <TableRow key={key} id={data._id} image={data.image} name={data.name}/>
                })
                
            }
            </tbody>
        </table>
    )
}

export default CategoriesTable