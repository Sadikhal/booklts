import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const experiences = await prisma.experience.findMany({
      include: { slots: true },
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(experiences, { status: 200 });
  } catch (error) {
    console.error('Error fetching experiences:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}