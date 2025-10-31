// // import Container from '@/components/Container'
// // import PriceDetails from '@/components/PriceDetails'

// // import { Button } from '@/components/ui/button'
// // import Image from 'next/image'
// // import Link from 'next/link'

// // const ExperienceDetails = () => {
// //   return (
// //      <Container className="flex flex-col pt-[111px]">
// //       <Link href = "/" className="flex flex-row gap-2 items-center px-3 md:px-0">
// //         <Image src = "/leftArrow.svg" alt="arrow" className="object-contain"  width={12}
// //             height={12} />
// //         <span className="font-medium text-sm text-black">
// //          Details
// //         </span>
// //       </Link>

// //        <div className="w-full flex flex-col lg:flex-row justify-between gap-9 py-6 px-3 md:px-0">
// //       <div className="flex flex-col w-full lg:w-[66%] gap-5">
// //         <div className="w-full h-[381px] rounded-xl overflow-hidden">
// //           <Image
// //             src="/img1.jpg"
// //             alt="Kayaking"
// //             width={765}
// //             height={381}
// //             className="object-cover w-full h-full"
// //           />
// //         </div>

// //        <div className='flex flex-col gap-4'>
// //         <h2 className="text-2xl font-medium text-heading mt-4">
// //           Kayaking
// //         </h2>

// //         {/* Description */}
// //         <p className="text-desc text-base font-normal">
// //           Curated small-group experience. Certified guide. Safety first with gear included. 
// //           Helmet and Life jackets along with an expert will accompany in kayaking.
// //         </p>
// //       </div>
// //         {/* Choose date */}
// //         <div className="flex flex-col mt-2 gap-3">
// //           <h3 className="text-heading text-lg font-medium">Choose date</h3>
// //           <div className="flex gap-4 flex-row flex-wrap items-center">
// //             <Button className="bg-yellow hover:bg-yellow/30 text-heading font-normal px-3 py-2 text-sm rounded-sm h-8.5 w-[69px]">
// //               Oct 22
// //             </Button>
// //             <Button className="bg-transparent text-textColor font-normal px-3 py-2 text-sm rounded-sm h-8.5 w-[69px] border-[#BDBDBD] border-[0.6px]">
// //               Oct 23
// //             </Button>
// //             <Button className="bg-transparent text-textColor font-normal px-3 py-2 text-sm rounded-sm h-8.5 w-[69px] border-[#BDBDBD] border-[0.6px]">
// //               Oct 24
// //             </Button>
// //             <Button className="bg-transparent text-textColor font-normal px-3 py-2 text-sm rounded-sm h-8.5 w-[69px] border-[#BDBDBD] border-[0.6px]">
// //               Oct 25
// //             </Button>
// //             <Button className="bg-transparent text-textColor font-normal px-3 py-2 text-sm rounded-sm h-8.5 w-[69px] border-[#BDBDBD] border-[0.6px]">
// //               Oct 26
// //             </Button>
// //           </div>
// //         </div>

// //         {/* Choose time */}
// //         <div className="flex flex-col gap-3 mt-1">
// //           <h3 className="text-heading text-lg font-medium ">Choose time</h3>
// //           <div className="flex flex-wrap gap-4">
// //             <Button className="bg-transparent text-textColor font-normal px-3 py-2 text-sm rounded-sm h-8.5 w-[117px] border-[#BDBDBD] border-[0.6px]">
// //               07:00 am <span className="text-orange ml-1 text-[10px] font-medium">4 left</span>
// //             </Button>
// //             <Button className="bg-yellow hover:bg-yellow/30 text-heading font-normal px-3 py-2 text-sm rounded-sm h-8.5 w-[117px]">
// //               9:00 am <span className="text-orange ml-1 text-[10px] font-medium">2 left</span>
// //             </Button>
// //             <Button className="bg-transparent text-textColor font-normal px-3 py-2 text-sm rounded-sm h-8.5 w-[117px] border-[#BDBDBD] border-[0.6px]">
// //               11:00 am <span className="text-orange ml-1 text-[10px] font-medium">5 left</span>
// //             </Button>
// //             <Button disabled className="bg-[#CCCCCC] text-textColor font-normal px-3 py-2 text-sm rounded-sm h-8.5 w-[117px] border-[#BDBDBD] border-[0.6px]">
// //               1:00 pm <span className="text-[#6A6A6A] ml-1 text-[10px] font-medium">Sold out</span>
// //             </Button>
// //           </div>
// //           <p className="text-textColor text-xs font-normal mt-1">
// //             All times are in IST (GMT +5:30)
// //           </p>
// //         </div>

       
// //         <div className="flex flex-col gap-3">
// //           <h3 className="text-heading text-lg font-medium ">About</h3>
// //           <div className="bg-[#EEEEEE] py-2 px-3 rounded-sm text-textColor text-xs font-normal w-full items-center flex">
// //             Scenic routes, trained guides, and safety briefing. Minimum age 10.
// //           </div>
// //         </div>
// //       </div>

