
const express = require("express");
const bodyParser = require("body-parser");
const urlencoded = require("body-parser/lib/types/urlencoded");
const date = require(__dirname + "/date.js");  // module required 

const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");                      //ejs requiring
app.use(express.static("public"));                  //letting express run our code in other directories binded to our working directory.


app.get("/", function(req, res) {

    const day = date.getDate();                     // calling the function in our module which was required in a constant date and now store it in a variable day

    res.render("list", {listTitle: day, newListItems: items});          // passing the viriable to render it in our app

});

app.post("/", function(req, res) {
    
    const item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    }else {
        items.push(item);
        res.redirect("/");
    }

    
}); 

app.get("/about", function(req, res) {
    res.render("about");
});

app.get("/work", function(req, res) {
    res.render("list", {listTitle: "Work List", newListItems: workItems})
});



app.listen(3000, function() {
    console.log("Server is running on port: 3000");
});