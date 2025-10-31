// // import Container from "@/components/Container"
// // import CheckoutPriceDetails from "@/components/CheckoutPriceDetails"
// // import { Button } from "@/components/ui/button"
// // import { Checkbox } from "@/components/ui/checkbox"
// // import { Input } from "@/components/ui/input"
// // import { Label } from "@/components/ui/label"
// // import Image from "next/image"
// // import Link from "next/link"


// // const CheckoutPage = () => {
// //   return (
// //     <Container className="flex flex-col h-full pt-[111px]">
// //       <Link href = "/" className="flex flex-row gap-2 items-center px-3 md:px-0">
// //         <Image src = "/leftArrow.svg" alt="arrow" className="object-contain"  width={12}
// //             height={12} />
// //         <span className="font-medium text-sm text-black">
// //          Checkout
// //         </span>
// //       </Link>
    
// //       <div className="w-full flex flex-col lg:flex-row justify-between gap-8 mt-8 px-3 md:px-0">
        
// //       <div
// //         className="lg:w-[65%] w-full bg-[#EFEFEF] rounded-xl p-[20px_24px] flex flex-col gap-4  h-full"
// //         >
// //           <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-4 w-full">
// //             <div className="flex flex-col gap-2">
// //               <Label className="text-[#5B5B5B] text-sm font-normal">Full name</Label>
// //               <Input
// //                 placeholder="Your name"
// //                 className="bg-[#DDDDDD] p-[12px_16px] rounded-md  border-none h-[42px] placeholder:text-[#727272] text-[#161616] text-sm font-normal"
// //               />
// //             </div>
// //             <div className="flex flex-col gap-2">
// //               <Label className="text-[#5B5B5B] text-sm font-normal">Email</Label>
// //               <Input
// //                 placeholder="Your email"
// //                 className="bg-[#DDDDDD] p-[12px_16px] rounded-md  border-none h-[42px] placeholder:text-[#727272] text-[#161616] text-sm font-normal"
// //               />
// //             </div>
// //           </div>

// //           <div className="grid grid-cols-[1fr_auto] gap-4">
// //             <Input
// //               placeholder="Promo code"
// //               className="bg-[#DDDDDD] p-[12px_16px] rounded-md  border-none h-[42px] placeholder:text-[#727272] text-[#161616] text-sm font-normal"
// //             />
// //             <Button className="bg-[#161616] hover:bg-[#161616]/30 px-4 py-3 h-[42px] text-[#F9F9F9] font-medium text-sm rounded-lg w-[71px]">
// //               Apply
// //             </Button>
// //           </div>

// //           <div className="flex flex-row items-center space-x-2 pt-1">
// //             <Checkbox id="terms" className="w-3 h-3 border-[#727171] rounded-[1px] border-[1.5px] text-background bg-transparent checked:bg-[#161616]"/>
// //             <Label htmlFor="terms" className="font-normal text-xs text-[#5B5B5B] ">
// //               I agree to the terms and safety policy
// //             </Label>
// //           </div>

          
// //       </div>
// //       <div className="lg:w-[35%] w-full">
// //           <CheckoutPriceDetails/>
// //         </div>
// //       </div>
// //     </Container>
// //   )
// // }

// // export default CheckoutPage


// // app/checkout/page.tsx
// 'use client';

// import Container from "@/components/Container"
// import CheckoutPriceDetails from "@/components/CheckoutPriceDetails"
// import { Button } from "@/components/ui/button"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import Image from "next/image"
// import Link from "next/link"
// import { useRouter, useSearchParams } from "next/navigation"
// import { useEffect, useState } from "react"
// import { useForm, Controller } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { checkoutSchema, CheckoutFormData } from "@/lib/validation"
// import { experiencesAPI, bookingsAPI, promoAPI } from "@/lib/api"
// import { Experience, PromoValidation } from "@/types"
// import { format } from "date-fns"

// const CheckoutPage = () => {
//   const router = useRouter()
//   const searchParams = useSearchParams()
  
//   const [experience, setExperience] = useState<Experience | null>(null)
//   const [loading, setLoading] = useState(true)
//   const [appliedPromo, setAppliedPromo] = useState<PromoValidation | null>(null)
//   const [promoError, setPromoError] = useState('')
//   const [isApplyingPromo, setIsApplyingPromo] = useState(false)

//   const experienceId = searchParams.get('experienceId')
//   const dateParam = searchParams.get('date')
//   const date = dateParam ? new Date(dateParam) : null
//   const time = searchParams.get('time')
//   const quantity = parseInt(searchParams.get('quantity') || '1')

