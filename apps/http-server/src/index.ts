
import express from "express";

const app = express();

app.get("/signup", (req, res) => {
    res.send("Hello world");
})

app.get("/signin", (req, res) => {
    res.send("Hello world");
})

app.get("/chat", (req, res) => {
    res.send("Hello world");
})

app.listen(3001);