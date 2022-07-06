const mongoose=require("mongoose");

const schema=mongoose.Schema({
	name: String,
	gender:String,
	region:String,
	zone:String,
	woreda:String,
	kebele:String,
	phone:Number,
	additional_phone:Number,
	email:String,
	level:String,
	tin:String,
	agent:String,
	type:String,
	book:String,
	distanceDetail:String
});

module.exports=mongoose.model("Sellers", schema);