import express from "express";
const PORT = 5000;

const app = express();

app.get("/", (req, res) => res.send("Server is Ready!"));

app.listen(PORT, () => console.log(`Server started in port ${PORT}.`));
