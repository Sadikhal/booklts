// // import { Button } from './ui/button'
// // import { Separator } from './ui/separator'
// // import { Minus, Plus } from 'lucide-react'

// // const PriceDetails = () => {
// //   return (
// //    <div className="flex flex-col gap-3  w-full h-full bg-[#EFEFEF] p-6 rounded-xl">
// //             <div className="flex font-normal text-base justify-between text-[#656565]">
// //               <span>Starts at</span>
// //               <span className="text-heading">₹958</span>
// //             </div>

// //             <div className="flex flex-row justify-between font-normal text-base text-[#656565] ">
// //               <span>Quantity</span>
// //               <div className='flex flex-row gap-[9px] justify-between items-center text-heading'>
// //                 <div className='border border-[#C9C9C9] h-4 w-4 flex items-center justify-center'>
// //                   <Minus size={12} />
// //                 </div>
// //                 <span className='text-sm'>1</span>
// //                 <div className='border border-[#C9C9C9] h-4 w-4 flex items-center justify-center'>
// //                  <Plus size={12} />
// //                 </div>
// //               </div>
             
// //             </div>
// //             <div className="flex justify-between font-normal text-base text-[#656565]">
// //               <span>Subtotal</span>
// //               <span className="text-heading text-sm">₹958</span>
// //             </div>
          
            
            
// //             <div className="flex justify-between font-normal text-base text-[#656565]">
// //               <span>Taxes</span>
// //               <span className='text-heading font-normal text-sm'>₹59</span>
// //             </div>
// //               <Separator className="bg-[#D9D9D9] h-px"/>
// //             <div className="flex justify-between items-center">
// //               <span className="font-medium text-xl text-heading">Total</span>
// //               <span className="font-medium text-xl text-heading">₹1098</span>
// //             </div>

// //             <Button className="bg-yellow hover:bg-yellow/50 text-black mt-3 font-medium rounded-lg h-11 py-3 px-5 w-full text-base">
// //                Confirm
// //             </Button>
// //           </div>
// //   )
// // }

// // export default PriceDetails

// 'use client';

// import { Button } from './ui/button'
// import { Separator } from './ui/separator'
// import { Minus, Plus } from 'lucide-react'
// import { Experience } from '@/types'
// import { useRouter } from 'next/navigation'
// import { format } from 'date-fns'

// interface PriceDetailsProps {
//   experience: Experience;
//   selectedDate: Date | null;
//   selectedTime: string | null;
//   quantity: number;
//   onQuantityChange: (quantity: number) => void;
// }

// const PriceDetails = ({ experience, selectedDate, selectedTime, quantity, onQuantityChange }: PriceDetailsProps) => {
//   const router = useRouter()

//   const basePrice = experience.price * quantity
//   const tax = Math.round(basePrice * 0.05) // 5% tax
//   const total = basePrice + tax

//   const formatPrice = (price: number) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       minimumFractionDigits: 0,
//     }).format(price)
//   }

//   const handleConfirm = () => {
//     if (!selectedDate || !selectedTime) {
//       alert('Please select date and time')
//       return
//     }

//     // Navigate to checkout with query parameters
//     const params = new URLSearchParams({
//       experienceId: experience.id,
//       date: selectedDate.toISOString(),
//       time: selectedTime,
//       quantity: quantity.toString()
//     })

//     router.push(`/checkout?${params.toString()}`)
//   }

//   return (
//     <div className="flex flex-col gap-3 w-full h-full bg-[#EFEFEF] p-6 rounded-xl">
//       <div className="flex font-normal text-base justify-between text-[#656565]">
//         <span>Starts at</span>
//         <span className="text-heading">{formatPrice(experience.price)}</span>
//       </div>

//       <div className="flex flex-row justify-between font-normal text-base text-[#656565]">
//         <span>Quantity</span>
//         <div className='flex flex-row gap-[9px] justify-between items-center text-heading'>
//           <button
//             onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
//             className='border border-[#C9C9C9] h-4 w-4 flex items-center justify-center rounded-sm hover:bg-gray-100'
//           >
//             <Minus size={12} />
//           </button>
//           <span className='text-sm'>{quantity}</span>
//           <button
//             onClick={() => onQuantityChange(quantity + 1)}
//             className='border border-[#C9C9C9] h-4 w-4 flex items-center justify-center rounded- hover:bg-gray-100'
//           >
//             <Plus size={12} />
//           </button>
//         </div>
//       </div>

