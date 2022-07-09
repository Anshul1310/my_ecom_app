import React from 'react'
import {useState, useEffect} from "react";
import TableRow from "./TableRow";
import api from "../../http";

const CategoriesTable = () => {

    const [categories,setCategories]=useState([]);

    useEffect(()=>{
        api.get("/api/categories/all").then((data)=>{
                    console.log(data.data);
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
                categories.map((data)=>{
                   return <TableRow image={data.image} name={data.name}/>
                })
                
            }
            </tbody>
        </table>
    )
}

export default CategoriesTable