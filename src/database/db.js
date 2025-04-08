// db.js
const { Pool } = require('pg'); // mysql2
const { drizzle } = require('drizzle-orm/node-postgres');
require('dotenv').config();

// Create a connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Initialize drizzle-orm with the Postgres pool
const db = drizzle(pool);

module.exports = { db };
