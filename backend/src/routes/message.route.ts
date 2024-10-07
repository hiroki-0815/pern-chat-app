import express from 'express';
const router = express.Router();

router.get("/conversations", (_, res)=>{
  res.send("Conversation route")
})

export default router;