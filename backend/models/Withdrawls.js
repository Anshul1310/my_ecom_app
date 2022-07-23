const mongoose=require("mongoose");
const schema=mongoose.Schema({
	seller:String,
	payout:String,
	status:String,
	phone:Number,
	payout:Number,
	transactionSlip:String,
	transactionId:String
})

module.exports=mongoose.model("Withdrawal",schema);