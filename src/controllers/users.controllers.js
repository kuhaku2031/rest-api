import { pool } from "../db.js";

export const getAllUsers = async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM users");
  res.json(rows);
};

export const getUser = async (req, res) => {
  const { userId } = req.params;
  const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [
    userId,
  ]);

  if (rows.length === 0) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.json(rows[0]);
};

export const getUsersByName = async (req, res) => {
  const { name } = req.params;

  const { rows } = await pool.query("SELECT * FROM users WHERE name = $1", [
    name,
  ]);

  return res.json(rows[0]);
};

export const createUser = async (req, res) => {
  try {
    const newUser = req.body;

    const { rows } = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1,$2,$3) RETURNING *",
      [newUser.name, newUser.email, newUser.password]
    );
    return res.json(rows[0]);
  } catch (error) {
    console.log(error);
    if (error?.code === "23505") {
      return res.status(409).json({ message: "email already exists" });
    }
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const { rows } = await pool.query(
    "UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING *",
    [data.name, data.email, data.password, id]
  );

  return res.json(rows[0]);
};

export const deleteUser = async (req, res) => {
  const { userId } = req.params;
  const { rows, rowCount } = await pool.query(
    "DELETE FROM users WHERE id = $1",
    [userId]
  );

  if (rowCount === 0) {
    return res.status(404).json({ message: "User not found" });
  } else {
    return res.send("Usuario deleted");
  }
};
