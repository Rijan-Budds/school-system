/* eslint-disable no-undef */
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "R!j4n2025$Secure",
  database: "assignment",
});

app.post("/login", (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "Missing required fields." });
  }

  const query = "SELECT * FROM users WHERE username = ? AND email = ? LIMIT 1";

  db.query(query, [username, email], (err, results) => {
    if (err) {
      console.log("Database error.", err);
      return res.status(401).json({ message: "Database error" });
    }

    const user = results[0];

    if (user.password === password) {
      res.json({
        message: "Login successful",
        userId: user.id,
        username: user.username,
        role: user.role,
      });
    } else {
      res.status(401).json({ message: "Incorrect password" });
    }
  });
});

app.post("/register", (req, res) => {
  const { username, email, password, role } = req.body;

  if (!username || !email || !password || !role) {
    return res.status(400).json({ message: "Missing required fields." });
  }

  const checkQuery = "SELECT * FROM users WHERE username = ? OR email = ?";
  db.query(checkQuery, [username, email], (err, results) => {
    if (err) {
      console.error("Database error.", err);
      return res.status(500).json({ message: "Database error" });
    }

    if (results.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Insert new user
    const insertQuery =
      "INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)";
    db.query(insertQuery, [username, email, password, role], (err) => {
      if (err) {
        console.error("Insert error.", err);
        return res.status(500).json({ message: "Failed to register user" });
      }

      res.status(200).json({ message: "Registration successful" });
    });
  });
});

app.get("/", (req, res) => {
  res.send("Backend server is running!");
});

app.listen(port, () => {
  console.log(`Server is currently running at http://localhost:${port}`);
});
