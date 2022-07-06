const News=require("../models/News");
const router=require("express").Router();

router.post("/add",async (req,res)=>{
	try{
		const news=await News.create(req.body);
		res.status(200).json({msg:"success"});

	}catch(e){
		res.status(400).json({msg:"error"});
	}
})

router.get("/get",async (req,res)=>{
	try{
		const news=await News.find();

		res.status(200).json(news);
		
	}catch(e){
		res.status(400).json({msg:"error"});
	}
})


module.exports=router;