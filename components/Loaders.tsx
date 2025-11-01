import React from 'react'
import Container from './Container'

export function HomeLoader() {
  return (
    <Container>
      <div className="pt-34 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 w-full h-full">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="animate-pulse bg-gray-200 h-[312px] rounded-lg"></div>
        ))}
      </div>
    </Container>
  )
}

export function ExperienceLoader() {
  return (
    <Container className="flex flex-col pt-[111px]">
      <div className="animate-pulse bg-gray-200 h-6 w-32 mb-4"></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <div className="animate-pulse bg-gray-200 h-80 rounded-xl"></div>
          <div className="animate-pulse bg-gray-200 h-6 w-48"></div>
          <div className="animate-pulse bg-gray-200 h-4 w-full"></div>
        </div>
        <div className="animate-pulse bg-gray-200 h-64 rounded-xl"></div>
      </div>
    </Container>
  )
}



export function CheckoutLoader() {
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