//       {selectedDate && selectedTime && (
//         <>
//           <div className="flex justify-between font-normal text-base text-[#656565]">
//             <span>Date</span>
//             <span className="text-heading text-sm">{format(selectedDate, 'MMM dd, yyyy')}</span>
//           </div>

//           <div className="flex justify-between font-normal text-base text-[#656565]">
//             <span>Time</span>
//             <span className="text-heading text-sm">{selectedTime}</span>
//           </div>
//         </>
//       )}

//       <div className="flex justify-between font-normal text-base text-[#656565]">
//         <span>Subtotal</span>
//         <span className="text-heading text-sm">{formatPrice(basePrice)}</span>
//       </div>

//       <div className="flex justify-between font-normal text-base text-[#656565]">
//         <span>Taxes</span>
//         <span className='text-heading font-normal text-sm'>{formatPrice(tax)}</span>
//       </div>

//       <Separator className="bg-[#D9D9D9] h-px"/>

//       <div className="flex justify-between items-center">
//         <span className="font-medium text-xl text-heading">Total</span>
//         <span className="font-medium text-xl text-heading">{formatPrice(total)}</span>
//       </div>

//       <Button 
//         onClick={handleConfirm}
//         disabled={!selectedDate || !selectedTime}
//         className="bg-yellow hover:bg-yellow/50 text-black mt-3 font-medium rounded-lg h-11 py-3 px-5 w-full text-base disabled:bg-gray-300 disabled:cursor-not-allowed"
//       >
//         Confirm
//       </Button>
//     </div>
//   )
// }

// export default PriceDetails



// 'use client';

// import { Button } from './ui/button'
// import { Separator } from './ui/separator'
// import { Minus, Plus } from 'lucide-react'
// import { Experience } from '@/types'
// import { useRouter } from 'next/navigation'

// interface PriceDetailsProps {
//   experience: Experience
//   selectedDate: Date | null
//   selectedTime: string | null
//   quantity: number
//   onQuantityChange: (quantity: number) => void
// }

// const PriceDetails: React.FC<PriceDetailsProps> = ({
//   experience,
//   selectedDate,
//   selectedTime,
//   quantity,
//   onQuantityChange
// }) => {
//   const router = useRouter()

//   const formatPrice = (price: number) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       minimumFractionDigits: 0,
//     }).format(price)
//   }

//   const getMaxQuantity = () => {
//     if (!selectedDate || !selectedTime) return 0
    
//     const slot = experience.slots.find(s => {
//       const slotDate = new Date(s.date)
//       const selectedDateStr = selectedDate.toISOString().split('T')[0]
//       const slotDateStr = slotDate.toISOString().split('T')[0]
      
//       return slotDateStr === selectedDateStr && s.time === selectedTime
//     })
    
//     return slot ? slot.available : 0
//   }

//   const maxQuantity = getMaxQuantity()

//   const basePrice = experience.price * quantity
//   const tax = Math.round(basePrice * 0.17)
//   const total = basePrice + tax

//   const handleConfirm = () => {
//     if (!selectedDate || !selectedTime) {
//       alert('Please select date and time')
//       return
//     }

//     if (quantity > maxQuantity) {
//       alert(`Only ${maxQuantity} slots available for this time`)
//       return
//     }

//     const queryParams = new URLSearchParams({
//       experienceId: experience.id,
//       date: selectedDate.toISOString(),
//       time: selectedTime,
//       quantity: quantity.toString()
//     })

//     router.push(`/checkout?${queryParams.toString()}`)
//   }

//   const handleQuantityChange = (newQuantity: number) => {
//     if (newQuantity < 1) return
//     if (newQuantity > maxQuantity) {
//       alert(`Only ${maxQuantity} slots available`)
//       return
//     }
//     onQuantityChange(newQuantity)
//   }

//   return (
//     <div className="flex flex-col gap-3 w-full h-full bg-[#EFEFEF] p-6 rounded-xl">
//       <div className="flex font-normal text-base justify-between text-[#656565]">
//         <span>Starts at</span>
//         <span className="text-heading">{formatPrice(experience.price)}</span>
//       </div>