// //       {/* RIGHT SIDEBAR */}
// //       <div className="lg:w-[34%] w-full h-full">
// //         <PriceDetails />
// //       </div>
// //       </div>
// //     </Container>
// //   )
// // }

// // export default ExperienceDetails


// 'use client';

// import Container from '@/components/Container'
// import PriceDetails from '@/components/PriceDetails'
// import { Button } from '@/components/ui/button'
// import Image from 'next/image'
// import Link from 'next/link'
// import { useParams } from 'next/navigation'
// import { useEffect, useState } from 'react'
// import { experiencesAPI } from '@/lib/api'
// import { Experience } from '@/types'
// import { format, addDays, isAfter } from 'date-fns'

// const ExperienceDetails = () => {
//   const params = useParams()
//   const id = params.id as string
  
//   const [experience, setExperience] = useState<Experience | null>(null)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null)
//   const [selectedTime, setSelectedTime] = useState<string | null>(null)
//   const [quantity, setQuantity] = useState(1)

//   useEffect(() => {
//     const fetchExperience = async () => {
//       try {
//         const response = await experiencesAPI.getById(id)
// setExperience(response.data.data)
// console.log('Fetched experience:', response.data)
// // Set default selected date to first available date
// if (response.data.data && response.data.data.slots && response.data.data.slots.length > 0) {
//   const firstAvailableSlot = response.data.data.slots
//     .filter(slot => !slot.soldOut && slot.available > 0)
//     .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0]

//   if (firstAvailableSlot) {
//     setSelectedDate(new Date(firstAvailableSlot.date))
//     setSelectedTime(firstAvailableSlot.time)
//   }
// }
//       } catch (err) {
//         setError('Failed to fetch experience details')
//         console.log('Error fetching experience:', err)
//       } finally {
//         setLoading(false)
//       }
//     }

//     if (id) {
//       fetchExperience()
//     }
//   }, [id])

//   // Generate next 7 days
//   const dates = Array.from({ length: 7 }, (_, i) => addDays(new Date(), i))

//   // Get available slots for selected date
//   const availableSlots = experience?.slots.filter(slot => 
//     format(new Date(slot.date), 'yyyy-MM-dd') === format(selectedDate || new Date(), 'yyyy-MM-dd') &&
//     !slot.soldOut &&
//     slot.available > 0
//   ) || []

//   if (loading) {
//     return (
//       <Container className="flex flex-col pt-[111px]">
//         <div className="animate-pulse bg-gray-200 h-6 w-32 mb-4"></div>
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2 space-y-4">
//             <div className="animate-pulse bg-gray-200 h-80 rounded-xl"></div>
//             <div className="animate-pulse bg-gray-200 h-6 w-48"></div>
//             <div className="animate-pulse bg-gray-200 h-4 w-full"></div>
//           </div>
//           <div className="animate-pulse bg-gray-200 h-64 rounded-xl"></div>
//         </div>
//       </Container>
//     )
//   }

//   if (error || !experience) {
//     return (
//       <Container className="flex flex-col pt-[111px] items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-medium text-heading mb-4">Experience not found</h2>
//           <Link href="/" className="text-blue-600 hover:underline">
//             Back to Home
//           </Link>
//         </div>
//       </Container>
//     )
//   }

//   return (
//     <Container className="flex flex-col pt-[111px]">
//       <Link href="/" className="flex flex-row gap-2 items-center px-3 md:px-0">
//         <Image src="/leftArrow.svg" alt="arrow" className="object-contain" width={12} height={12} />
//         <span className="font-medium text-sm text-black">Details</span>
//       </Link>

//       <div className="w-full flex flex-col lg:flex-row justify-between gap-9 py-6 px-3 md:px-0">
//         <div className="flex flex-col w-full lg:w-[66%] gap-5">
//           <div className="w-full h-[381px] rounded-xl overflow-hidden">
//             <Image
//               src={experience.image}
//               alt={experience.title}
//               width={765}
//               height={381}
//               className="object-cover w-full h-full"
//             />
//           </div>

