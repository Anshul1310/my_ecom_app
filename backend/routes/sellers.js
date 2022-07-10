const router = require("express").Router();
const Seller=require("../models/Seller");

router.post("/add",async (req,res)=>{
	try{
		console.log(req.body);
		const {name, gender,region, zone, woreda, kebele, phone,additional_number, email, level, tin,age, type, bookNumber,distanceDetail}=req.body;
		const number=await Seller.find().countDocuments();
			const idIn="WS"+number;
		const seller=await Seller.create({
			name, gender,region, _id:idIn, zone, woreda, kebele,additional_number:additional_number, phone, email, level, tin,age, type, bookNumber,distanceDetail
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
		res.status(200).json(seller);
	}catch(er){
		res.status(404).json({msg:"Something went wrong"})
		console.log(er);
	}
})

router.post("/delete",async (req,res)=>{
try{
		console.log(req.body.id);
		const products=await Seller.remove({_id:req.body.id});
		res.status(200).json(products);
	}catch(e){
		console.log(e);
		res.status(400).json(products);
	}
});

router.post("/update",async (req,res)=>{
	try{
		const products=await Seller.updateOne({_id:req.body.id},
			{
				"$set":{...req.body}
			});
		res.status(200).json(products);
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