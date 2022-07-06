const Category=require("../models/Category");
const router=require("express").Router();

router.post("/add",async (req,res)=>{
	try{
		const category=await Category.create(req.body);
		res.status(200).json({msg:"success"});

	}catch(e){
		res.status(400).json({msg:"error"});
	}
})

router.get("/get",async (req,res)=>{
	try{
		const Category=await Category.find();

		res.status(200).json(Category);
		
	}catch(e){
		res.status(400).json({msg:"error"});
	}
})


module.exports=router;