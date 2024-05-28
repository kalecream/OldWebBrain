import postgres from 'postgres';

export const sql = postgres(process.env.POSTGRES_PRISMA_URL!, {
  ssl: 'allow',
});