//           <div className='flex flex-col gap-4'>
//             <h2 className="text-2xl font-medium text-heading mt-4 capitalize">
//               {experience.title}
//             </h2>

//             <p className="text-desc text-base font-normal">
//               {experience.description}
//             </p>
//           </div>

//           {/* Choose date */}
//           <div className="flex flex-col mt-2 gap-3">
//             <h3 className="text-heading text-lg font-medium">Choose date</h3>
//             <div className="flex gap-4 flex-row flex-wrap items-center">
//               {dates.map((date) => {
//                 const dateStr = format(date, 'yyyy-MM-dd');
//                 const isAvailable = experience.slots.some(slot => 
//                   format(new Date(slot.date), 'yyyy-MM-dd') === dateStr && 
//                   !slot.soldOut
//                 );
                
//                 return (
//                   <Button
//                     key={dateStr}
//                     onClick={() => isAvailable && setSelectedDate(date)}
//                     disabled={!isAvailable}
//                     className={`px-3 py-2 text-sm rounded-sm h-8.5 w-[69px] ${
//                       selectedDate && format(selectedDate, 'yyyy-MM-dd') === dateStr
//                         ? 'bg-yellow hover:bg-yellow text-heading'
//                         : !isAvailable
//                         ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
//                         : 'bg-transparent text-textColor border-[#BDBDBD] border-[0.6px] hover:bg-gray-50'
//                     }`}
//                   >
//                     {format(date, 'MMM dd')}
//                   </Button>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Choose time */}
//           {selectedDate && (
//             <div className="flex flex-col gap-3 mt-1">
//               <h3 className="text-heading text-lg font-medium">Choose time</h3>
//               <div className="flex flex-wrap gap-4">
//                 {availableSlots.map((slot) => (
//                   <Button
//                     key={slot.time}
//                     onClick={() => setSelectedTime(slot.time)}
//                     className={`px-3 py-2 text-sm rounded-sm h-8.5 w-[117px] ${
//                       selectedTime === slot.time
//                         ? 'bg-yellow hover:bg-yellow text-heading'
//                         : 'bg-transparent text-textColor border-[#BDBDBD] border-[0.6px]'
//                     }`}
//                   >
//                     {slot.time} <span className="text-orange ml-1 text-[10px] font-medium">{slot.available} left</span>
//                   </Button>
//                 ))}
//                 {availableSlots.length === 0 && (
//                   <p className="text-textColor text-sm">No available slots for this date</p>
//                 )}
//               </div>
//               <p className="text-textColor text-xs font-normal mt-1">
//                 All times are in IST (GMT +5:30)
//               </p>
//             </div>
//           )}

//           <div className="flex flex-col gap-3">
//             <h3 className="text-heading text-lg font-medium">About</h3>
//             <div className="bg-[#EEEEEE] py-2 px-3 rounded-sm text-textColor text-xs font-normal w-full items-center flex">
//               {experience.about}
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDEBAR */}
//         <div className="lg:w-[34%] w-full h-full">
//           <PriceDetails 
//             experience={experience}
//             selectedDate={selectedDate}
//             selectedTime={selectedTime}
//             quantity={quantity}
//             onQuantityChange={setQuantity}
//           />
//         </div>
//       </div>
//     </Container>
//   )
// }

// export default ExperienceDetails




// 'use client';

// import Container from '@/components/Container'
// import PriceDetails from '@/components/PriceDetails'
// import { Button } from '@/components/ui/button'
// import Image from 'next/image'
// import Link from 'next/link'
// import { useParams } from 'next/navigation'
// import { useEffect, useState } from 'react'
// import { experiencesAPI } from '@/lib/api'
// import { Experience } from '@/types'
// import { format, addDays } from 'date-fns'
// import { ExperienceLoader } from '@/components/Loaders';

// const ExperienceDetails = () => {
//   const params = useParams()
//   const id = params.id as string
  
//   const [experience, setExperience] = useState<Experience | null>(null)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null)
//   const [selectedTime, setSelectedTime] = useState<string | null>(null)
//   const [quantity, setQuantity] = useState(1)



//   useEffect(() => {
//     const fetchExperience = async () => {
//       try {
//         const response = await experiencesAPI.getById(id)
//         setExperience(response.data.data)
        
//         if (response.data.data && response.data.data.slots && response.data.data.slots.length > 0) {
//           const firstAvailableSlot = response.data.data.slots
//             .filter(slot => !slot.soldOut && slot.available > 0)
//             .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0]

