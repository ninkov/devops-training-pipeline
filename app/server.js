const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello from DevOps CI/CD training app!");

});

app.get("/health", (req, res) => {
    res.json({ status: "UP" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});