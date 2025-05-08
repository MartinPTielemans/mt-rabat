import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

import * as schema from './schema';

// Check if DATABASE_URL is defined
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined');
}

// Create neon client
const sql = neon(process.env.DATABASE_URL);

// Create drizzle client
export const db = drizzle(sql, { schema });

// Export schema for use in application code
export * from './schema'; 