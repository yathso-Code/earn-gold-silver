const prisma = require("../db/prisma");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { name, email, mobile, gender, password } = req.body;

    if (!name || !email || !mobile || !gender || !password) {
      return res.status(400).json({ message: "Please fill all the fields"});
    }

    const existing = await prisma.user.findFirst({
      where: { OR: [{ email }, { mobile }] },
    });
    if (existing) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { name, email, mobile, gender, password: hashedPassword },
    });

    res.status(201).json({
      message: "User registered successfully",
      user: { id: user.id, email: user.email, mobile: user.mobile },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const login = async (req, res) => {
  try {
    const { emailOrMobile, password } = req.body;

    if(!emailOrMobile || !password){
       return res.status(400).json({ message: "Please fill all the fields"});
    }

    const user = await prisma.user.findFirst({
      where: { OR: [{ email: emailOrMobile }, { mobile: emailOrMobile }] },
    });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DEMO API for TEST------------------
const me = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: { id: true, name: true, email: true, mobile: true, gender: true },
    });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { register, login, me };
