const router = require("express").Router();
const Product =require("../models/Product");

router.post("/add",async (req,res)=>{
	try{
		const product=await Product.create(req.body);
		console.log(product);
		res.status(200).json({msg:"success"});
	}catch(e){
		console.log(e);
		res.status(400).json({msg:"error"})
	}
})


router.post("/product/:id",async (req,res)=>{
	try{
		const product=await Product.find({_id:req.params.id});
		console.log(product);
		res.status(200).json({msg:"success"});
	}catch(er){
		res.status(404).json({msg:"Something went wrong"})
		console.log(er);
	}
})

router.post("/all",async (req,res)=>{
	try{
		const product=await Product.find();
		console.log(product);
		res.status(200).json({msg:"success"});
	}catch(er){
		res.status(404).json({msg:"Something went wrong"})
		console.log(er);
	}
})


module.exports=router;