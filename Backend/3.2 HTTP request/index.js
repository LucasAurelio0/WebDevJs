import express from "express";
const app = express();
const port = 3000;


app.get("/", (req, res) => {
   res.send("<h1>Taylor</h1>");
});

app.get("/about", (req, res) => {
    res.send("Dev hours")
});



app.listen(port, () => {
    console.log("yes")
});