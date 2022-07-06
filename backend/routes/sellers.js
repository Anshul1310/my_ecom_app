const router = require("express").Router();
const Seller=require("../models/Seller");

router.post("/add",async (req,res)=>{
	try{
		const {name, gender,region, zone, woreda, kebele, phone,additional_phone, email, level, tin,agent, type, book,distanceDetail}=req.body;
		const seller=await Seller.create({
			name, gender,region, zone, woreda, kebele, phone,additional_phone, email, level, tin,agent, type, book,distanceDetail
		});
		res.status(200).json({msg:"success"});
	}catch(er){
		res.status(404).json({msg:"Something went wrong"})
		console.log(er);
	}
})

router.get("/all",async (req,res)=>{
	try{
		const seller=await Seller.find();
		console.log(seller);
		res.status(200).json({msg:"success"});
	}catch(er){
		res.status(404).json({msg:"Something went wrong"})
		console.log(er);
	}
})


router.get("/seller/:id",async (req,res)=>{
	try{
		const seller=await Seller.find({_id:req.params.id});
		console.log(seller);
		res.status(200).json({msg:"success"});
	}catch(er){
		res.status(404).json({msg:"Something went wrong"})
		console.log(er);
	}
})
module.exports=router;