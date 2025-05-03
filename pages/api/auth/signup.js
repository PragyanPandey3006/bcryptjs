// pages/api/auth/signup.js
import bcrypt from 'bcryptjs';

// Dummy data storage (replace with real DB in production)
const users = [];

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the new user (this is just for simulation)
    users.push({ username, passwordHash: hashedPassword });

    return res.status(201).json({ message: 'User registered successfully' });
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
