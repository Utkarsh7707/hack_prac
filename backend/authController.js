const { generateToken } = require("./jwtAuth");

// In-memory user store for demonstration purposes
// IMPORTANT: Replace this with a real database (MongoDB, PostgreSQL, etc.) in production
const users = [];

async function signup(req, res) {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }

    // Check if user already exists
    const existingUser = users.find((u) => u.username === username);
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // IMPORTANT: In a real application, ALWAYS hash the password using bcrypt or argon2!
    // Example: const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      id: Date.now().toString(),
      username,
      password, // Storing plain text password for demo only
    };

    users.push(newUser);

    // Generate JWT token
    const token = generateToken({ id: newUser.id, username: newUser.username });

    return res.status(201).json({
      message: "User created successfully",
      token,
      user: { id: newUser.id, username: newUser.username },
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error during signup" });
  }
}

async function login(req, res) {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }

    // Find user
    const user = users.find((u) => u.username === username);
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Check password
    // IMPORTANT: In a real app, use bcrypt.compare(password, user.password)
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate token
    const token = generateToken({ id: user.id, username: user.username });

    return res.status(200).json({
      message: "Login successful",
      token,
      user: { id: user.id, username: user.username },
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error during login" });
  }
}

module.exports = {
  signup,
  login,
};
