// pages/api/auth/login.js
import bcrypt from 'bcryptjs';

// Dummy user data (replace with a database in a real app)
const users = [
  { username: 'john_doe', passwordHash: '$2a$10$g7cz9h.cYZnG0sdlN9kYPeuNhkRP6gjYfVpw5g3iT0fW3qyt5LzjO' } // password: "password123"
];

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Find user by username
    const user = users.find(u => u.username === username);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare provided password with stored hashed password
    const isMatch = await bcrypt.compare(password, user.passwordHash);

    if (isMatch) {
      return res.status(200).json({ message: 'Login successful' });
    } else {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
