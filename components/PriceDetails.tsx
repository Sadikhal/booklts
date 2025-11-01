'use client';

import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { Minus, Plus } from 'lucide-react'
import { Experience } from '@/types'
import { useRouter } from 'next/navigation'
import { format, isSameDay } from 'date-fns'
import { formatPrice } from '@/lib/utils';
import toast from 'react-hot-toast';

interface PriceDetailsProps {
  experience: Experience
  selectedDate: Date | null
  selectedTime: string | null
  quantity: number
  onQuantityChange: (quantity: number) => void
}

const PriceDetails: React.FC<PriceDetailsProps> = ({
  experience,
  selectedDate,
  selectedTime,
  quantity,
  onQuantityChange
}) => {
  const router = useRouter()


  const getMaxQuantity = () => {
    if (!selectedDate || !selectedTime) return 0
    
    const slot = experience.slots.find(s => {
      const slotDate = new Date(s.date)
      return isSameDay(slotDate, selectedDate) && s.time === selectedTime && !s.soldOut
    })
    
    return slot ? slot.available : 0
  }

  const maxQuantity = getMaxQuantity()
  const basePrice = experience.price * quantity
  const tax = Math.round(basePrice * 0.17)
  const total = basePrice + tax

  const handleConfirm = () => {
    if (!selectedDate || !selectedTime) {
      toast('Please select date and time')
      return
    }

    if (quantity > maxQuantity) {
      toast(`Only ${maxQuantity} slots available for this time`)
      return
    }

    const queryParams = new URLSearchParams({
      experienceId: experience.id,
      date: selectedDate.toISOString(),
      time: selectedTime,
      quantity: quantity.toString()
    })

    router.push(`/checkout?${queryParams.toString()}`)
  }

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return
    if (newQuantity > maxQuantity) {
      alert(`Only ${maxQuantity} slots available`)
      return
    }
    onQuantityChange(newQuantity)
  }

  return (
    <div className="flex flex-col gap-3 w-full h-full bg-[#EFEFEF] p-6 rounded-xl">
      <div className="flex font-normal text-base justify-between text-[#656565]">
        <span>Starts at</span>
        <span className="text-heading text-lg">{formatPrice(experience.price)}</span>
      </div>

      <div className="flex flex-row justify-between font-normal text-base text-[#656565]">
        <span>Quantity</span>
        <div className='flex flex-row gap-[9px] justify-between items-center text-heading'>
          <button 
            onClick={() => handleQuantityChange(quantity - 1)}
            disabled={quantity <= 1}
            className='border-[0.4px] rounded-none border-[#C9C9C9] h-4 w-4 flex items-center justify-center hover:bg-gray-50 bg-transparent disabled:opacity-50 text-heading px-0 disabled:cursor-not-allowed'
          >
            <Minus size={12} />
          </button>
          <span className='text-sm'>{quantity}</span>
          <button 
            onClick={() => handleQuantityChange(quantity + 1)}
            disabled={quantity >= maxQuantity}
            className='border-[0.4px] rounded-none border-[#C9C9C9] h-4 w-4 flex items-center justify-center hover:bg-gray-50 bg-transparent disabled:opacity-50 text-heading px-0 disabled:cursor-not-allowed'
          >
            <Plus size={12} />
          </button>
        </div>
      </div>

      <div className="flex justify-between font-normal text-base text-[#656565]">
        <span>Subtotal</span>
        <span className="text-heading text-sm">{formatPrice(basePrice)}</span>
      </div>

      <div className="flex justify-between font-normal text-base text-[#656565]">
        <span>Taxes</span>
        <span className='text-heading font-normal text-sm'>{formatPrice(tax)}</span>
      </div>

      <Separator className="bg-[#D9D9D9] h-px"/>

      <div className="flex justify-between items-center">
        <span className="font-medium text-xl text-heading">Total</span>
        <span className="font-medium text-xl text-heading">{formatPrice(total)}</span>
      </div>

      <Button 
        onClick={handleConfirm}
        disabled={!selectedDate || !selectedTime || maxQuantity === 0}
        className="bg-yellow hover:bg-yellow/50 text-black mt-3 font-medium rounded-lg h-11 py-3 px-5 w-full text-base disabled:bg-[#D7D7D7] disabled:text-[#7F7F7F] disabled:cursor-not-allowed"
      >
        {!selectedDate || !selectedTime ? 'Select Date & Time' : 
         maxQuantity === 0 ? 'No Slots Available' : 'Confirm'}
      </Button>
    </div>
  )
}

export default PriceDetails