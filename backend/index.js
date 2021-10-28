const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");

dotenv.config();

mongoose.connect(
   process.env.MONGO_URL
).then(() =>console.log("DB connection successful!"))
.catch((err) =>{
    console.log(err);
});

app.use(
    cors({
        credentials: true,
        origin: true,
        optionsSuccessStatus: 200,
    })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api",authRoute);
app.use("/api/users", userRoute);
app.use("/api/products",productRoute);

app.listen(5000, ()=>{
    console.log("Backend server is running");
});
