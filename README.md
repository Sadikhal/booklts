# 🎯 Experience Booking Platform

A modern, responsive experience booking platform built with Next.js, TypeScript, and Tailwind CSS. Users can browse, search, and book various experiences with real-time availability checking.

![Project Screenshot](https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=Experience+Booking+Platform)

## ✨ Features

### 🏠 Home & Navigation
- **Browse Experiences**: Grid layout displaying all available experiences
- **Smart Search**: Real-time search across experience titles, descriptions, locations, and about sections
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Fixed Navigation**: Persistent navbar with search functionality

### 📋 Experience Details
- **Rich Experience Pages**: High-quality images, detailed descriptions, and key information
- **Date Selection**: 7-day availability calendar with sold-out indicators
- **Time Slot Management**: Real-time availability with quantity indicators
- **Interactive Booking**: Dynamic price calculation with quantity selector

### 🛒 Checkout & Booking
- **Secure Checkout Form**: User information collection with validation
- **Promo Code System**: Discount application with real-time validation
- **Price Breakdown**: Transparent pricing with taxes and discounts
- **Booking Confirmation**: Instant booking confirmation with reference IDs

### ⚡ Technical Excellence
- **Real-time Availability**: Live slot management preventing overbooking
- **Form Validation**: Comprehensive form handling with error messages
- **Loading States**: Smooth loading indicators for better UX
- **Error Handling**: Graceful error states and user feedback

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI
- **Icons**: Lucide React
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: React Hooks (useState, useEffect)
- **Navigation**: Next.js Navigation

### Backend
- **Runtime**: Node.js, Typescript
- **Database**: MongoDB with Prisma ORM
- **API**: Next.js API Routes
- **Validation**: Zod schemas

### Development
- **Package Manager**: npm/yarn
- **Deployment**: Vercel (recommended)
- **Environment Variables**: .env.local

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- MongoDB database
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/experience-booking-platform.git
cd experience-booking-platform
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Environment Setup**
Create a `.env.local` file in the root directory:
```env
DATABASE_URL="your_mongodb_connection_string"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

4. **Database Setup**
```bash
# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push
```

5. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

6. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)


## 🎨 Key Components

### Core Pages
- **Home (`/`)**: Experience listing with search
- **Experience Details (`/experience/[id]`)**: Detailed view with booking
- **Checkout (`/checkout`)**: Booking form and payment
- **Result (`/result`)**: Booking confirmation

### Main Components
- **ExperienceCard**: Grid item for experience preview
- **PriceDetails**: Booking summary and quantity selector
- **CheckoutPriceDetails**: Order summary with promotions
- **Search**: Global search functionality
- **Navbar**: Persistent navigation header

## 🔧 API Endpoints

### Experiences
- `GET /api/experiences` - List all experiences
- `GET /api/experiences/[id]` - Get specific experience

### Bookings
- `POST /api/bookings` - Create new booking
- `GET /api/bookings/[id]` - Get booking details

### Promotions
- `POST /api/promo/validate` - Validate promo code

## 📊 Database Schema

### Main Models
- **Experience**: Activities with details and pricing
- **Slot**: Available time slots with capacity
- **Booking**: User reservations
- **PromoCode**: Discount codes and validation

## 🎯 Usage Examples

### Booking Flow
1. **Browse** experiences on the home page
2. **Search** for specific activities using the search bar
3. **Select** an experience to view details
4. **Choose** date and available time slot
5. **Adjust** quantity and confirm pricing
6. **Proceed** to checkout with user details
7. **Apply** promo code (optional)
8. **Complete** booking and receive confirmation

### Search Functionality
- Search from any page redirects to home with results
- Searches across title, description, location, and about sections
- Real-time filtering with result counts

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Variables for Production
```env
DATABASE_URL="your_production_mongodb_url"
NODE_ENV  = production
```

## 📝 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npx tsx lib/seed.ts  # Push data to Db
npm run lint         # Run ESLint
npx prisma studio    # Open database GUI
```


## 👥 Authors

- **Sadikhali p v** - *Initial work* - [YourUsername](https://github.com/Sadikhal)

## 🙏 Acknowledgments

- **Next.js** team for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Shadcn/UI** for the beautiful component library
- **Vercel** for seamless deployment

---

**⭐ Star this repo if you find it helpful!**