//           if (firstAvailableSlot) {
//             setSelectedDate(new Date(firstAvailableSlot.date))
//             setSelectedTime(firstAvailableSlot.time)
//           }
//         }
//       } catch (err) {
//         setError('Failed to fetch experience details')
//         console.log('Error fetching experience:', err)
//       } finally {
//         setLoading(false)
//       }
//     }

//     if (id) {
//       fetchExperience()
//     }
//   }, [id])

//   const dates = Array.from({ length: 7 }, (_, i) => addDays(new Date(), i))

//   const availableSlots = experience?.slots.filter(slot => {
//     const slotDate = new Date(slot.date)
//     const selectedDateFormatted = selectedDate ? format(selectedDate, 'yyyy-MM-dd') : null
//     const slotDateFormatted = format(slotDate, 'yyyy-MM-dd')
    
//     return selectedDateFormatted === slotDateFormatted && 
//            !slot.soldOut && 
//            slot.available > 0
//   }) || []


//   const hasAvailableSlots = (date: Date) => {
//     const dateStr = format(date, 'yyyy-MM-dd')
//     return experience?.slots.some(slot => {
//       const slotDateStr = format(new Date(slot.date), 'yyyy-MM-dd')
//       return slotDateStr === dateStr && !slot.soldOut && slot.available > 0
//     }) || false
//   }

//   const getAvailableTimes = () => {
//     if (!experience || !selectedDate) return []
//     const dateStr = format(selectedDate, 'yyyy-MM-dd')
//     return experience.slots.filter(slot => {
//       const slotDateStr = format(new Date(slot.date), 'yyyy-MM-dd')
//       return slotDateStr === dateStr && !slot.soldOut && slot.available > 0
//     })
//   }

//   const handleDateSelect = (date: Date) => {
//     setSelectedDate(date)
//     const times = getAvailableTimes()
//     if (times.length > 0) {
//       setSelectedTime(times[0].time)
//     } else {
//       setSelectedTime(null)
//     }
//   }


//   if (loading) {
//     return (
//       <ExperienceLoader/>
//     )
//   }

//   if (error || !experience) {
//     return (
//       <Container className="flex flex-col pt-[111px] items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-medium text-heading mb-4">Experience not found</h2>
//           <Link href="/" className="text-[#6b5e14] hover:underline">
//             Back to Home
//           </Link>
//         </div>
//       </Container>
//     )
//   }

//   return (
//     <Container className="flex flex-col pt-[111px]">
//       <Link href="/" className="flex flex-row gap-2 items-center px-3 md:px-0">
//         <Image src="/leftArrow.svg" alt="arrow" className="object-contain" width={12} height={12} />
//         <span className="font-medium text-sm text-black">Details</span>
//       </Link>

//       <div className="w-full flex flex-col lg:flex-row justify-between gap-9 py-6 px-3 md:px-0">
//         <div className="flex flex-col w-full lg:w-[66%] gap-5">
//           <div className="w-full h-[381px] rounded-xl overflow-hidden">
//             <Image
//               src={experience.image}
//               alt={experience.title}
//               width={765}
//               height={381}
//               className="object-cover w-full h-full"
//             />
//           </div>

//           <div className='flex flex-col gap-4'>
//             <h2 className="text-2xl font-medium text-heading mt-4 capitalize">
//               {experience.title}
//             </h2>

//             <p className="text-desc text-base font-normal">
//               {experience.description}
//             </p>
//           </div>

//           <div className="flex flex-col mt-2 gap-3">
//             <h3 className="text-heading text-lg font-medium">Choose date</h3>
//             <div className="flex gap-4 flex-row flex-wrap items-center">
//               {dates.map((date) => {
//                 const dateStr = format(date, 'yyyy-MM-dd')
//                 const isAvailable = hasAvailableSlots(date)
//                 const isSelected = selectedDate && format(selectedDate, 'yyyy-MM-dd') === dateStr
                
//                 return (
//                   <Button
//                     key={dateStr}
//                     onClick={() => isAvailable && handleDateSelect(date)}
//                     disabled={!isAvailable}
//                     className={`px-3 py-2 text-sm rounded-sm h-8.5 w-[69px] ${
//                       isSelected
//                         ? 'bg-yellow hover:bg-yellow/80 text-heading'
//                         : !isAvailable
//                         ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
//                         : 'bg-transparent text-textColor border-[#BDBDBD] border-[0.6px] hover:bg-gray-50'
//                     }`}
//                   >
//                     {format(date, 'MMM dd')}
//                   </Button>
//                 )
//               })}
//             </div>
//           </div>

