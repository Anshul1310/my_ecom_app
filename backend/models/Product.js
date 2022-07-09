const mongoose=require("mongoose");
const Schema = mongoose.Schema;

const schema=mongoose.Schema({
	title: String,
	description:String,
	category:String,
	image:String,
	store:String,
	moq:Number,
	seller:{
		type:Schema.Types.ObjectId,
		ref:"Seller"
	},
	price:Number,
	slashedPrice:Number,
	measuringUnit:String
},{ timestamps: true});

module.exports=mongoose.model("Product", schema);