
var express = require('express');
var ejs = require('ejs');
var app = express();
app.set('view engine', 'ejs');
const path  = require('path');
const data = require('./data/product.json');
const fs = require('fs');

app.use(express.static(path.join(__dirname, '/public/')));
app.set('views' , path.join(__dirname, '/views'));
const filePath = path.join(__dirname, 'data', 'product.json');


// home/explore
app.get("/", (req, res) => {
    

    fs.readFile(filePath, (err, data) => {
        if (!err) {
            const products = JSON.parse(data);
            res.render("explore", { products });
        }
        else
        {
            console.log(err)
        }
    })

});
// product
app.get("/product/:id", (req, res) => {
    // extracting request parameter id
    let {id} = req.params
    // setting data
    fs.readFile(filePath, (err, data) => {
        if (!err) {
            const products = JSON.parse(data);
            res.render("product", { products, id});
        }
        else
        {
            console.log(err)
        }
    })
});

app.get("/cart", (req, res) => {
    res.send("this is cart page")
});

app.get("*", (req, res) =>{
    res.send("I don't know that path")
});




app.listen(3000, function() {
    console.log("server is listening!!!");
});