//           {/* Choose time */}
//           {selectedDate && (
//             <div className="flex flex-col gap-3 mt-1">
//               <h3 className="text-heading text-lg font-medium">Choose time</h3>
//               <div className="flex flex-wrap gap-4">
//                 {getAvailableTimes().map((slot) => (
//                   <Button
//                     key={slot.time}
//                     onClick={() => setSelectedTime(slot.time)}
//                     className={`px-3 py-2 text-sm rounded-sm h-8.5 w-[117px] ${
//                       selectedTime === slot.time
//                         ? 'bg-yellow hover:bg-yellow/80 text-heading'
//                         : 'bg-transparent text-textColor border-[#BDBDBD] border-[0.6px] hover:bg-gray-50'
//                     }`}
//                   >
//                     {slot.time} 
//                     <span className="text-orange ml-1 text-[10px] font-medium">
//                       {slot.available} left
//                     </span>
//                   </Button>
//                 ))}
//                 {getAvailableTimes().length === 0 && (
//                   <p className="text-textColor text-sm">No available slots for this date</p>
//                 )}
//               </div>
//               <p className="text-textColor text-xs font-normal mt-1">
//                 All times are in IST (GMT +5:30)
//               </p>
//             </div>
//           )}

//           <div className="flex flex-col gap-3">
//             <h3 className="text-heading text-lg font-medium">About</h3>
//             <div className="bg-[#EEEEEE] py-2 px-3 rounded-sm text-textColor text-xs font-normal w-full items-center flex">
//               {experience.about}
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDEBAR */}
//         <div className="lg:w-[34%] w-full h-full">
//           <PriceDetails 
//             experience={experience}
//             selectedDate={selectedDate}
//             selectedTime={selectedTime}
//             quantity={quantity}
//             onQuantityChange={setQuantity}
//           />
//         </div>
//       </div>
//     </Container>
//   )
// }

// export default ExperienceDetails


// 'use client';

// import Container from '@/components/Container'
// import PriceDetails from '@/components/PriceDetails'
// import { Button } from '@/components/ui/button'
// import Image from 'next/image'
// import Link from 'next/link'
// import { useParams } from 'next/navigation'
// import { useEffect, useState } from 'react'
// import { experiencesAPI } from '@/lib/api'
// import { Experience } from '@/types'
// import { format, addDays, isToday } from 'date-fns'
// import { ExperienceLoader } from '@/components/Loaders';

// const ExperienceDetails = () => {
//   const params = useParams()
//   const id = params.id as string
  
//   const [experience, setExperience] = useState<Experience | null>(null)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null)
//   const [selectedTime, setSelectedTime] = useState<string | null>(null)
//   const [quantity, setQuantity] = useState(1)

//   useEffect(() => {
//     const fetchExperience = async () => {
//       try {
//         const response = await experiencesAPI.getById(id)
//         setExperience(response.data.data)
        
//         if (response.data.data && response.data.data.slots && response.data.data.slots.length > 0) {
//           const firstAvailableSlot = response.data.data.slots
//             .filter(slot => !slot.soldOut && slot.available > 0)
//             .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0]

//           if (firstAvailableSlot) {
//             setSelectedDate(new Date(firstAvailableSlot.date))
//             setSelectedTime(firstAvailableSlot.time)
//           }
//         }
//       } catch (err) {
//         setError('Failed to fetch experience details')
//         console.log('Error fetching experience:', err)
//       } finally {
//         setLoading(false)
//       }
//     }

//     if (id) {
//       fetchExperience()
//     }
//   }, [id])

//   const dates = Array.from({ length: 7 }, (_, i) => addDays(new Date(), i))

//   const getAvailableSlotsForDate = (date: Date) => {
//     const dateStr = format(date, 'yyyy-MM-dd')
//     return experience?.slots.filter(slot => {
//       const slotDateStr = format(new Date(slot.date), 'yyyy-MM-dd')
//       return slotDateStr === dateStr && !slot.soldOut && slot.available > 0
//     }) || []
//   }

//   const hasAvailableSlots = (date: Date) => {
//     return getAvailableSlotsForDate(date).length > 0
//   }

//   const isDateFullyBooked = (date: Date) => {
//     const dateStr = format(date, 'yyyy-MM-dd')
//     const slotsForDate = experience?.slots.filter(slot => {
//       const slotDateStr = format(new Date(slot.date), 'yyyy-MM-dd')
//       return slotDateStr === dateStr
//     }) || []
    
//     return slotsForDate.length > 0 && slotsForDate.every(slot => slot.soldOut)
//   }

