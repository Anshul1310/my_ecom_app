const mongoose=require("mongoose");
const schema=mongoose.Schema({
	orderIndex:{
		type:Number,
		default:1
	},
	adminIndex:{
		type:Number,
		default:1
	},
	sellerIndex:{
		type:Number,
		default:1
	},
	buyerIndex:{
		type:Number,
		default:1
	},
	_id:{
		type:String,
		default:"setingsOfTheApp"
	}
},{ timestamps: true})
module.exports=mongoose.model("Settings", schema);