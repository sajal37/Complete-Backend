const express=require('express');
const {m1,m2}=require('./middleware/middleware');
const app=express();
app.use(express.static(__dirname+'/public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(m1);
app.use(m2);
app.get("/home",(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the Home Page"
    })
});

app.listen(5534,()=>{
    console.log("Server is running on port 5534");
});