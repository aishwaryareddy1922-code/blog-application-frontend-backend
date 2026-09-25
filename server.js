const express = require("express");

const app = express();

const PORT = 5000;


// Home route
app.get("/", (req, res) => {

    res.send("Welcome to My Blog API");

});


// About route
app.get("/about", (req, res) => {

    res.json({
        message: "This is my Blog Application backend",
        developer: "Aishwarya"
    });

});


// Start server
app.listen(PORT, () => {

    console.log(
        `Server running at http://localhost:${PORT}`
    );

});