const Settings=require("../models/Settings");
const router=require("express").Router();

router.post("/index/create",async (req, res)=>{
	const settings=await Settings.create({})

})


module.exports=router;