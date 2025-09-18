const pool = require("../db");

async function findUserByEmail(email) {
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
  return result.rows[0];
}

async function findUserByMobile(mobile) {
  const result = await pool.query("SELECT * FROM users WHERE mobile_number = $1", [mobile]);
  return result.rows[0];
}

async function findUserById(id) {
  const result = await pool.query(
    "SELECT id, name, email, mobile_number, gender, created_at FROM users WHERE id = $1",
    [id]
  );
  return result.rows[0];
}

async function createUser({ name, email, mobile_number, gender, password_hash }) {
  const result = await pool.query(
    `INSERT INTO users (name, email, mobile_number, gender, password_hash)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING id, name, email, mobile_number, gender, created_at`,
    [name, email, mobile_number, gender, password_hash]
  );
  return result.rows[0];
}

async function findUserByEmailOrMobile(email, mobile_number) {
  const result = await pool.query(
    "SELECT * FROM users WHERE email = $1 OR mobile_number = $2",
    [email, mobile_number]
  );
  return result.rows[0];
}

module.exports = {
  findUserByEmail,
  findUserByMobile,
  findUserById,
  createUser,
  findUserByEmailOrMobile,
};
