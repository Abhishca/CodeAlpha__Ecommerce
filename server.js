const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://5524016_db_user:REpVuJq4PuC5QiUi@cluster0.xo48lgk.mongodb.net/?appName=Cluster0");

app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));

app.listen(5000, () => console.log("Server running on port 5000"));