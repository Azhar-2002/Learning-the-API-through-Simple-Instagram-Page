const express = require("express");
const app = express();
const path = require("path");

const port =8080;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("viwes",path.join(__dirname,"/viwes"));
app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/ig/:username", (req ,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data){
        res.render("instagram.ejs", {data});
    }else{
        res.render("error.ejs");
    }
    
})

app.get("/rolldice",(req,res)=>{
    let diceVal = Math.floor(Math.random()*6)+1 ;
    res.render("rolldice.ejs",{diceVal});
})

app.listen(port,()=>{
    console.log(`Listing on port ${port}`);
})