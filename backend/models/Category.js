const mongoose=require("mongoose");

const schema=mongoose.Schema({
	image:String,
	name:String
});

module.exports=mongoose.model("Category", schema);