//   const { register, control, handleSubmit, formState: { errors }, watch, setValue } = useForm<CheckoutFormData>({
//     resolver: zodResolver(checkoutSchema),
//     defaultValues: {
//       agreeToTerms: false
//     }
//   })

//   const basePrice = experience ? experience.price * quantity : 0
//   const tax = Math.round(basePrice * 0.05)
//   const discount = appliedPromo?.discount || 0
//   const total = basePrice + tax - discount

//   useEffect(() => {
//     const fetchExperience = async () => {
//       if (!experienceId) {
//         router.push('/')
//         return
//       }

//       try {
//         const response = await experiencesAPI.getById(experienceId)
       
//           setExperience(response.data.data)
       
          
//       } catch (err) {
//         console.error('Error fetching experience:', err)
//         router.push('/')
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchExperience();
//   }, [experienceId, router])

//   const handleApplyPromo = async () => {
//     const promoCode = watch('promoCode')
//     if (!promoCode) {
//       setPromoError('Please enter a promo code')
//       return
//     }

//     setIsApplyingPromo(true)
//     setPromoError('')

//     try {
//       const response = await promoAPI.validate(promoCode, basePrice)
//       setAppliedPromo(response.data)
//     } catch (err: any) {
//       setPromoError(err.response?.data?.error || 'Invalid promo code')
//       setAppliedPromo(null)
//     } finally {
//       setIsApplyingPromo(false)
//     }
//   }

//   const onSubmit = async (data: CheckoutFormData) => {
//     if (!experience || !date || !time) {
//       alert('Missing required information')
//       return
//     }

//     try {
//       const bookingData = {
//         experienceId: experience.id,
//         date: new Date(date),
//         time,
//         quantity,
//         userInfo: {
//           name: data.name,
//           email: data.email
//         },
//         totalAmount: total
//       }

//       const response = await bookingsAPI.create(bookingData)
//       router.push(`/result?bookingId=${response.data.id}&refId=${response.data.refId}`)
//     } catch (err) {
//       console.error('Booking error:', err)
//       alert('Failed to create booking. Please try again.')
//     }
//   }

//   if (loading) {
//     return (
//       <Container className="flex flex-col h-full pt-[111px]">
//         <div className="animate-pulse bg-gray-200 h-6 w-32 mb-8"></div>
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2 space-y-4">
//             <div className="animate-pulse bg-gray-200 h-12 rounded-md"></div>
//             <div className="animate-pulse bg-gray-200 h-12 rounded-md"></div>
//           </div>
//           <div className="animate-pulse bg-gray-200 h-64 rounded-xl"></div>
//         </div>
//       </Container>
//     )
//   }

//   if (!experience) {
//     return (
//       <Container className="flex flex-col h-full pt-[111px] items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-medium text-heading mb-4">Invalid booking</h2>
//           <Link href="/" className="text-blue-600 hover:underline">
//             Back to Home
//           </Link>
//         </div>
//       </Container>
//     )
//   }

//   return (
//     <Container className="flex flex-col h-full pt-[111px]">
//       <Link href="/" className="flex flex-row gap-2 items-center px-3 md:px-0">
//         <Image src="/leftArrow.svg" alt="arrow" className="object-contain" width={12} height={12} />
//         <span className="font-medium text-sm text-black">Checkout</span>
//       </Link>
    
//       <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col lg:flex-row justify-between gap-8 mt-8 px-3 md:px-0">
//         <div className="lg:w-[65%] w-full bg-[#EFEFEF] rounded-xl p-[20px_24px] flex flex-col gap-4 h-full">
//           <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-4 w-full">
//             <div className="flex flex-col gap-2">
//               <Label htmlFor="name" className="text-[#5B5B5B] text-sm font-normal">Full name</Label>
//               <Input
//                 id="name"
//                 {...register('name')}
//                 placeholder="Your name"
//                 className="bg-[#DDDDDD] p-[12px_16px] rounded-md border-none h-[42px] placeholder:text-[#727272] text-[#161616] text-sm font-normal"
//               />
//               {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
//             </div>
//             <div className="flex flex-col gap-2">
//               <Label htmlFor="email" className="text-[#5B5B5B] text-sm font-normal">Email</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 {...register('email')}
//                 placeholder="Your email"
//                 className="bg-[#DDDDDD] p-[12px_16px] rounded-md border-none h-[42px] placeholder:text-[#727272] text-[#161616] text-sm font-normal"
//               />
//               {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
//             </div>
//           </div>

