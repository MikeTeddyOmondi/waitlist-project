// userRepository.js
const { db } = require('../database/db');
const { users } = require('../database/schema');
const { eq } = require('drizzle-orm/expressions');

class UserRepository {
  // Find a user by ID - SELECT * FROM users where id = ?1;
  async findById(id) {
    const [result] = await db.select().from(users).where(eq(users.id, id)).limit(1);
    return result || null;
  }

  // Get all users - SELECT * FROM users;
  async findAll() {
    return await db.select().from(users);
  }

  // Create a new user - name & email
  async create(user) {
    // Drizzle returns the inserted record(s)
    const [result] = await db.insert(users).values(user).returning();
    return result;
  }

  // Update a user by ID
  async update(id, userData) {
    const [result] = await db
      .update(users)
      .set(userData)
      .where(eq(users.id, id))
      .returning();
    return result || null;
  }

  // Delete a user by ID
  async delete(id) {
    const result = await db.delete(users).where(eq(users.id, id)).returning();
    return result.length > 0; // true or false 
  }
}

module.exports = UserRepository;