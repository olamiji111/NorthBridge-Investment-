"use client";

import React, { useState } from 'react'
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Search } from '@/components/icons/icons';
import { searchMarketIcons } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from 'lucide-react';


interface searchOpenProps {
  open: boolean;
  setOpen: (b: boolean) => void;
  children: React.ReactNode
}
const SearchPopover = ({ open, setOpen, children }: searchOpenProps) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  }

  return (
    <div className=''>
      <Popover open={open} onOpenChange={setOpen} >
        <PopoverTrigger asChild>
          {children}
        </PopoverTrigger>
        <PopoverContent
          align='end'
          side="bottom"
          sideOffset={10}


          className='flex w-[350px] 
        flex-col gap-4 border-[rgba(135,159,240,0.1)] 
         rounded-3xl 
          border  translate-x-5
          z-9999 px-6 py-6 
          shadow-[0_8px_30px_6px_rgba(9,25,77,0.4),0_4px_12px_0_rgba(9,25,77,0.4)]'>
          <div className='h-full flex flex-col gap-y-6'>
            <div className='flex flex-row items-center gap-x-2 bg-white border-transparent rounded-full py-3 px-2.5 transition-shadow duration-200
            focus-within:shadow-[0_0_6px_3px_#5596ff] 
            
            '
            >
              <Search

                className='text-zinc-500 !h-5 !w-5'

              />
              <input
                type="text"
                name="search"
                value={searchValue}
                onChange={handleSearchChange}
                className='ring-0 outline-none  border-none
               text-black bg-transparent w-full
                placeholder:text-zinc-400 placeholder:text-md 
                text-sm focus:outline-none '
                placeholder='Search'


              />
            </div>
            <div className='flex flex-col gap-y-6 items-start'>
              {searchMarketIcons.map((item, idx) => (
                <Link href={item.href} className='  duration-100  gap-x-8 group transition-colors inline-flex flex-row justify-between w-full items-center' key={idx}>
                  <div className=' flex flex-row gap-x-2 items-center  '>
                    <Image
                      src={item.imgPath}
                      alt={`${item.name}`}
                      width={100}
                      height={100}
                      className='h-8 w-8 object-contain rounded-full'
                    />
                    <span className='text-[17px] text-text-color group-hover:text-blue-500 '> {item.symbol}</span>
                    <span className='text-[17px] text-text-color group-hover:text-blue-500 '> {item.name}</span>
                  </div>
                  <div>
                    <ChevronRight strokeWidth={1.5} size={26} className='text-text-color group-hover:text-blue-500' />
                  </div>


                </Link>

              ))}

            </div>

          </div>
        </PopoverContent>

      </Popover>
    </div>

  )
}

export default SearchPopover;
