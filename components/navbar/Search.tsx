'use client';

import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useRouter, useSearchParams } from 'next/navigation'

export const Search = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (searchQuery.trim()) {
      const params = new URLSearchParams()
      params.set('search', searchQuery.trim())
      router.push(`/?${params.toString()}`)
    } else {
      router.push('/')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(e)
    }
  }

  return (
    <form onSubmit={handleSearch} className="flex flex-row gap-4 h-10.5 w-full md:w-auto">
      <Input 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Search experiences..."
        className='h-full md:w-[340px] w-full bg-[#EDEDED] rounded-sm px-4 py-3 font-normal text-sm border-none text-[#2D2D2D]'
      />
      <Button 
        type="submit"
        className='bg-yellow rounded-lg h-10.5 md:w-[87px] w-[70px] px-5 py-3 font-medium text-sm text-heading'
      >
        Search
      </Button>
    </form>
  )
}