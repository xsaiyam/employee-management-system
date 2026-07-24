const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

// Create Default Admin
const createDefaultAdmin = async () => {
  try {
    const admin = await Admin.findOne({
      where: { username: "admin" },
    });

    if (!admin) {
      const hashedPassword = await bcrypt.hash("admin123", 10);

      await Admin.create({
        username: "admin",
        password: hashedPassword,
      });

      console.log("✅ Default Admin Created");
    }
  } catch (error) {
    console.log(error);
  }
};

// Login API
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const admin = await Admin.findOne({
      where: { username },
    });

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid Username",
      });
    }

    const match = await bcrypt.compare(
      password,
      admin.password
    );

    if (!match) {
      return res.status(401).json({
        success: false,
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      {
        id: admin.id,
        username: admin.username,
      },
      "employee-secret-key",
      {
        expiresIn: "1d",
      }
    );

    res.json({
      success: true,
      message: "Login Successful",
      token,
      admin: {
        id: admin.id,
        username: admin.username,
        role: admin.role,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  createDefaultAdmin,
  login,
};