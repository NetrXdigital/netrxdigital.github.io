import { Pool } from 'pg';
import { NextResponse } from 'next/server';

// Configure PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Ensure DATABASE_URL is set in your environment variables
});

export async function POST(request: Request) {
  try {
    const { name, phone_number } = await request.json();

    // Basic validation
    if (!name || !phone_number) {
      return NextResponse.json({ error: 'Name and phone number are required' }, { status: 400 });
    }

    const client = await pool.connect();
    try {
      const result = await client.query(
        'INSERT INTO leads (name, phone_number) VALUES ($1, $2) RETURNING *',
        [name, phone_number]
      );
      return NextResponse.json(result.rows[0], { status: 201 });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error inserting lead:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}