"use client";

import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Search, SupportIcon } from '@/components/icons/icons';
import { useRouter } from 'next/navigation';
import LinkButton from '@/components/shared/linkbutton';
const Header = () => {
  const router = useRouter();
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [MenuSheetOpen, setOpenMenuSheet] = useState<boolean>(false);
  return (
    <header className=' headerwrapper w-full '>
      <div className='  max-w-full '>
        <section title="announcement" className=' select-none bg-alert-bg  rounded-px px-2 text-center'>
          <span className='text-alert-color text-[13px] sm:text-sm  '> NorthBridge Investment Capitals leverages our proprietary BridgeAI to manage your market trades with precision and unparalleled accuracy.</span>
        </section>
        <nav className='sm:px-6 px-4 py-1.5 bg-navbar-bg transition-colors duration-300 flex-between w-full flex-wrap  '>
          <Link href="/" aria-label='NorthBridge Investment Home page' className=' flex cursor-pointer flex-row items-center gap-0 transition-transform duration-300 hover:-translate-z-0.5 active:translate-0.5'>
            <Image
              src="/assets/images/IMG_6205-2.png"
              alt="NorthBridge Capital Logo"
              width={40}
              height={100}
              className='object-contain '
              priority
            />
            <div className='flex-col hidden sm:flex items-start gap-0 text-[12px] font-semibold  '>
              <span className=' tracking-[-0.022em] leading-normal '>NorthBridge Investment Capitals</span>
              <span className=' tracking-widest  leading-normal capitalize text-gold-300 '>Stack your wealth daily</span>

            </div>

          </Link>
          <div className='flex flex-row items-center gap-x-4 space-x-1'>
            <div onClick={() => { setSearchOpen((prev) => !prev) }} className='cursor-pointer transition-colors duration-150'>
              <Search className='h-5 w-5 text-white hover:text-search-hover' />
            </div>
            <div onClick={() => router.push("/support")} className='cursor-pointer transition-colors duration-150'>
              <SupportIcon className='h-5 w-5 text-white hover:text-search-hover' />
            </div>
            <div className='hidden sm:flex'>
              <LinkButton href="/(auth)/signin" text="TRADE" className=' py-2.5' />
            </div>

            <button
              type="button"
              aria-label="Toggle navigation"
              onClick={() => setOpenMenuSheet((prev) => !prev)}
              className="relative w-6 h-6 cursor-pointer"
            >
              <span className="absolute left-0 right-0 mx-auto w-[20px] h-[4px] bg-white top-[2px] rounded-tr-3xl"></span>
              <span className="absolute left-0 right-0 mx-auto w-[20px] h-[4px] bg-white top-[9px]"></span>
              <span className="absolute left-0 right-0 mx-auto w-[20px] h-[4px] bg-white top-[16px] rounded-bl-3xl"></span>
            </button>
          </div>
        </nav>

      </div>

    </header>
  )
}
export default Header;
