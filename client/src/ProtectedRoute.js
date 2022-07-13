import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import React from 'react'
import ReactDOM from 'react-dom'

const ProtectedRoute=(props)=>{
	const navigate=useNavigate();
	const {Component}=props;
	useEffect(()=>{
		if(localStorage.getItem("token")===null){
			navigate("/login");
		}
	})
	return (

		<Component/>
	)

}

export default ProtectedRoute;
