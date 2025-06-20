import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

import projectRoutes from "./routes/projectRoutes"
import searchRoutes from "./routes/searchRoutes";
import tasksRoutes from "./routes/taskRoutes";
import userRoutes from "./routes/userRoutes"
import teamRoutes from "./routes/teamRoutes"

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("Home Route Running Successfully!!")
})

app.use("/projects", projectRoutes)
app.use("/search" , searchRoutes)
app.use("/tasks", tasksRoutes)
app.use("/users", userRoutes)
app.use("/teams", teamRoutes)

// test codes here

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})