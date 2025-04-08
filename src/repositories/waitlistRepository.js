// waitlistRepository.js
const { db } = require("../database/db");
const { waitlists } = require("../database/schema");
const { eq } = require("drizzle-orm/expressions");

class WaitlistRepository {
  async findById(id) {
    const [result] = await db
      .select()
      .from(waitlists)
      .where(eq(waitlist.id, id))
      .limit(1);
    return result || null;
  }

  async findAll() {
    return await db.select().from(waitlists);
  }

  async create(waitlist) {
    const [result] = await db.insert(waitlists).values(waitlist).returning();
    return result;
  }

  async update(id, waitlistData) {
    const [result] = await db
      .update(waitlists)
      .set(waitlistData)
      .where(eq(waitlists.id, id))
      .returning();
    return result || null;
  }

  async delete(id) {
    const result = await db.delete(waitlists).where(eq(waitlists.id, id)).returning();
    return result.length > 0; // true or false
  }
}

module.exports = WaitlistRepository
