const mongoose=require("mongoose");

const schema=mongoose.Schema({
	title: String,
	description:String,
	category:String,
	image:String,
	price:Number,
	slashedPrice:Number,
	measuringUnit:String
});

module.exports=mongoose.model("Product", schema);