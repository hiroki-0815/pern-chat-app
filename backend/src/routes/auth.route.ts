import express from 'express';

const router = express.Router();

router.get("/login", (_, res)=>{
  res.send("Logged in successfully")
})

router.get("/logout", (_, res)=>{
  res.send("Logged out successfully")
})

router.get("/signup", (_, res)=>{
  res.send("Signed up successfully")
})

export default router;