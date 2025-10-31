// import prisma from '@/lib/prismadb';
// import { NextResponse } from 'next/server';

// export async function GET() {
//   try {
//     const experiences = await prisma.experience.findMany({
//       include: { slots: true },
//       orderBy: { createdAt: 'desc' }
//     });

//     return NextResponse.json(experiences, { status: 200 });
//   } catch (error) {
//     console.error('Error fetching experiences:', error);
//     return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
//   }
// }


import {prisma} from '@/lib/prismadb';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const searchQuery = searchParams.get('search');

    let whereClause = {};

    if (searchQuery) {
      whereClause = {
        OR: [
          {
            title: {
              contains: searchQuery,
              mode: 'insensitive' as const
            }
          },
          {
            description: {
              contains: searchQuery,
              mode: 'insensitive' as const
            }
          },
          {
            location: {
              contains: searchQuery,
              mode: 'insensitive' as const
            }
          },
          {
            about: {
              contains: searchQuery,
              mode: 'insensitive' as const
            }
          }
        ]
      };
    }

    const experiences = await prisma.experience.findMany({
      where: whereClause,
      include: { slots: true },
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(experiences, { status: 200 });
  } catch (error) {
    console.error('Error fetching experiences:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}