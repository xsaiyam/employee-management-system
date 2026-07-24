const authRoutes = require("./routes/authRoutes");
const express = require("express");
const cors = require("cors");

const { connectDB, sequelize } = require("./config/database");

const employeeRoutes = require("./routes/employeeRoutes");

require("./models/Employee");
require("./models/Admin");


const { createDefaultAdmin } = require("./controllers/authController");

const app = express();

const PORT = process.env.PORT || 5000;



app.use(cors());
app.use(express.json());



connectDB();

sequelize
  .sync()
  .then(async () => {

    console.log("Employee Table Created Successfully");


    await createDefaultAdmin();

  })
  .catch((error) => {

    console.log("Table Creation Error:", error);

  });



app.get("/", (req, res) => {

  res.send("Employee Management Backend Running...");

});


app.use("/api/employees", employeeRoutes);
app.use("/api/auth", authRoutes);



app.listen(PORT, () => {

  console.log(`Server running on http://localhost:${PORT}`);

});