const Category=require("../models/Category");
const router=require("express").Router();
const Jimp=require("jimp");
const path=require("path");

router.post("/add",async (req,res)=>{
	try{
		const {name, image}=req.body;
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
		const category=await Category.create({name, image:avatar} );
		res.status(200).json(category);

	}catch(e){
		res.status(400).json({msg:"error"});
		console.log(e);
	}
})

router.get("/all",async (req,res)=>{
	try{
		const category=await Category.find();

		res.status(200).json(category);
		
	}catch(e){
		res.status(400).json({msg:"error"});
	}
})


module.exports=router;