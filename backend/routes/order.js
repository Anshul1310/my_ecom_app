const Order=require("../models/Order");
const router=require("express").Router();
const Settings =require("../models/Settings");

router.post("/add",async (req,res)=>{
	try{
		console.log(req.body);
		const obj=await Settings.findOne();
		const number=obj.orderIndex;
		await Settings.updateOne({
			orderIndex:number+1
		})
		const orderNumber="Order Id: #"+number;
		const order=await Order.create({...req.body, orderId:orderNumber});
		res.status(200).json(order);
	}catch(er){
		console.log(er);
		res.status(400).json({msg:"error"});
	}
})
router.get("/all",async (req,res)=>{
	try{
		const order=await Order.find();
		res.status(200).json(order);
	}catch(er){
		res.status(400).json({msg:"error"});
	}
})
router.get("/find/user/:id",async (req,res)=>{
	try{
		const order=await Order.find({buyer:req.params.id});
		res.status(200).json(order);
	}catch(er){
		res.status(400).json({msg:"error"});
	}
})
router.get("/find/seller/:id",async (req,res)=>{
	try{
		const order=await Order.find({seller:req.params.id});
		res.status(200).json(order);
	}catch(er){
		res.status(400).json("error");
	}
})
router.get("/:id",async (req,res)=>{
	try{
		const order=await Order.find({_id:req.params.id});
		res.status(200).json(order);
	}catch(er){
		res.status(400).json({msg:"error"});
	}
})

module.exports=router;
