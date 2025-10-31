import prisma from './prismadb'
import { addDays } from 'date-fns'

const experiences = [
  {
    title: 'kayaking',
    description: 'Curated small-group experience. Certified guide. Safety first with gear included.',
    price: 958,
    image: 'https://res.cloudinary.com/dozy9hkue/image/upload/v1758994792/robdq9v0rfxgh8twgws9.webp',
    location: 'Santorini, Greece',
    duration: '3 hours',
    about: 'Scenic routes, trained guides, and safety briefing. Minimum age 10.',
    slots: [
      { date: addDays(new Date(), 1), time: '07:00 am', available: 4, soldOut: false },
      { date: addDays(new Date(), 1), time: '09:00 am', available: 2, soldOut: false },
      { date: addDays(new Date(), 1), time: '11:00 am', available: 5, soldOut: false },
      { date: addDays(new Date(), 2), time: '07:00 am', available: 3, soldOut: false },
      { date: addDays(new Date(), 2), time: '09:00 am', available: 0, soldOut: true },
      { date: addDays(new Date(), 2), time: '11:00 am', available: 6, soldOut: false },
    ]
  },
  {
    title: 'walking tour',
    description: 'Curated small-group experience. Certified guide. Safety first with gear included.',
    price: 450,
    image: 'https://res.cloudinary.com/dozy9hkue/image/upload/v1758994285/xgued58gnv2ugekviibp.webp',
    location: 'Rome, Italy',
    duration: '4 hours',
    about: 'Explore historic sites with expert guides. Comfortable walking shoes recommended.',
    slots: [
      { date: addDays(new Date(), 1), time: '08:00 am', available: 8, soldOut: false },
      { date: addDays(new Date(), 1), time: '02:00 pm', available: 5, soldOut: false },
      { date: addDays(new Date(), 2), time: '08:00 am', available: 10, soldOut: false },
    ]
  },
  {
    title: 'japanese cooking',
    description: 'Learn to make authentic Japanese dishes including sushi, ramen, and tempura.',
    price: 750,
    image: 'https://res.cloudinary.com/dozy9hkue/image/upload/v1758988082/o3vwkc6izlrpvpdbxssp.jpg',
    location: 'Tokyo, Japan',
    duration: '2.5 hours',
    about: 'Hands-on cooking class with expert chefs. All ingredients provided.',
    slots: [
      { date: addDays(new Date(), 1), time: '10:00 am', available: 6, soldOut: false },
      { date: addDays(new Date(), 1), time: '02:00 pm', available: 4, soldOut: false },
      { date: addDays(new Date(), 2), time: '10:00 am', available: 8, soldOut: false },
    ]
  }
]

const promoCodes = [
  {
    code: 'SAVE10',
    discountType: 'PERCENTAGE' as const,
    discountValue: 10,
    minAmount: 500,
    maxDiscount: 200,
    validUntil: addDays(new Date(), 30),
    isActive: true,
    maxUsage: 100
  },
  {
    code: 'FLAT100',
    discountType: 'FIXED' as const,
    discountValue: 100,
    minAmount: 1000,
    validUntil: addDays(new Date(), 30),
    isActive: true,
    maxUsage: 50
  }
]

async function seed() {
  try {
    console.log('Starting database seed...')
    
    // Clear existing data in correct order (respecting foreign key constraints)
    await prisma.booking.deleteMany({})
    console.log('Cleared bookings')
    
    await prisma.slot.deleteMany({})
    console.log('Cleared slots')
    
    await prisma.promoCode.deleteMany({})
    console.log('Cleared promo codes')
    
    await prisma.experience.deleteMany({})
    console.log('Cleared experiences')
    
    // Insert experiences with slots
    for (const exp of experiences) {
      console.log(`Creating experience: ${exp.title}`)
      await prisma.experience.create({
        data: {
          title: exp.title,
          description: exp.description,
          price: exp.price,
          image: exp.image,
          location: exp.location,
          duration: exp.duration,
          about: exp.about,
          slots: {
            create: exp.slots.map(slot => ({
              date: slot.date,
              time: slot.time,
              available: slot.available,
              soldOut: slot.soldOut
            }))
          }
        }
      })
    }

    // Insert promo codes
    for (const promo of promoCodes) {
      console.log(`Creating promo code: ${promo.code}`)
      await prisma.promoCode.create({
        data: promo
      })
    }
    
    console.log('Database seeded successfully!')
  } catch (error) {
    console.error('Error seeding database:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

// Run the seed function if this file is executed directly
if (require.main === module) {
  seed()
    .catch((e) => {
      console.error(e)
      process.exit(1)
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
}

export default seed