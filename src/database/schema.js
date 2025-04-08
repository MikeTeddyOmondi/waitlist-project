// schema.js
const { pgTable, serial, text  } = require('drizzle-orm/pg-core');

// Define a "users" table
const users = pgTable('users', {
  id: serial('id').primaryKey(), // Auto-incrementing primary key
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
});

// waitlist 
const waitlists = pgTable('waitlist', {
  id: serial('id').primaryKey(),
  email: text('email').notNull().unique(),
})

module.exports = { users, waitlists };

