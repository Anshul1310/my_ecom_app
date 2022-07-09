const router = require("express").Router();
const Buyer=require("../models/Buyer");

router.post("/add",async (req,res)=>{
	try{
		const {organization, address, phone,email, additional_number, type, tin, name, contact_person, level}=req.body;
		const number=await Buyer.find().countDocuments();
		const idIn="WB"+number;
		const buyer=await Buyer.create({organization, _id:idIn, address, phone,email, additional_number, type, tin, name, contact_person, level});
		res.status(200).json({msg:"success"});
	}catch(er){
		res.status(404).json({msg:"Something went wrong"})
		console.log(er);
	}
})

router.get("/all",async (req,res)=>{
	try{
		const buyer=await Buyer.find();
		console.log(buyer);
		res.status(200).json(buyer);
	}catch(er){
		res.status(404).json({msg:"Something went wrong"})
		console.log(er);
	}
})


router.post("/update",async (req,res)=>{
	try{
		const buyer=await Buyer.updateOne({_id:req.body.id},{
			"$set":{
				...req.body
			}
		});
		console.log(buyer);
		res.status(200).json(buyer);
	}catch(er){
		res.status(404).json({msg:"Something went wrong"})
		console.log(er);
	}
})

router.get("/Buyer/:id",async (req,res)=>{
	try{
		const buyer=await Buyer.find({_id:req.params.id});
		console.log(buyer);
		res.status(200).json({msg:"success"});
	}catch(er){
		res.status(404).json({msg:"Something went wrong"})
		console.log(er);
	}
})

module.exports=router;