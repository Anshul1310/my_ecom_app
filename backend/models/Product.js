const mongoose=require("mongoose");
const Schema = mongoose.Schema;

const schema=mongoose.Schema({
	title: String,
	description:String,
	category:String,
	image:String,
	store:String,
	seller:String,
	moq:Number,
	price:Number,
	slashedPrice:Number,
	measuringUnit:String
},{ timestamps: true});

module.exports=mongoose.model("Product", schema);