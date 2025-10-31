// import { Button } from "./ui/button"
// import { Separator } from "./ui/separator"

// const CheckoutPriceDetails = () => {
//   return (
//    <div className="flex flex-col gap-3  w-full h-full bg-[#EFEFEF] p-6 rounded-xl">
//             <div className="flex font-normal text-base justify-between text-[#656565]">
//               <span>Experience</span>
//               <span className="text-heading">Kayaking</span>
//             </div>
//             <div className="flex justify-between font-normal text-base text-[#656565]">
//               <span>Date</span>
//               <span className="text-heading text-sm">2025-10-22</span>
//             </div>
//             <div className="flex justify-between font-normal text-base text-[#656565]">
//               <span>Time</span>
//               <span className="text-heading text-sm">09:00 am</span>
//             </div>
//             <div className="flex justify-between font-normal text-base text-[#656565]">
//               <span>Quantity</span>
//               <span className="text-heading text-sm">1</span>
//             </div>
//             <div className="flex justify-between font-normal text-base text-[#656565]">
//               <span>Subtotal</span>
//               <span className="text-heading text-sm">₹999</span>
//             </div>
//             <div className="flex justify-between font-normal text-base text-[#656565]">
//               <span>Taxes</span>
//               <span className='text-heading font-normal text-sm'>₹59</span>
//             </div>
//               <Separator className="bg-[#D9D9D9] h-px"/>
//             <div className="flex justify-between items-center">
//               <span className="font-medium text-xl text-heading">Total</span>
//               <span className="font-medium text-xl text-heading">₹958</span>
//             </div>

//             <Button className="bg-yellow hover:bg-yellow/50 text-black mt-3 font-medium rounded-lg h-11 py-3 px-5 w-full text-base">
//               Pay and Confirm
//             </Button>
//           </div>
//   )
// }

// export default CheckoutPriceDetails


'use client';

import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { Experience, PromoValidation } from '@/types'
import { format } from 'date-fns'

interface CheckoutPriceDetailsProps {
  experience: Experience;
  date: Date | null;
  time: string | null;
  quantity: number;
  appliedPromo: PromoValidation | null;
  total: number;
}

const CheckoutPriceDetails = ({ experience, date, time, quantity = 1, appliedPromo, total }: CheckoutPriceDetailsProps) => {
  const formatPrice = (price: number) => {
    // Ensure price is a number and not NaN
    const validPrice = Number.isNaN(price) ? 0 : price;
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(validPrice)
  }

  // Ensure we have valid numbers for calculations
  const basePrice = (experience?.price || 0) * (quantity || 1)
  const tax = Math.round(basePrice * 0.05);

  return (
    <div className="flex flex-col gap-3 w-full h-full bg-[#EFEFEF] p-6 rounded-xl">
      <div className="flex font-normal text-base justify-between text-[#656565]">
        <span>Experience</span>
        <span className="text-heading capitalize">{experience.title}</span>
      </div>

      {date && (
        <div className="flex justify-between font-normal text-base text-[#656565]">
          <span>Date</span>
          <span className="text-heading text-sm">{format(date, 'MMM dd, yyyy')}</span>
        </div>
      )}

      {time && (
        <div className="flex justify-between font-normal text-base text-[#656565]">
          <span>Time</span>
          <span className="text-heading text-sm">{time}</span>
        </div>
      )}

      <div className="flex justify-between font-normal text-base text-[#656565]">
        <span>Quantity</span>
        <span className="text-heading text-sm">{quantity}</span>
      </div>

      <div className="flex justify-between font-normal text-base text-[#656565]">
        <span>Subtotal</span>
        <span className="text-heading text-sm">{formatPrice(basePrice)}</span>
      </div>

      {appliedPromo && (
        <div className="flex justify-between font-normal text-base text-[#656565]">
          <span>Discount</span>
          <span className="text-green-600 text-sm">-{formatPrice(appliedPromo.discount)}</span>
        </div>
      )}

      <div className="flex justify-between font-normal text-base text-[#656565]">
        <span>Taxes</span>
        <span className='text-heading font-normal text-sm'>{formatPrice(tax)}</span>
      </div>

      <Separator className="bg-[#D9D9D9] h-px"/>

      <div className="flex justify-between items-center">
        <span className="font-medium text-xl text-heading">Total</span>
        <span className="font-medium text-xl text-heading">{formatPrice(Number.isNaN(total) ? basePrice + tax - (appliedPromo?.discount || 0) : total)}</span>
      </div>

      <Button 
        type="submit"
        className="bg-yellow hover:bg-yellow/50 text-black mt-3 font-medium rounded-lg h-11 py-3 px-5 w-full text-base"
      >
        Pay and Confirm
      </Button>
    </div>
  )
}

export default CheckoutPriceDetails