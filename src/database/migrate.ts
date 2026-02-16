import { type SQLiteDatabase } from 'expo-sqlite';

export async function migrate(database: SQLiteDatabase) {
  await database.execAsync(`
    PRAGMA foreign_keys = ON;

    CREATE TABLE IF NOT EXISTS targets (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      amount FLOAT NOT NULL,

      create_at timestamp NOT NULL DEFAULT current_timestamp,
      update_at timestamp NOT NULL DEFAULT current_timestamp
    );

      CREATE TABLE IF NOT EXISTS transactions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      target_id INTEGER NOT NULL,
      amount FLOAT NOT NULL,
      observation TEXT,

      create_at timestamp NOT NULL DEFAULT current_timestamp,
      update_at timestamp NOT NULL DEFAULT current_timestamp,

      FOREIGN KEY (target_id) REFERENCES targets(id) ON DELETE CASCADE
    );
    
  `);
}
