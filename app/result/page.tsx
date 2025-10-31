// import Container from '@/components/Container'
// import { Button } from '@/components/ui/button'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// const ResultPage = () => {
//   return (
//     <Container>
//        <div className='w-full justify-center items-center h-full pt-[167px] flex flex-col gap-1'>
//           <Image
//             className="object-contain object-center"
//             src="/Vector.svg"
//             alt="vector"
//             width={70}
//             height={70}
//           />
//          <div className='font-medium text-[32px] text-heading capitalize mt-7'>
//            Booking Confirmed
//          </div>
//          <div className='text-xl font-normal text-[#656565]'>Ref ID: HUF56&SO</div>
//          <Button className='bg-[#E3E3E3] py-2 px-4 h-9 rounded-sm w-[138px] mt-8 flex items-center justify-center'>
//           <Link href="/" className="w-full h-full text-center font-normal text-base text-[#656565]">
//             Back to Home
//           </Link>
//          </Button>
//        </div>
//     </Container>
//   )
// }

// export default ResultPage


'use client';

import Container from '@/components/Container'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const ResultPage = () => {
  const searchParams = useSearchParams()
  const bookingId = searchParams.get('bookingId')
  
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <Container>
        <div className='w-full justify-center items-center h-full pt-[167px] flex flex-col gap-1'>
          <div className="animate-pulse bg-gray-200 h-[70px] w-[70px] rounded-full"></div>
          <div className="animate-pulse bg-gray-200 h-8 w-48 mt-7 rounded"></div>
          <div className="animate-pulse bg-gray-200 h-6 w-32 mt-2 rounded"></div>
          <div className="animate-pulse bg-gray-200 h-9 w-32 mt-8 rounded"></div>
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <div className='w-full justify-center items-center h-full pt-[167px] flex flex-col gap-1'>
        <Image
          className="object-contain object-center"
          src="/Vector.svg"
          alt="vector"
          width={70}
          height={70}
        />
        <div className='font-medium text-[32px] text-heading capitalize mt-7'>
          Booking Confirmed
        </div>
        <div className='text-xl font-normal text-[#656565]'>Ref ID: {bookingId} || 'HUF56&SO'</div>
        <Button className='bg-[#E3E3E3] py-2 px-4 h-9 rounded-sm w-[138px] mt-8 flex items-center justify-center hover:bg-[#E3E3E3]/80'>
          <Link href="/" className="w-full h-full text-center font-normal text-base text-[#656565]">
            Back to Home
          </Link>
        </Button>
      </div>
    </Container>
  )
}

export default ResultPage