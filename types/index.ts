
// export interface Experience {
//   id: string;
//   title: string;
//   description: string;
//   price: number;
//   image: string;
//   location: string;
//   duration: string;
//   about: string;
//   slots: Slot[];
//   createdAt: string;
//   updatedAt: string;
// }

// export interface Slot {
//   id: string;
//   date: string;
//   time: string;
//   available: number;
//   soldOut: boolean;
//   experienceId: string;
// }

// export interface ExperienceCardProps {
//   data: Experience;
// }

// export interface BookingData {
//   experienceId: string;
//   date: string;
//   time: string;
//   quantity: number;
//   userInfo: {
//     name: string;
//     email: string;
//   };
//   totalAmount: number;
// }

// export interface PromoValidation {
//   valid: boolean;
//   discount: number;
//   discountType: 'PERCENTAGE' | 'FIXED';
//   discountValue: number;
//   maxDiscount?: number;
//   finalAmount: number;
// }

// export interface Booking {
//   id: string;
//   experienceId: string;
//   date: string;
//   time: string;
//   quantity: number;
//   userInfo: {
//     name: string;
//     email: string;
//   };
//   totalAmount: number;
//   status: 'CONFIRMED' | 'CANCELLED';
//   createdAt: string;
//   updatedAt: string;
//   experience?: Experience;
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
  createdAt: Date;
  updatedAt: Date;
}

export interface Slot {
  id: string;
  date: Date; // Changed from string to Date
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
  date: Date; // Changed from string to Date
  time: string;
  quantity: number;
  userInfo: {
    name: string;
    email: string;
  };
  totalAmount: number;
  status: 'CONFIRMED' | 'CANCELLED';
  createdAt: Date; // Changed from string to Date
  updatedAt: Date; // Changed from string to Date
  experience?: Experience;
}