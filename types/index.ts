// // types/index.ts
// export interface Experience {
//   id: string;
//   title: string;
//   description: string;
//   price: number;
//   image: string;
//   location: string;
//   duration: string;
//   about: string;
// }

// export interface ExperienceCardProps {
//   data: Experience;
// }

// export interface Slot {
//   id: string;
//   experienceId: string;
//   date: string;
//   startTime: string;
//   endTime: string;
//   availableSpots: number;
//   maxSpots: number;
// }

// export interface Booking {
//   id: string;
//   experienceId: string;
//   slotId: string;
//   userId: string;
//   userName: string;
//   userEmail: string;
//   userPhone: string;
//   promoCode?: string;
//   discountAmount: number;
//   finalPrice: number;
//   status: 'confirmed' | 'pending' | 'cancelled';
//   createdAt: string;
// }

// export interface PromoCode {
//   code: string;
//   discountType: 'percentage' | 'fixed';
//   discountValue: number;
//   minAmount?: number;
//   maxDiscount?: number;
//   validUntil?: string;
//   isActive: boolean;
// }



export interface Experience {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  location: string;
  duration: string;
  about: string;
  slots: Slot[];
  createdAt: string;
  updatedAt: string;
}

export interface Slot {
  id: string;
  date: string;
  time: string;
  available: number;
  soldOut: boolean;
  experienceId: string;
}

export interface ExperienceCardProps {
  data: Experience;
}

export interface BookingData {
  experienceId: string;
  date: string;
  time: string;
  quantity: number;
  userInfo: {
    name: string;
    email: string;
  };
  totalAmount: number;
}

export interface PromoValidation {
  valid: boolean;
  discount: number;
  discountType: 'PERCENTAGE' | 'FIXED';
  discountValue: number;
  maxDiscount?: number;
  finalAmount: number;
}

export interface Booking {
  id: string;
  experienceId: string;
  date: string;
  time: string;
  quantity: number;
  userInfo: {
    name: string;
    email: string;
  };
  totalAmount: number;
  status: 'CONFIRMED' | 'CANCELLED';
  createdAt: string;
  updatedAt: string;
  experience?: Experience;
}