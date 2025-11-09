const express =require("express");
const cors =require("cors")
const connection =require("./config/db");
//const connection='mongodb://127.0.0.1:27017/realtime-crypto'
require("dotenv").config();

const app =express()
app.use(express.json());

const PORT =process.env.PORT||8080;
app.use(cors());


const userRouter = require("./route/user.routes");
const leadRouter = require("./route/lead.routes");


app.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "Welcome to the realtime-crypto backend" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong,try again" });
  }

})
 app.use("/api",userRouter);
app.use("/api", leadRouter);

app.listen(PORT, async () => {
  console.log("Next-Gen CRM Backend Is Running");
  try {
    await connection;
    console.log("Connected to Server At Port: ", PORT);
  } catch (error) {
    console.log(error);
    console.log("error getting to connect with data base");
  }
});