//           <div className="grid grid-cols-[1fr_auto] gap-4">
//             <div className="flex flex-col gap-2">
//               <Input
//                 {...register('promoCode')}
//                 placeholder="Promo code"
//                 className="bg-[#DDDDDD] p-[12px_16px] rounded-md border-none h-[42px] placeholder:text-[#727272] text-[#161616] text-sm font-normal"
//               />
//               {promoError && <span className="text-red-500 text-xs">{promoError}</span>}
//             </div>
//             <Button 
//               type="button"
//               onClick={handleApplyPromo}
//               disabled={isApplyingPromo}
//               className="bg-[#161616] hover:bg-[#161616]/80 px-4 py-3 h-[42px] text-[#F9F9F9] font-medium text-sm rounded-lg w-[71px] disabled:bg-gray-400"
//             >
//               {isApplyingPromo ? '...' : 'Apply'}
//             </Button>
//           </div>

//           <div className="flex flex-row items-center space-x-2 pt-1">
//             <Controller
//               control={control}
//               name="agreeToTerms"
//               render={({ field }) => (
//                 <Checkbox
//                   id="terms"
//                   checked={!!field.value}
//                   onCheckedChange={(val: boolean) => field.onChange(val)}
//                   className="w-3 h-3 border-[#727171] rounded-[1px] border-[1.5px] text-background bg-transparent checked:bg-[#161616]"
//                 />
//               )}
//             />
//             <Label htmlFor="terms" className="font-normal text-xs text-[#5B5B5B]">
//               I agree to the terms and safety policy
//             </Label>
//           </div>
//           {errors.agreeToTerms && <span className="text-red-500 text-xs">{errors.agreeToTerms.message}</span>}
//         </div>

//         <div className="lg:w-[35%] w-full">
//           <CheckoutPriceDetails
//             experience={experience}
//             date={date ? new Date(date) : null}
//             time={time}
//             quantity={quantity}
//             appliedPromo={appliedPromo}
//             total={total}
//           />
//         </div>
//       </form>
//     </Container>
//   )
// }

// export default CheckoutPage


'use client';

import Container from "@/components/Container"
import CheckoutPriceDetails from "@/components/CheckoutPriceDetails"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { checkoutSchema, CheckoutFormData } from "@/lib/validation"
import { experiencesAPI, bookingsAPI, promoAPI } from "@/lib/api"
import { Experience, PromoValidation } from "@/types"
import { format } from "date-fns"

