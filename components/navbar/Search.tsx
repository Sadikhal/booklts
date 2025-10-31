import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export const Search = () => {
  return (
    <div className="flex flex-row gap-4 h-10.5 w-full md:w-auto">
      <Input className='h-full md:w-[340px] w-full bg-[#EDEDED] rounded-sm px-4 py-3 font-normal text-sm border-none text-[#2D2D2D]'/>
      <Button className='bg-yellow rounded-lg h-10.5 md:w-[87px] w-[70px]  px-5 py-3 font-medium text-sm text-heading'>
        Search
      </Button>
    </div>
  )
}
