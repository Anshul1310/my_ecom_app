const Order=require("../models/Order");
const router=require("express").Router();
const Settings =require("../models/Settings");
const Transaction =require("../models/transaction");

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

router.post("/update",async (req,res)=>{
	try{
		console.log(req.body);
		// console.log(req.body);
		// const obj=await Settings.findOne();
		// const number=obj.orderIndex;
		// await Settings.updateOne({
		// 	orderIndex:number+1
		// })
		// const orderNumber="Order Id: #"+number;
		// const order=await Order.create({...req.body, orderId:orderNumber});
		// res.status(200).json(order);
		const order=await Order.updateOne({orderId:req.body.orderId},{
			"$set":{
				...req.body
			}
		});
		if(req.body.status=="delivered"){
			req.body.items.map(async (value)=>{
				const {seller, price, quantity}=value;
				const  transaction=await Transaction.create({
				payout:(price*quantity),
				seller,
				type:"credit",
				})
			})
			res.status(200).json("success");

		}else{
			res.status(200).json(order);
		}
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

router.get("/dispatched",async (req,res)=>{
	try{
		const order=await Order.find({status:"dispatched"});
		res.status(200).json(order);
	}catch(er){
		res.status(400).json("error");
	}
})

router.get("/delivered",async (req,res)=>{
	try{
		const order=await Order.find({status:"delivered"});
		res.status(200).json(order);
	}catch(er){
		res.status(400).json("error");
	}
})

router.get("/onTheWay",async (req,res)=>{
	try{
		const order=await Order.find({status:"preparing"});
		res.status(200).json(order);
	}catch(er){
		res.status(400).json("error");
	}
})

router.get("/preparing",async (req,res)=>{
	try{
		const order=await Order.find({status:"preparing"});
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
