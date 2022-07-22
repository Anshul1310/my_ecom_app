const router = require("express").Router();
const Seller=require("../models/Seller");
const Settings =require("../models/Settings");

router.post("/add",async (req,res)=>{
	try{
		console.log(req.body);
		const {name, gender,region, zone, woreda, kebele, phone,additional_number, email, level, tin,age, type, bookNumber,distanceDetail}=req.body;
		const obj=await Settings.findOne();
		const number=obj.adminIndex;
		await Settings.updateOne({
			sellerIndex:number+1
		})
		const idIn="WS"+number;
		const password=phone;
		const seller=await Seller.create({
			name, gender,region,password, _id:idIn, zone, woreda, kebele,additional_number:additional_number, phone, email, level, tin,age, type, bookNumber,distanceDetail
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

router.post("/login",async (req,res)=>{
	try{
		const seller=await Seller.findOne({password:req.body.password, email:req.body.email});
		console.log(seller)
		if(seller==null){
			res.status(404).json("Invalid Credentials");
		}else{
			res.status(200).json(seller);
		}
	}catch(er){
		res.status(404).json("Something went wrong")
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
		console.log(req.body);
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