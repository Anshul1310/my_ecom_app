const router=require("express").Router();
const Transaction =require("../models/transaction");
const Withdrawal =require("../models/withdrawal");


router.get("/find/seller/:id",async (req,res)=>{
	try{
		console.log(req.params);
		const transactions=await Transaction.find({seller:req.params.id});
		console.log(transactions);
		res.status(200).json(transactions);
	}catch(e){
		console.log(e);
		res.status(200).json("error");
	}

})

router.get("/find/seller/walletBalance/:id",async (req,res)=>{
	try{
		const transactions=await Transaction.find({seller:req.params.id});
		console.log(transactions);
		let walletBalance=0;
		transactions.map((data)=>{
			console.log(data.type);
			if(data.type==="credit"){
				walletBalance=walletBalance+data.payout;
			}else{
				walletBalance=walletBalance-data.payout;
			}
		})
		res.status(200).json(walletBalance);
	}catch(e){
		console.log(e);
		res.status(200).json("error");
	}

})

router.post("/find/seller/walletBalance/:id",async (req,res)=>{
	try{
		const transactions=await Transaction.find({seller:req.params.id});
		console.log(transactions);
		let walletBalance=0;
		transactions.map((data)=>{
			console.log(data.type);
			if(data.type==="credit"){
				walletBalance=walletBalance+data.payout;
			}else{
				walletBalance=walletBalance-data.payout;
			}
		})
		res.status(200).json(walletBalance);
	}catch(e){
		console.log(e);
		res.status(200).json("error");
	}
})

router.post("/withdrawal/initiate",async (req,res)=>{
	try{
		const withdrawal=await Withdrawal.create({
			...req.body
		});
		const transaction=await Transaction.create({
				payout:req.body.payout,
				seller:req.body.seller,
				type:"debit"
		})
		console.log(transaction);
		res.status(200).json("success");
	}catch(e){
		console.log(e);
		res.status(200).json("error");
	}
})

router.post("/withdrawal/update",async (req,res)=>{
	try{
		const withdrawal=Withdrawal.updateOne({_id:req.body.id},{
			...req.body
		});
		if(req.body.status=="success"){
			const transaction=await Transaction.create({
				payout:req.body.payout,
				seller:req.body.seller,
				type:"debit"
			})
		}
		res.status(200).json(withdrawal);
	}catch(e){
		console.log(e);
		res.status(200).json("error");
	}
})
module.exports=router;