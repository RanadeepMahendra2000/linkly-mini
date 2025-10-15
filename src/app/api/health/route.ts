// app/api/health/route.ts
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // Simple DB round-trip
    await prisma.$queryRaw`SELECT 1`;
    return Response.json({ ok: true, db: true });
  } catch (err) {
    // Optional: console.error(err);
    return new Response(JSON.stringify({ ok: false, db: false }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
