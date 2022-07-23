const router = require("express").Router();
const Withdrawal=require("../models/Withdrawal");


router.post("/initiate",async (req,res)=>{
	try{
		const withdrawal=Withdrawal.create({...req.body})
		res.status(200).json(withdrawal);
	}catch(er){
		console.log(er);
		res.status(400).json("error")
	}
})

router.get("/all",async (req,res)=>{
	try{
		const withdrawal=Withdrawal.find()
		res.status(200).json(withdrawal);
	}catch(er){
		console.log(er);
		res.status(400).json("error")
	}
})

router.get("/initiated",async (req,res)=>{
	try{
		const withdrawal=Withdrawal.find({status:"initiated"})
		res.status(200).json(withdrawal);
	}catch(er){
		console.log(er);
		res.status(400).json("error")
	}
})

router.get("/seller/find",async (req,res)=>{
	try{
		const withdrawal=Withdrawal.find(seller:)
		res.status(200).json(withdrawal);
	}catch(er){
		console.log(er);
		res.status(400).json("error")
	}
})

router.get("/success",async (req,res)=>{
	try{
		const withdrawal=Withdrawal.find({status:"success"})
		res.status(200).json(withdrawal);
	}catch(er){
		console.log(er);
		res.status(400).json("error")
	}
})
module.exports=router;