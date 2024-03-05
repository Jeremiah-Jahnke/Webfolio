/*
 * File: Index.js
 * Author: Jeremiah J.
 * Description: Main entry point for the project.
 * 
 * Copyright (c) 2024 Jeremiah J.
 * Licensed under the GPL 3.0 License. See LICENSE file in the project root for full license information.
 */

const express = require("express");
const path = require("path");
const ejs = require("ejs");

const app = express();
const port = 3000;

const public = path.join(__dirname, "Public");
const views = path.join(__dirname, "Views");

app.use(express.static(public));
app.set("Views", views);
app.engine("html", ejs.renderFile);
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.redirect("portfolio");
});

app.get("/portfolio", (req, res) => {
    res.render("Index.html");
});

app.listen(port, () => {
    console.log(`\u001b[37mServer started on \u001b[32mhttp://localhost:${port}`);
})