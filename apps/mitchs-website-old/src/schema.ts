import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const user = pgTable('User', {
  id: serial('id').primaryKey(),
  createdAt: date('date'),
  email: string(),
  name: string(),
  password: string(),
  role:
});

