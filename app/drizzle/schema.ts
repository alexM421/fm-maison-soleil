import { uuid, pgTable, varchar, timestamp, pgEnum } from "drizzle-orm/pg-core";


export const userRoleEnum = pgEnum('user_role', ['guest','admin'])

export const UserTable =pgTable('user',{
    id: uuid("id").primaryKey().defaultRandom(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    passwordHash: varchar('password_hash', { length: 255 }).notNull(),
    role: userRoleEnum('role').notNull().default('guest'),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
})