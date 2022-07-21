const router=require("express").Router();
const Admin=require("../models/Admin");
const jwt=require("jsonwebtoken");
const Settings =require("../models/Settings");

router.post("/add",async (req,res)=>{
	try{
			const {email, password, name, access}=req.body;
			const obj=await Settings.findOne();
			const number=obj.adminIndex;
			await Settings.updateOne({
				adminIndex:number+1
			})
			const idIn="WA"+number;
			const admin=await Admin.create({_id:idIn,email, password, name, access});
			res.status(200).json(admin);
		}catch(e){
			res.status(400).json("Error Occured");
			console.log(e);
		}
})


router.post("/delete",async (req,res)=>{
	console.log(req.body.id)
	try{
		const admin=await Admin.deleteOne({_id:req.body.id});

		res.status(200).json(admin);
		
	}catch(e){
		res.status(400).json("error");
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
		const admin=await Admin.findOne({email, password});
		if(admin==null){
			res.status(401).json({message:"Ivaliud Credentials"});
		}else{
			console.log(admin);
			const accessToken = jwt.sign({...admin}, "secret", {
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
