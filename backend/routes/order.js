const Order=require("../models/Order");
const router=require("express").Router();

router.post("/new",async (req,res)=>{
	try{
		const order=await Order.create(req.body);
		res.status(200).json(order);
	}catch(er){
		console.log(er);
		res.status(400).json({msg:"error"});
	}
})
router.get("/all",async (req,res)=>{
	try{
		const order=await Order.findOne().populate("seller").exec();
		res.status(200).json(order);
	}catch(er){
		res.status(400).json({msg:"error"});
	}
})
router.get("/find/user/:id",async (req,res)=>{
	try{
		const order=await Order.find({_id:req.params.id});
		res.status(200).json(order);
	}catch(er){
		res.status(400).json({msg:"error"});
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
