import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHander } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send("Server is Ready!"));

app.use(notFound);
app.use(errorHander);

app.listen(PORT, () => console.log(`Server started in port ${PORT}.`));
