const app =require("express")();
const express=require("express");
const mongoose =require("mongoose");
const cors=require("cors");

const sellers=require("./routes/sellers");
const buyers=require("./routes/buyers");
const notification=require("./routes/notification");
const product=require("./routes/product");
const order=require("./routes/order");
const admin=require("./routes/admin");

const MONGO_USERNAME = 'anshul';
const MONGO_PASSWORD = 'anshul10';
const MONGO_HOSTNAME = 'localhost';
const MONGO_PORT = '5321';
const MONGO_DB = 'hi';

mongoose.connect("mongodb+srv://Anshul1310:anshulnegiisthebest@cluster0.5pb7s.mongodb.net/VideoCallApp?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((data)=>{
	console.log("dsd")
});

const corsOption = {
    origin: ['http://localhost:3000'],
    credentials:true,
    methods:["GET","POST","PUT","DELETE"]
};
app.use(cors(corsOption));

app.use(express.json());
app.use("/api/sellers", sellers);
app.use("/api/buyers", buyers);
app.use("/api/product", product);
app.use("/api/notification", notification);
app.use("/api/order",order);
app.use("/api/admin",admin);


app.listen(4000,()=>{
	console.log("listening");
})

