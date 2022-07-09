const mongoose=require("mongoose");

const schema=mongoose.Schema({
	title:String,
	description:String,
	image:String
},{ timestamps: true});

module.exports=mongoose.model("News", schema);