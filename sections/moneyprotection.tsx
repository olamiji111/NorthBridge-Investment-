import React, { useEffect, useRef } from 'react';
import LinkButton from '@/components/shared/linkbutton';
import Image from 'next/image';
import { moneyProtectionRules, stocksMarket } from '@/constants';
import Link from 'next/link';

const AutoScrollingStocks = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollSpeed = 0.6; // adjust speed

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let x = 0;
    let animationId: number;

    const animate = () => {
      x -= scrollSpeed;

      // Reset scroll when first set is completely gone
      const resetPoint = container.scrollWidth / 2;
      if (Math.abs(x) >= resetPoint) {
        x = 0;
      }

      container.style.transform = `translateX(${x}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);


  return (
    <div className=" w-full mt-2">
      <div
        ref={containerRef}
        className="flex  whitespace-nowrap items-center select-none cursor-pointer "
        style={{ willChange: "transform" }}
      >
        {stocksMarket.map((item, idx) => (
          <div key={idx} className='px-2 shrink-0' >
            <Link href="/market"

              className="shrink-0 w-32 sm:w-32 h-32 flex flex-col space-y-4 items-center justify-center rounded-[7px] border border-white/20 bg-[radial-gradient(circle,#ffffff25,#ffffff10)] px-3 py-3  transition-transform duration-300 ease-out hover:scale-108"
            >
              <Image
                src={item.imgPath}
                alt={item.name}
                draggable={false}
                width={50}
                height={50}
                className="object-contain"
                priority
              />
              <span className="mt-1 text-center text-[14px] font-semibold leading-snug wrap-break-word whitespace-normal">
                {item.name}
              </span>
            </Link>
          </div>

        ))}

        {stocksMarket.map((item, idx) => (
          <div key={`dup-${idx}`} className='px-2 shrink-0' >
            <Link href="/market"

              className="w-32 sm:w-32 h-32 flex flex-col space-y-4 items-center justify-center rounded-[7px] border border-white/20 bg-[radial-gradient(circle,#ffffff25,#ffffff10)] px-3 py-3 transition-transform duration-300 ease-out hover:scale-105"
            >
              <Image
                src={item.imgPath}
                alt={item.name}
                draggable={false}
                width={50}
                height={50}
                className="object-contain"
                priority
              />
              <span className="mt-1 text-center text-[14px] font-semibold leading-snug wrap-break-word whitespace-normal">
                {item.name}
              </span>
            </Link>
          </div>

        ))}

      </div>

    </div>
  )
}

const Portfolio = () => {
  return (
    <div className="flex flex-col items-center justify-center  px-1 max-w-full md:flex-row md:justify-between gap-y-6 md:gap-y-0">
      <div className="flex flex-col items-center justify-center md:items-start w-full md:w-[60%] gap-y-4">
        <h2 className="text-3xl capitalize md:text-3xl leading-normal bg-gradient-to-r from-[#afe1ff] to-[#caacfd] text-transparent bg-clip-text  ibm text-center md:text-left">
          Transfer your portfolio from and to other brokers
        </h2>
        <p className="text-text-color text-[19px] md:text-[18px] tracking-[0.05rem] ibm">
          Automatic, paperless, free
        </p>
        <LinkButton
          text="Learn More"
          className="font-bold mt-2  text-lg w-full md:w-42 md:py-2 rounded-xl"
          href="learnmore"
        />
      </div>
      <div className="max-h-full py-4 mt-4 md:py-0 md:max-w-[40%]">
        <Image
          src="/assets/images/hero/portfolio-transfer-hero.webp"
          alt="Portfolio Transfer"
          width={300}
          height={300}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};

const TaxFree = () => {
  return (
    <div className="flex flex-col items-center justify-center px-1 max-w-full mx-auto md:max-w-full md:flex-row md:justify-between gap-y-6 md:gap-y-0">
      <div className="flex flex-col items-center justify-center md:items-start w-full md:w-[60%] gap-y-4">
        <h2 className="text-3xl md:text-3xl leading-normal  text-white bg-clip-text  ibm text-center md:text-left">
          Invest Tax-Free in a
          <span className='text-light-blue'> Stocks and Shares ISA </span>

        </h2>
        <p className="text-text-color text-[19px] md:text-[18px] md:text-left  text-center ibm">
          Our uncompromising investing experience also available as a Stocks and Shares ISA.
        </p>
        <div className='hidden md:flex'>
          <LinkButton
            text="open account"
            className="  rounded-xl font-bold mt-2 text-lg w-full md:w-42 md:py-2 "
            href="/(auth)/signin"
          />
        </div>

        <p className='text-[12px] text-white hidden md:flex text-left'>
          Tax treatment depends on your individual circumstances and ISA regulations which may change</p>
      </div>
      <div className="max-h-full py-4 mt-4 md:py-0 md:max-w-[40%] flex flex-col gap-y-4">
        <Image
          src="/assets/images/hero/isa-badge.png"
          alt="ISA Badge"
          width={400}
          height={300}
          className="object-contain"
          priority
        />
        <div className='flex md:hidden'>
          <LinkButton
            text="open account"
            className="  rounded-xl font-bold mt-2 text-lg w-full md:w-42 md:py-2 "
            href="/(auth)/signin"
          />
        </div>

        <p className='text-[14px] sm:text-[16px] flex text-white  md:hidden text-center'>
          Tax treatment depends on your individual circumstances and ISA regulations which may change</p>
      </div>
    </div>
  );
};
const MoneyProtection = () => {
  return (
    <section>
      <div className="flex flex-col items-center  md:items-start justify-center px-4 sm:px-6  py-8 mt-2 ">
        <Portfolio />
        <div className='py-10 '>
          <h2 className='mt-4 text-3xl  text-center ibm text-zinc-100 z-2 relative'>
            Money Protection
          </h2>
          <div className='mt-4 flex flex-col gap-y-6  px-1 items-center md:items-start justify-center'>
            {moneyProtectionRules.map((item, idx) => (
              <div key={idx} className='px-4 md:px-8 pt-6 border mt-6 bg-trader-card border-transparent rounded-3xl pb-12  shrink-0 shadow-[0px_-1rem_10rem_rgb(4,12,41)] w-full'>
                <div className='flex flex-col gap-y-2 items-start '>
                  <Image
                    src={item.imgPath}
                    alt={item.title}
                    width={70}
                    height={70}
                    className='object-contain'
                    priority
                  />
                  <h3 className='font-semibold text-lg text-zinc-200'> {item.title}.</h3>
                  <span className='text-zinc-200 text-justify leading-9 sm:leading-8'>{item.content}.</span>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
      <div className='py-8 flex flex-col gap-x-2 items-center justify-center gap-y-6'>
        <h2 className='text-xl sm:text-2xl md:text-3xl  font-normal w-[70%] text-center ibm text-white'>
          <span className='text-light-blue'> Over 13,000 </span>
          global Stocks & ETFs
        </h2>
        <AutoScrollingStocks />
      </div>
      <div className='flex flex-col items-center  md:items-start justify-center px-4 sm:px-6  py-8 mt-2'>
        <TaxFree />
      </div>
    </section>
  );
};

export default MoneyProtection;