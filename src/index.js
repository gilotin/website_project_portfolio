const express = require("express");
const { viewEngine } = require("./viewEngine/handlebars");

const app = express();
viewEngine(app);

app.use(express.static("src/static/"));
app.use(express.urlencoded({extended: false}));
// app.use(routes)

app.get("/", (req,res)=>{
    res.render("index")
})



app.listen(5000, () => console.log("Server is running on PORT: 5000"));
