const mongoose=require("mongoose");

const schema=mongoose.Schema({
	organization:String,
	address:String,
	phone:Number,
	email:String,
	_id:String,
	additional_number:Number,
	type:String,
	tin:String,
	name:String,
	contact_person:String,
	level:String
},{ timestamps: true});

module.exports=mongoose.model("Buyers", schema);