//   const handleDateSelect = (date: Date) => {
//     setSelectedDate(date)
//     const availableSlots = getAvailableSlotsForDate(date)
//     if (availableSlots.length > 0) {
//       setSelectedTime(availableSlots[0].time)
//     } else {
//       setSelectedTime(null)
//     }
//   }

//   const handleTimeSelect = (time: string) => {
//     setSelectedTime(time)
//   }

//   if (loading) {
//     return <ExperienceLoader/>
//   }

//   if (error || !experience) {
//     return (
//       <Container className="flex flex-col pt-[111px] items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-medium text-heading mb-4">Experience not found</h2>
//           <Link href="/" className="text-[#6b5e14] hover:underline">
//             Back to Home
//           </Link>
//         </div>
//       </Container>
//     )
//   }

//   return (
//     <Container className="flex flex-col pt-[111px]">
//       <Link href="/" className="flex flex-row gap-2 items-center px-3 md:px-0">
//         <Image src="/leftArrow.svg" alt="arrow" className="object-contain" width={12} height={12} />
//         <span className="font-medium text-sm text-black">Details</span>
//       </Link>

//       <div className="w-full flex flex-col lg:flex-row justify-between gap-9 py-6 px-3 md:px-0">
//         <div className="flex flex-col w-full lg:w-[66%] gap-5">
//           <div className="w-full h-[381px] rounded-xl overflow-hidden">
//             <Image
//               src={experience.image}
//               alt={experience.title}
//               width={765}
//               height={381}
//               className="object-cover w-full h-full"
//             />
//           </div>

//           <div className='flex flex-col gap-4'>
//             <h2 className="text-2xl font-medium text-heading mt-4 capitalize">
//               {experience.title}
//             </h2>

//             <p className="text-desc text-base font-normal">
//               {experience.description}
//             </p>
//           </div>

//           <div className="flex flex-col mt-2 gap-3">
//             <h3 className="text-heading text-lg font-medium">Choose date</h3>
//             <div className="flex gap-4 flex-row flex-wrap items-center">
//               {dates.map((date) => {
//                 const dateStr = format(date, 'yyyy-MM-dd')
//                 const isAvailable = hasAvailableSlots(date)
//                 const isFullyBooked = isDateFullyBooked(date)
//                 const isSelected = selectedDate && format(selectedDate, 'yyyy-MM-dd') === dateStr
//                 const availableSlots = getAvailableSlotsForDate(date)
                
//                 return (
//                   <div key={dateStr} className="relative">
//                     <Button
//                       onClick={() => isAvailable && handleDateSelect(date)}
//                       disabled={!isAvailable && !isFullyBooked}
//                       className={`px-3 py-2 text-sm rounded-sm h-8.5 w-[69px] relative ${
//                         isSelected
//                           ? 'bg-yellow hover:bg-yellow/80 text-heading'
//                           : !isAvailable && !isFullyBooked
//                           ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
//                           : isFullyBooked
//                           ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
//                           : 'bg-transparent text-textColor border-[#BDBDBD] border-[0.6px] hover:bg-gray-50'
//                       }`}
//                     >
//                       {format(date, 'MMM dd')}
//                     </Button>
//                     {isFullyBooked && (
//                       <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] px-1 py-0.5 rounded rotate-12">
//                         Sold Out
//                       </div>
//                     )}
//                   </div>
//                 )
//               })}
//             </div>
//           </div>

