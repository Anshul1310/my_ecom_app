const router=require("express").Router();
const Admin=require("../models/Admin");
const jwt=require("jsonwebtoken");


router.post("/add",async (req,res)=>{
	try{
			const {email, password, name, access}=req.body;
			const number=await Admin.find().countDocuments();
			const idIn="WA"+number;
			const admin=await Admin.create({_id:idIn,email, password, name, access});
			res.status(200).json(admin);
		}catch(e){
			res.status(400).json("Error Occured");
			console.log(e);
		}
})


router.get("/all",async (req,res)=>{
	try{
		const admin=await Admin.find().sort({"_id":-1});
		res.status(200).json(admin);
	}catch(e){
		console.log(e);
		res.status(401).json("error occured");
	}
})



router.get("/login",async (req,res)=>{
	try{
		const {email, password}=req.body;
		const admin=await Admin.find(email, password);
		console.log(admin);
		if(admin.length==0){
			res.status(401).json({message:"Ivaliud Credentials"});
		}else{
			
			const accessToken = jwt.sign(admin._doc, "secret", {
            	expiresIn: '1y',
        	});
        	console.log(accessToken);
        	res.status(200).json(accessToken);
		}
		
	}catch(e){
		console.log(e);
		res.status(401).json({message:"Error Occured"});
	}
})
module.exports=router;