const CheckoutPage = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const [experience, setExperience] = useState<Experience | null>(null)
  const [loading, setLoading] = useState(true)
  const [appliedPromo, setAppliedPromo] = useState<PromoValidation | null>(null)
  const [promoError, setPromoError] = useState('')
  const [isApplyingPromo, setIsApplyingPromo] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const experienceId = searchParams.get('experienceId')
  const dateParam = searchParams.get('date')
  const date = dateParam ? new Date(dateParam) : null
  const time = searchParams.get('time')
  const quantity = parseInt(searchParams.get('quantity') || '1')

  const { register, control, handleSubmit, formState: { errors }, watch, setValue } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      agreeToTerms: false
    }
  })

  const basePrice = experience ? experience.price * quantity : 0
  const tax = Math.round(basePrice * 0.05)
  const discount = appliedPromo?.discount || 0
  const total = basePrice + tax - discount

  useEffect(() => {
    const fetchExperience = async () => {
      if (!experienceId) {
        router.push('/')
        return
      }

      try {
        const response = await experiencesAPI.getById(experienceId)
        setExperience(response.data.data)
      } catch (err) {
        console.error('Error fetching experience:', err)
        router.push('/')
      } finally {
        setLoading(false)
      }
    }

    fetchExperience()
  }, [experienceId, router])

  const handleApplyPromo = async () => {
    const promoCode = watch('promoCode')
    if (!promoCode) {
      setPromoError('Please enter a promo code')
      return
    }
    setIsApplyingPromo(true)
    setPromoError('')
    try {
      const response = await promoAPI.validate(promoCode, basePrice)
        setAppliedPromo(response.data)
    } catch (err: any) {
      setPromoError(err.response?.data?.error || 'Invalid promo code')
      setAppliedPromo(null)
    } finally {
      setIsApplyingPromo(false)
    }
  }

  const onSubmit = async (data: CheckoutFormData) => {
    if (!experience || !date || !time) {
      alert('Missing required information')
      return
    }

    setIsSubmitting(true)

    try {
      const bookingData = {
        experienceId: experience.id,
        date: date.toISOString(),
        time,
        quantity,
        userInfo: {
          name: data.name,
          email: data.email
        },
        totalAmount: total
      }

      const response = await bookingsAPI.create(bookingData)
      
      if (response.status === 201) {
        router.push(`/result?bookingId=${response.data.id}`)
      } else {
        throw new Error(response.data.error || 'Booking failed')
      }
    } catch (err: any) {
      console.error('Booking error:', err)
      alert(err.response?.data?.error || 'Failed to create booking. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (loading) {
    return (
      <Container className="flex flex-col h-full pt-[111px]">
        <div className="animate-pulse bg-gray-200 h-6 w-32 mb-8"></div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="animate-pulse bg-gray-200 h-12 rounded-md"></div>
            <div className="animate-pulse bg-gray-200 h-12 rounded-md"></div>
          </div>
          <div className="animate-pulse bg-gray-200 h-64 rounded-xl"></div>
        </div>
      </Container>
    )
  }

  if (!experience) {
    return (
      <Container className="flex flex-col h-full pt-[111px] items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-medium text-heading mb-4">Invalid booking</h2>
          <Link href="/" className="text-blue-600 hover:underline">
            Back to Home
          </Link>
        </div>
      </Container>
    )
  }

  return (
    <Container className="flex flex-col h-full pt-[111px]">
      <Link href="/" className="flex flex-row gap-2 items-center px-3 md:px-0">
        <Image src="/leftArrow.svg" alt="arrow" className="object-contain" width={12} height={12} />
        <span className="font-medium text-sm text-black">Checkout</span>
      </Link>
    
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col lg:flex-row justify-between gap-8 mt-8 px-3 md:px-0">
        <div className="lg:w-[65%] w-full bg-[#EFEFEF] rounded-xl p-[20px_24px] flex flex-col gap-4 h-full">
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-4 w-full">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name" className="text-[#5B5B5B] text-sm font-normal">Full name</Label>
              <Input
                id="name"
                {...register('name')}
                placeholder="Your name"
                className="bg-[#DDDDDD] p-[12px_16px] rounded-md border-none h-[42px] placeholder:text-[#727272] text-[#161616] text-sm font-normal"
              />
              {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="text-[#5B5B5B] text-sm font-normal">Email</Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                placeholder="Your email"
                className="bg-[#DDDDDD] p-[12px_16px] rounded-md border-none h-[42px] placeholder:text-[#727272] text-[#161616] text-sm font-normal"
              />
              {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
            </div>
          </div>

          <div className="grid grid-cols-[1fr_auto] gap-4">
            <div className="flex flex-col gap-2">
              <Input
                {...register('promoCode')}
                placeholder="Promo code"
                className="bg-[#DDDDDD] p-[12px_16px] rounded-md border-none h-[42px] placeholder:text-[#727272] text-[#161616] text-sm font-normal"
              />
              {promoError && <span className="text-red-500 text-xs">{promoError}</span>}
            </div>
            <Button 
              type="button"
              onClick={handleApplyPromo}
              disabled={isApplyingPromo}
              className="bg-[#161616] hover:bg-[#161616]/80 px-4 py-3 h-[42px] text-[#F9F9F9] font-medium text-sm rounded-lg w-[71px] disabled:bg-gray-400"
            >
              {isApplyingPromo ? '...' : 'Apply'}
            </Button>
          </div>

          <div className="flex flex-row items-center space-x-2 pt-1">
            <Controller
              control={control}
              name="agreeToTerms"
              render={({ field }) => (
                <Checkbox
                  id="terms"
                  checked={field.value}
                  onCheckedChange={(checked) => field.onChange(checked)}
                  className="w-3 h-3 border-[#727171] rounded-[1px] border-[1.5px] text-background bg-transparent checked:bg-[#161616]"
                />
              )}
            />
            <Label htmlFor="terms" className="font-normal text-xs text-[#5B5B5B]">
              I agree to the terms and safety policy
            </Label>
          </div>
          {errors.agreeToTerms && <span className="text-red-500 text-xs">{errors.agreeToTerms.message}</span>}
        </div>

        <div className="lg:w-[35%] w-full">
          <CheckoutPriceDetails
            experience={experience}
            date={date}
            time={time}
            quantity={quantity}
            appliedPromo={appliedPromo}
            total={total}
          />
        </div>
      </form>
    </Container>
  )
}

export default CheckoutPage