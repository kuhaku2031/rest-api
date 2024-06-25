import express from "express";
import { PORT } from "./config.js";
import useRoutes from "./routes/users.routes.js";
import morgan from "morgan";

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/api' , useRoutes);

app.listen(PORT);
