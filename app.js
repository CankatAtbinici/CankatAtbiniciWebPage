const express = require("express")
const app = express()


app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use("/stylecss" , express.static(__dirname + "/css"));
app.use("/bootstrap" , express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use("/myscript" , express.static(__dirname + "/js"));
app.use("/images" , express.static(__dirname + "/images"));
app.use("/fontawesome" , express.static(__dirname + "/font-awesome/css"));




app.set("view engine" , "ejs")


app.get("/" , (req, res) => {
    console.log(":) :) ")
    res.render("index")
})

app.get("/developer" , (req, res)=> {
    console.log("deneme sayfası çalıştı");
    res.render("developer")
})

app.get("/wordpresspages" , (req,res) => {
    console.log("wordpress sayfası çalıştı");
    res.render("worpresspages")
})

app.get("/front-end-tech" , (req,res)  => {
    console.log("front-end-tech çalıştı");
    res.render("front-end-tech")
})
app.get("/back-end-tech" , (req,res) => {
    console.log("back-end-tech çalıştı");
    res.render("back-end-tech")
})

app.get("/digital-execute" , (req, res) => {
    console.log("digital sayfası çalıştı");
    res.render("digital-execute")
})

app.get("/articles" , (req, res) => {
    console.log("articles çalıştı");
    res.render("articles")
})





app.listen(3001)