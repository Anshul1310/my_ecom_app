const mongoose=require("mongoose");
const Schema = mongoose.Schema;

const schema=mongoose.Schema({
	buyer:{
		type:Schema.Types.ObjectId,
		ref:"Buyer"
	},
	seller:{
		type:Schema.Types.ObjectId,
		ref:"Seller"
	},
	note:String,
	location:{
		type:Object
	},
	items:{ type : Array , "default" : [] },
	totalPrice:Number,
	status:String,
	paymentType:String,
	orderId:String
},{ timestamps: true});
module.exports=mongoose.model("Order",schema);