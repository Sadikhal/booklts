// import { NextRequest, NextResponse } from "next/server";
// import prisma from "@/lib/prismadb";

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const { experienceId, date, time, quantity, userInfo, totalAmount } = body;

//     if (!experienceId || !date || !time || !quantity || !userInfo?.name || !userInfo?.email || !totalAmount) {
//       return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
//     }

//     const experience = await prisma.experience.findUnique({
//       where: { id: experienceId },
//       include: { slots: true }
//     });

//     if (!experience) {
//       return NextResponse.json({ error: "Experience not found" }, { status: 404 });
//     }

//     const bookingDate = new Date(date);
    
//     // Fix: Compare dates properly by converting both to ISO string dates
//     const slot = experience.slots.find((s) => {
//       const slotDate = s.date.toISOString().split('T')[0];
//       const requestDate = bookingDate.toISOString().split('T')[0];
//       return slotDate === requestDate && s.time === time;
//     });

//     if (!slot) {
//       return NextResponse.json({ error: "Slot not found" }, { status: 404 });
//     }

//     if (slot.available < quantity) {
//       return NextResponse.json({ 
//         error: `Only ${slot.available} slots available for this time` 
//       }, { status: 400 });
//     }

//     const result = await prisma.$transaction(async (tx) => {
//       const booking = await tx.booking.create({
//         data: {
//           experienceId,
//           date: bookingDate,
//           time,
//           quantity,
//           userInfo,
//           totalAmount: Math.round(totalAmount),
//         },
//         include: {
//           experience: true,
//         },
//       });

//       const newAvailable = slot.available - quantity;
//       await tx.slot.update({
//         where: { id: slot.id },
//         data: {
//           available: newAvailable,
//           soldOut: newAvailable === 0
//         }
//       });

//       return booking;
//     });

//     return NextResponse.json(result, { status: 201 });
//   } catch (error) {
//     console.error("Booking creation error:", error);
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 });
//   }
// }

import { NextRequest, NextResponse } from "next/server";
import {prisma} from "@/lib/prismadb";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { experienceId, date, time, quantity, userInfo, totalAmount } = body;

    if (!experienceId || !date || !time || !quantity || !userInfo?.name || !userInfo?.email || !totalAmount) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const experience = await prisma.experience.findUnique({
      where: { id: experienceId },
      include: { slots: true }
    });

    if (!experience) {
      return NextResponse.json({ error: "Experience not found" }, { status: 404 });
    }

    const bookingDate = new Date(date);
    
    // Define the slot type explicitly
    type SlotType = {
      id: string;
      date: Date;
      time: string;
      available: number;
      soldOut: boolean;
      experienceId: string;
    };

    const slot = experience.slots.find((s: SlotType) => {
      const slotDate = s.date.toISOString().split('T')[0];
      const requestDate = bookingDate.toISOString().split('T')[0];
      return slotDate === requestDate && s.time === time;
    });

    if (!slot) {
      return NextResponse.json({ error: "Slot not found" }, { status: 404 });
    }

    if (slot.available < quantity) {
      return NextResponse.json({ 
        error: `Only ${slot.available} slots available for this time` 
      }, { status: 400 });
    }

    // Use Prisma.TransactionClient type for the tx parameter
    const result = await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      const booking = await tx.booking.create({
        data: {
          experienceId,
          date: bookingDate,
          time,
          quantity,
          userInfo,
          totalAmount: Math.round(totalAmount),
        },
        include: {
          experience: true,
        },
      });

      const newAvailable = slot.available - quantity;
      await tx.slot.update({
        where: { id: slot.id },
        data: {
          available: newAvailable,
          soldOut: newAvailable === 0
        }
      });

      return booking;
    });

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error("Booking creation error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// Updated interfaces to match Prisma schema
