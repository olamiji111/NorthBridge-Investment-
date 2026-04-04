"use client";
import React, { useState, useEffect } from 'react'
import Header from "@/sections/header";
import Hero from "@/sections/hero";
import Marketdata from "@/sections/marketdata";
import PageContent from "@/sections/pagecontent";
import Testimonial from '@/sections/testimonial';
import MoneySection from "@/sections/moneysection";
import Traderexperience from '@/sections/traderexperience';
import Contact from '@/sections/contact';
import Moneyprotection from '@/sections/moneyprotection';
import Footer from '@/sections/footer';
import Paymentproof from '@/sections/paymentproof';

const Home = () => {
  return (
    <main className="h-screen ">
      <Header />
      <div className='h-full'>
        <Hero />
        <Marketdata />
        <PageContent />
        <Testimonial />
        <Paymentproof />
        <MoneySection />
        <Traderexperience />
        <Moneyprotection />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default Home;
