const News=require("../models/News");
const router=require("express").Router();
const Jimp=require("jimp");
const path=require("path");

router.post("/add",async (req,res)=>{
	try{
		const {image, title, description} =req.body;
		const buffer = Buffer.from(
            image.replace(/^data:image\/(png|jpg|jpeg);base64,/, ''),
            'base64'
    	);
		 const imagePath = `${Date.now()}-${Math.round(
            Math.random() * 1e9
        )}.png`;

		const jimpRes=await Jimp.read(buffer);
    	jimpRes.resize(100, Jimp.AUTO).write(path.resolve(__dirname, `../images/${imagePath}`));
   		
   		const avatar=`/images/${imagePath}`;

		const news=await News.create({image:avatar, title, description});
		res.status(200).json(news);

	}catch(e){
		res.status(400).json({msg:"error"});
		console.log(e);
	}
})

router.get("/all",async (req,res)=>{
	try{
		const news=await News.find();
		res.status(200).json(news);
		
	}catch(e){
		res.status(400).json({msg:"error"});
		console.log(e);
	}
})


module.exports=router;