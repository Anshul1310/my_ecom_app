const mongoose=require("mongoose");

const schema=mongoose.Schema({
	name: String,
	gender:String,
	region:String,
	zone:String,
	woreda:String,
	kebele:String,
	phone:Number,
	_id:String,
	additional_number:Number,
	email:String,
	level:String,
	tin:String,
	type:String,
	age:Number,
	bookNumber:String,
	distanceDetail:String
},{ timestamps: true});

module.exports=mongoose.model("Sellers", schema);