"use client";

import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { AutoTraderLogo, Search, SupportIcon } from '@/components/icons/icons';
import { useRouter } from 'next/navigation';
import LinkButton from '@/components/shared/linkbutton';
import SearchPopover from '@/components/shared/searchpopover';
import MenuSheet from '@/components/shared/menusheet';


const Header = () => {
  const router = useRouter();
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [MenuSheetOpen, setOpenMenuSheet] = useState<boolean>(false);

  return (
    <>

      <header className=' headerwrapper w-full '>
        <div className='  max-w-full '>
          <section title="announcement" className=' select-none font-medium bg-alert-bg  rounded-px px-2 text-center'>
            <span className='text-alert-color text-[13px] sm:text-sm  '> <span className='font-bold'> AutoTraderInc</span> leverages our proprietary <span className='font-bold '>orion AI</span>   to manage your market trades with precision and accuracy.</span>
          </section>
          <nav className='px-2 sm:px-2 py-3 bg-navbar-bg transition-colors duration-300 flex-between w-full flex-wrap  '>
            <Link href="/" aria-label='NorthBridge Investment Home page' className='transition-all   cursor-pointer duration-300 '>
              <AutoTraderLogo className='w-56 h-full' />
            </Link>
            <div className='flex flex-row items-center  gap-x-3 space-x-1'>
              <SearchPopover open={searchOpen} setOpen={setSearchOpen}>
                <button
                  type="button"
                  title="search"
                  className='cursor-pointer transition-colors duration-150'
                  aria-label="Open search"
                >
                  <div className={` ${searchOpen ? "  bg-popover rounded-full p-1 pb-2  px-2 border border-[rgba(135,159,240,0.1)]  " : ""} `}>
                    <Search className={` ${searchOpen ? "text-search-hover" : "text-white"} hover:text-search-hover mt-1.5 text-md  transition-color duration-300`} />
                  </div>

                </button>
              </SearchPopover>
              <Link href="https://www.plus500.com/en-ng/tradingacademy/faq" className='cursor-pointer transition-colors duration-150'>
                <SupportIcon className='h-5 w-5 text-white hover:text-search-hover' />
              </Link>
              <div className='hidden sm:flex'>
                <LinkButton href="https://app.autotraderai.online/sign-in" text="TRADE" className=' py-2.5' />
              </div>
              <MenuSheet open={MenuSheetOpen} setOpen={setOpenMenuSheet}>
                <button
                  type="button"
                  aria-label="Toggle navigation"
                  className="relative w-6 h-6 cursor-pointer transition-colors duration-150 outline-none border-none"
                >
                  <span className="absolute left-0 right-0 mx-auto w-[20px] h-[4px] bg-white top-[2px] rounded-tr-3xl"></span>
                  <span className="absolute left-0 right-0 mx-auto w-[20px] h-[4px] bg-white top-[9px]"></span>
                  <span className="absolute left-0 right-0 mx-auto w-[20px] h-[4px] bg-white top-[16px] rounded-bl-3xl"></span>
                </button>
              </MenuSheet>

            </div>
          </nav>

        </div>

      </header>
    </>
  )
}
export default Header;
