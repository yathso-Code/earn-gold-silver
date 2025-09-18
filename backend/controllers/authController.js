const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  findUserByEmail,
  findUserByMobile,
  findUserById,
  createUser,
  findUserByEmailOrMobile,
} = require("../models/userModel");
const { validateRegister, validateLogin } = require("../utils/validators");

const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS || "10", 10);
const jwtSecret = process.env.JWT_SECRET || "secret";
const jwtExpiresIn = process.env.JWT_EXPIRES_IN || "7d";

async function register(req, res) {
  try {
    const { errors, valid } = validateRegister(req.body);
    if (!valid) return res.status(400).json({ ok: false, errors });

    const { name, email, mobile_number, gender, password } = req.body;

    const existing = await findUserByEmailOrMobile(email, mobile_number);
    if (existing) {
      return res.status(400).json({ ok: false, message: "Email or mobile already exists" });
    }

    const password_hash = await bcrypt.hash(password, saltRounds);
    const user = await createUser({ name, email, mobile_number, gender, password_hash });

    return res.status(201).json({ ok: true, user });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, message: "Server error" });
  }
}

async function login(req, res) {
  try {
    const { errors, valid } = validateLogin(req.body);
    if (!valid) return res.status(400).json({ ok: false, errors });

    const { identifier, password } = req.body;
    let user;

    if (identifier.includes("@")) {
      user = await findUserByEmail(identifier);
    } else {
      user = await findUserByMobile(identifier);
    }

    if (!user) return res.status(400).json({ ok: false, message: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password_hash);
    if (!match) return res.status(400).json({ ok: false, message: "Invalid credentials" });

    const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: jwtExpiresIn });

    return res.json({
      ok: true,
      token,
      user: { id: user.id, name: user.name, email: user.email, mobile_number: user.mobile_number, gender: user.gender },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, message: "Server error" });
  }
}

async function me(req, res) {
  try {
    const user = await findUserById(req.userId);
    if (!user) return res.status(404).json({ ok: false, message: "User not found" });
    return res.json({ ok: true, user });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, message: "Server error" });
  }
}

module.exports = { register, login, me };