//           {selectedDate && (
//             <div className="flex flex-col gap-3 mt-1">
//               <h3 className="text-heading text-lg font-medium">Choose time</h3>
//               <div className="flex flex-wrap gap-4">
//                 {experience.slots
//                   .filter(slot => {
//                     const slotDateStr = format(new Date(slot.date), 'yyyy-MM-dd')
//                     const selectedDateStr = format(selectedDate, 'yyyy-MM-dd')
//                     return slotDateStr === selectedDateStr
//                   })
//                   .sort((a, b) => a.time.localeCompare(b.time))
//                   .map((slot) => (
//                     <div key={slot.time} className="relative">
//                       <Button
//                         onClick={() => !slot.soldOut && handleTimeSelect(slot.time)}
//                         disabled={slot.soldOut}
//                         className={`px-3 py-2 text-sm rounded-sm h-8.5 w-[117px] relative ${
//                           selectedTime === slot.time && !slot.soldOut
//                             ? 'bg-yellow hover:bg-yellow/80 text-heading'
//                             : slot.soldOut
//                             ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
//                             : 'bg-transparent text-textColor border-[#BDBDBD] border-[0.6px] hover:bg-gray-50'
//                         }`}
//                       >
//                         {slot.time}
//                         {!slot.soldOut && (
//                           <span className="text-orange ml-1 text-[10px] font-medium">
//                             {slot.available} left
//                           </span>
//                         )}
//                       </Button>
//                       {slot.soldOut && (
//                         <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] px-1 py-0.5 rounded rotate-12">
//                           Sold Out
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 {getAvailableSlotsForDate(selectedDate).length === 0 && (
//                   <p className="text-textColor text-sm">No available slots for this date</p>
//                 )}
//               </div>
//               <p className="text-textColor text-xs font-normal mt-1">
//                 All times are in IST (GMT +5:30)
//               </p>
//             </div>
//           )}

//           <div className="flex flex-col gap-3">
//             <h3 className="text-heading text-lg font-medium">About</h3>
//             <div className="bg-[#EEEEEE] py-2 px-3 rounded-sm text-textColor text-xs font-normal w-full items-center flex">
//               {experience.about}
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDEBAR */}
//         <div className="lg:w-[34%] w-full h-full">
//           <PriceDetails 
//             experience={experience}
//             selectedDate={selectedDate}
//             selectedTime={selectedTime}
//             quantity={quantity}
//             onQuantityChange={setQuantity}
//           />
//         </div>
//       </div>
//     </Container>
//   )
// }

// export default ExperienceDetails


'use client';

import Container from '@/components/Container'
import PriceDetails from '@/components/PriceDetails'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { experiencesAPI } from '@/lib/api'
import { Experience } from '@/types'
import { format, addDays, isToday, isSameDay } from 'date-fns'
import { ExperienceLoader } from '@/components/Loaders';

const ExperienceDetails = () => {
  const params = useParams()
  const id = params.id as string
  
  const [experience, setExperience] = useState<Experience | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await experiencesAPI.getById(id)
        const experienceData = response.data.data
        setExperience(experienceData)
        
        if (experienceData && experienceData.slots && experienceData.slots.length > 0) {
          // Find first available slot more reliably
          const firstAvailableSlot = experienceData.slots
            .filter(slot => !slot.soldOut && slot.available > 0)
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0]

          if (firstAvailableSlot) {
            setSelectedDate(new Date(firstAvailableSlot.date))
            setSelectedTime(firstAvailableSlot.time)
          } else {
            // If no available slots, still set the first date for display
            const firstSlot = experienceData.slots.sort((a, b) => 
              new Date(a.date).getTime() - new Date(b.date).getTime()
            )[0]
            if (firstSlot) {
              setSelectedDate(new Date(firstSlot.date))
              // Don't set time if all slots are sold out
              setSelectedTime(null)
            }
          }
        }
      } catch (err) {
        setError('Failed to fetch experience details')
        console.log('Error fetching experience:', err)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchExperience()
    }
  }, [id])

  const dates = Array.from({ length: 7 }, (_, i) => addDays(new Date(), i))

  const getAvailableSlotsForDate = (date: Date) => {
    if (!experience?.slots) return []
    
    return experience.slots.filter(slot => {
      const slotDate = new Date(slot.date)
      return isSameDay(slotDate, date) && !slot.soldOut && slot.available > 0
    }) || []
  }

  const hasAvailableSlots = (date: Date) => {
    return getAvailableSlotsForDate(date).length > 0
  }

  const isDateFullyBooked = (date: Date) => {
    if (!experience?.slots) return false
    
    const slotsForDate = experience.slots.filter(slot => {
      const slotDate = new Date(slot.date)
      return isSameDay(slotDate, date)
    })
    
    return slotsForDate.length > 0 && slotsForDate.every(slot => slot.soldOut || slot.available === 0)
  }

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
    const availableSlots = getAvailableSlotsForDate(date)
    if (availableSlots.length > 0) {
      setSelectedTime(availableSlots[0].time)
    } else {
      setSelectedTime(null)
    }
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
  }

  // Reset quantity when date or time changes
  useEffect(() => {
    if (selectedDate && selectedTime) {
      setQuantity(1)
    }
  }, [selectedDate, selectedTime])

  if (loading) {
    return <ExperienceLoader/>
  }

  if (error || !experience) {
    return (
      <Container className="flex flex-col pt-[111px] items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-medium text-heading mb-4">Experience not found</h2>
          <Link href="/" className="text-[#6b5e14] hover:underline">
            Back to Home
          </Link>
        </div>
      </Container>
    )
  }

  return (
    <Container className="flex flex-col pt-[111px]">
      <Link href="/" className="flex flex-row gap-2 items-center px-3 md:px-0">
        <Image src="/leftArrow.svg" alt="arrow" className="object-contain" width={12} height={12} />
        <span className="font-medium text-sm text-black">Details</span>
      </Link>

      <div className="w-full flex flex-col lg:flex-row justify-between gap-9 py-6 px-3 md:px-0">
        <div className="flex flex-col w-full lg:w-[66%] gap-5">
          <div className="w-full h-[381px] rounded-xl overflow-hidden">
            <Image
              src={experience.image}
              alt={experience.title}
              width={765}
              height={381}
              className="object-cover w-full h-full"
            />
          </div>

          <div className='flex flex-col gap-4'>
            <h2 className="text-2xl font-medium text-heading mt-4 capitalize">
              {experience.title}
            </h2>

            <p className="text-desc text-base font-normal">
              {experience.description}
            </p>
          </div>

          <div className="flex flex-col mt-2 gap-3">
            <h3 className="text-heading text-lg font-medium">Choose date</h3>
            <div className="flex gap-4 flex-row flex-wrap items-center">
              {dates.map((date) => {
                const isAvailable = hasAvailableSlots(date)
                const isFullyBooked = isDateFullyBooked(date)
                const isSelected = selectedDate && isSameDay(selectedDate, date)
                const availableSlots = getAvailableSlotsForDate(date)
                
                return (
                  <div key={date.toString()} className="relative">
                    <Button
                      onClick={() => isAvailable && handleDateSelect(date)}
                      disabled={!isAvailable && !isFullyBooked}
                      className={`px-3 py-2 text-sm rounded-sm h-8.5 w-[69px] relative ${
                        isSelected
                          ? 'bg-yellow hover:bg-yellow/80 text-heading'
                          : !isAvailable && !isFullyBooked
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          : isFullyBooked
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          : 'bg-transparent text-textColor border-[#BDBDBD] border-[0.6px] hover:bg-gray-50'
                      }`}
                    >
                      {format(date, 'MMM dd')}
                    </Button>
                    {isFullyBooked && (
                      <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] px-1 py-0.5 rounded rotate-12">
                        Sold Out
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {selectedDate && (
            <div className="flex flex-col gap-3 mt-1">
              <h3 className="text-heading text-lg font-medium">Choose time</h3>
              <div className="flex flex-wrap gap-4">
                {experience.slots
                  .filter(slot => {
                    const slotDate = new Date(slot.date)
                    return isSameDay(slotDate, selectedDate)
                  })
                  .sort((a, b) => a.time.localeCompare(b.time))
                  .map((slot) => (
                    <div key={slot.time} className="relative">
                      <Button
                        onClick={() => !slot.soldOut && slot.available > 0 && handleTimeSelect(slot.time)}
                        disabled={slot.soldOut || slot.available === 0}
                        className={`px-3 py-2 text-sm rounded-sm h-8.5 w-[117px] relative ${
                          selectedTime === slot.time && !slot.soldOut && slot.available > 0
                            ? 'bg-yellow hover:bg-yellow/80 text-heading'
                            : slot.soldOut || slot.available === 0
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-transparent text-textColor border-[#BDBDBD] border-[0.6px] hover:bg-gray-50'
                        }`}
                      >
                        {slot.time}
                        {!slot.soldOut && slot.available > 0 && (
                          <span className="text-orange ml-1 text-[10px] font-medium">
                            {slot.available} left
                          </span>
                        )}
                      </Button>
                      {(slot.soldOut || slot.available === 0) && (
                        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] px-1 py-0.5 rounded rotate-12">
                          Sold Out
                        </div>
                      )}
                    </div>
                  ))}
                {getAvailableSlotsForDate(selectedDate).length === 0 && (
                  <p className="text-textColor text-sm">No available slots for this date</p>
                )}
              </div>
              <p className="text-textColor text-xs font-normal mt-1">
                All times are in IST (GMT +5:30)
              </p>
            </div>
          )}

          <div className="flex flex-col gap-3">
            <h3 className="text-heading text-lg font-medium">About</h3>
            <div className="bg-[#EEEEEE] py-2 px-3 rounded-sm text-textColor text-xs font-normal w-full items-center flex">
              {experience.about}
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="lg:w-[34%] w-full h-full">
          <PriceDetails 
            experience={experience}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            quantity={quantity}
            onQuantityChange={setQuantity}
          />
        </div>
      </div>
    </Container>
  )
}

export default ExperienceDetails