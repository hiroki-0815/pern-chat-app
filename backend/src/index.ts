import express from "express"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"

import dotednv from "dotenv"
dotednv.config();
const app = express()

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

app.listen(3000, () =>{
  console.log("Sever is running on port 3000");
  
})