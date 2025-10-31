// import { NextRequest, NextResponse } from 'next/server';
// import prisma from '@/lib/prismadb';



// export async function GET(request: NextRequest, context: { params: { experienceId: string } }) {

//   const params = await context.params;
//   try {
//     const id = params.experienceId;
    
//     if (!id) {
//       return NextResponse.json(
//         { success: false, error: 'Experience ID is required'},
//         { status: 400 }
//       );
//     }

//     const experience = await prisma.experience.findUnique({
//       where: { id },
//       include: { slots: true }
//     });

//     if (!experience) {
//       return NextResponse.json(
//         { success: false, error: 'Experience not found' },
//         { status: 404 }
//       );
//     }
//     return NextResponse.json({ success: true, data: experience });
//   } catch (error) {
//     return NextResponse.json(
//       { success: false, error: 'Failed to fetch experience' },
//       { status: 500 }
//     );
//   }
// }



import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prismadb';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ experienceId: string }> }
) {
  try {
    const { experienceId } = await params;
    
    if (!experienceId) {
      return NextResponse.json(
        { success: false, error: 'Experience ID is required' },
        { status: 400 }
      );
    }

    const experience = await prisma.experience.findUnique({
      where: { id: experienceId },
      include: { slots: true }
    });

    if (!experience) {
      return NextResponse.json(
        { success: false, error: 'Experience not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: experience });
  } catch (error) {
    console.error('Error fetching experience:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch experience' },
      { status: 500 }
    );
  }
}