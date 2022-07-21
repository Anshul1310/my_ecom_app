const mongoose=require("mongoose");
const Schema = mongoose.Schema;

const schema=mongoose.Schema({
	buyer:{
		type:Schema.Types.String,
		ref:"buyer"
	},
	seller:{
		type:Schema.Types.String,
		ref:"seller"
	},
	note:String,
	location:{
		type:Object
	},
	items:[{
		productId:{
			type:Schema.Types.ObjectId,
			ref:"Product"
		},
		quantity:{
			type:Number,
			default:1
		}
	}],
	totalPrice:Number,
	status:String,
	paymentType:String,
	orderId:String
},{ timestamps: true});
module.exports=mongoose.model("Order",schema);