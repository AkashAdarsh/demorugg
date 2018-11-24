var express= require("express");
var app= express();


app.use('/assets',express.static('assets'));


app.get("/",function(req,res){
    res.render("index.ejs");
});

app.get("/about",function(req,res){
    res.render("about.ejs");
});

app.get("/media",function(req,res){
    res.render("media.ejs");
});

app.get("/rorpage",function(req,res){
    res.render("rorpage.ejs");
});

app.get("/store",function(req,res){
    res.render("store.ejs");
});


app.get("/contact",function(req,res){
    res.render("contact.ejs");
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server has started");
});