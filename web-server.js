const express = require("express");

const path = require("path");

const app = express();

const port = 3000;


app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "html", "index.html"));
});

app.get("/page1", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "html", "page1.html"));
});

app.get("/page2", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "html", "page2.html" ));
});

app.get("/page3", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "html", "page3.html" ));
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000/");
});