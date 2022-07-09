const router = require("express").Router();
const Store=require("../models/Store");

router.get("/all",async (req,res)=>{

})

router.post("/add",async (req,res)=>{
	const store=await Store.create({
		
	})
})

module.exports=router;