//       <div className="flex flex-row justify-between font-normal text-base text-[#656565]">
//         <span>Quantity</span>
//         <div className='flex flex-row gap-[9px] justify-between items-center text-heading'>
//           <button 
//             onClick={() => handleQuantityChange(quantity - 1)}
//             disabled={quantity <= 1}
//             className='border border-[#C9C9C9] h-4 w-4 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'
//           >
//             <Minus size={12} />
//           </button>
//           <span className='text-sm'>{quantity}</span>
//           <button 
//             onClick={() => handleQuantityChange(quantity + 1)}
//             disabled={quantity >= maxQuantity}
//             className='border border-[#C9C9C9] h-4 w-4 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'
//           >
//             <Plus size={12} />
//           </button>
//         </div>
//       </div>

//       {maxQuantity > 0 && (
//         <div className="text-xs text-[#656565]">
//           Maximum {maxQuantity} slot{maxQuantity > 1 ? 's' : ''} available
//         </div>
//       )}

//       <div className="flex justify-between font-normal text-base text-[#656565]">
//         <span>Subtotal</span>
//         <span className="text-heading text-sm">{formatPrice(basePrice)}</span>
//       </div>

//       <div className="flex justify-between font-normal text-base text-[#656565]">
//         <span>Taxes</span>
//         <span className='text-heading font-normal text-sm'>{formatPrice(tax)}</span>
//       </div>

//       <Separator className="bg-[#D9D9D9] h-px"/>

//       <div className="flex justify-between items-center">
//         <span className="font-medium text-xl text-heading">Total</span>
//         <span className="font-medium text-xl text-heading">{formatPrice(total)}</span>
//       </div>

//       <Button 
//         onClick={handleConfirm}
//         disabled={!selectedDate || !selectedTime || maxQuantity === 0}
//         className="bg-yellow hover:bg-yellow/50 text-black mt-3 font-medium rounded-lg h-11 py-3 px-5 w-full text-base disabled:bg-gray-400 disabled:cursor-not-allowed"
//       >
//         {!selectedDate || !selectedTime ? 'Select Date & Time' : 
//          maxQuantity === 0 ? 'No Slots Available' : 'Confirm'}
//       </Button>
//     </div>
//   )
// }

// export default PriceDetails
'use client';

import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { Minus, Plus } from 'lucide-react'
import { Experience } from '@/types'
import { useRouter } from 'next/navigation'
import { format, isSameDay } from 'date-fns'

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

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price)
  }

  const getMaxQuantity = () => {
    if (!selectedDate || !selectedTime) return 0
    
    const slot = experience.slots.find(s => {
      const slotDate = new Date(s.date)
      // Use date-fns for reliable date comparison
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
      alert('Please select date and time')
      return
    }

    if (quantity > maxQuantity) {
      alert(`Only ${maxQuantity} slots available for this time`)
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
        <span className="text-heading">{formatPrice(experience.price)}</span>
      </div>

      <div className="flex flex-row justify-between font-normal text-base text-[#656565]">
        <span>Quantity</span>
        <div className='flex flex-row gap-[9px] justify-between items-center text-heading'>
          <button 
            onClick={() => handleQuantityChange(quantity - 1)}
            disabled={quantity <= 1}
            className='border border-[#C9C9C9] h-4 w-4 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            <Minus size={12} />
          </button>
          <span className='text-sm'>{quantity}</span>
          <button 
            onClick={() => handleQuantityChange(quantity + 1)}
            disabled={quantity >= maxQuantity}
            className='border border-[#C9C9C9] h-4 w-4 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            <Plus size={12} />
          </button>
        </div>
      </div>

      {maxQuantity > 0 && (
        <div className="text-xs text-[#656565]">
          Maximum {maxQuantity} slot{maxQuantity > 1 ? 's' : ''} available
        </div>
      )}

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
        className="bg-yellow hover:bg-yellow/50 text-black mt-3 font-medium rounded-lg h-11 py-3 px-5 w-full text-base disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {!selectedDate || !selectedTime ? 'Select Date & Time' : 
         maxQuantity === 0 ? 'No Slots Available' : 'Confirm'}
      </Button>
    </div>
  )
}

export default PriceDetails