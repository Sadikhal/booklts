import { NextResponse } from 'next/server'
import {prisma} from '@/lib/prismadb'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { code, amount } = body || {}

    if (!code) {
      return NextResponse.json({ error: 'Promo code is required' }, { status: 400 })
    }

    const promoCode = await prisma.promoCode.findFirst({
      where: {
        code: String(code).toUpperCase(),
        isActive: true,
        validUntil: {
          gte: new Date(),
        },
      },
    })

    if (!promoCode) {
      return NextResponse.json({ error: 'Invalid or expired promo code' }, { status: 400 })
    }

    if (promoCode.maxUsage && promoCode.usedCount >= promoCode.maxUsage) {
      return NextResponse.json({ error: 'Promo code usage limit reached' }, { status: 400 })
    }

    const amt = typeof amount === 'string' ? parseFloat(amount) : Number(amount || 0)
    if (promoCode.minAmount && amt < promoCode.minAmount) {
      return NextResponse.json({ error: `Minimum amount of ₹${promoCode.minAmount} required` }, { status: 400 })
    }

    let discount = 0
    if (promoCode.discountType === 'PERCENTAGE') {
      discount = (amt * promoCode.discountValue) / 100
      if (promoCode.maxDiscount && discount > promoCode.maxDiscount) {
        discount = promoCode.maxDiscount
      }
    } else {
      discount = promoCode.discountValue
    }

    discount = Math.min(discount, amt)

    return NextResponse.json(
      {
        valid: true,
        discount: Math.round(discount),
        discountType: promoCode.discountType,
        discountValue: promoCode.discountValue,
        maxDiscount: promoCode.maxDiscount,
        finalAmount: Math.round(amt - discount),
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Promo validation error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}