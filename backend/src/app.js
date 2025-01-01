import express from "express"
import cookieParser from "cookie-parser";

const app = express()
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(cookieParser())

import userRourter from "./routes/user.route.js"
import taskRouter from "./routes/task.route.js";

app.get("/",(req, res) => {
    res.send('hello from todo backend')
  })

app.use("/api/user", userRourter);
app.use("/api/task", taskRouter);

export {app}