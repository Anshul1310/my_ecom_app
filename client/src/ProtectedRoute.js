import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
const ProtectedRoute=(props)=>{
	const navigate=useNavigate();
	const {Component, isAuth}=props;
	useEffect(()=>{
		console.log(isAuth);
		if(localStorage.getItem("token")===null){
			navigate("/login");
		}
	},[])
	return (

		<Component/>
	)

}

export default ProtectedRoute;
