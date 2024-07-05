import { db } from '@vercel/postgres';

const client = await db.connect();

export async function GET() {
  await client.sql`BEGIN`;
  await client.sql`DROP TABLE users`;
  await client.sql`DROP TABLE invoices`;
  await client.sql`DROP TABLE revenue`;
  await client.sql`DROP TABLE customers`;
  await client.sql`COMMIT`;

  return Response.json({ message: 'Now I will drop all tables' });
}
