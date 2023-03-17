import express from "express";
import verifyNameFieldMid from "./middlewares/verifyNameField-middleware.js";
import routers from "./routes/routes.js";

const app = express();

const PORT = 3333;

app.use(express.json());
app.use(verifyNameFieldMid)
app.use(routers);

global.users = [];

app.listen(PORT, () => {
    console.log(`Server running in localhost:${PORT}`)
})