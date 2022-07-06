const mongoose=require("mongoose");

const schema=mongoose.Schema({
	organization:String,
	address:String,
	phone:Number,
	email:String,
	additional_number:Number,
	type:String,
	tin:String,
	name:String,
	contact_person:String,
	level:String
});

module.exports=mongoose.model("Buyers", schema);