import React from 'react'

import api from "../../http";
import {useEffect, useState} from "react";
import TableRow from "./TableRow";



import perfume from '../home/perfume.jpg'

const NewsTable = () => {
    const [news, setNews]=useState([]);

    useEffect(()=>{
        api.get("/api/news/all").then((data)=>{
                    console.log(data.data);
                    setNews(data.data);
                }).catch((err)=>{
                    alert("Network Conncetion Error");
                    console.log(err);
                });
    },[])



    return (
        <table>
            <thead>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td>ID</td>
                    <td>PHOTO</td>
                    <td>Title</td>
                    <td>Description</td>
                </tr>
            </thead>
            <tbody>
                {
                    news.map((data, id, index)=>{
                        return <TableRow key={id} title={data.title} description={data.description} image={`http://localhost:4000${data.image}`}/>
                    })
                }
            </tbody>
        </table>
    )
}

export default NewsTable