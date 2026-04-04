import React from "react";

const Phonesection = () => {
  return (
    <div className="relative w-full py-4 ">
      {/* Background gradient */}
      <div
        className="
          absolute
          -top-40
          bottom-0
          left-6
          right-6
          
          h-[65rem]
       bg-[position:50%_50%]
          bg-[url('/assets/images/phone-gradient-bg.svg')]
          bg-no-repeat
          bg-center
          bg-[length:120%_72%]
         
        "
      />

      {/* Phone / content */}
      <div className="flex flex-col sm:flex-row-reverse items-center gap-x-8 gap-y-4">
        <h2 className="text-2xl leading-7 font-bold"> Powerful trading. Seamless app.</h2>
      </div>
    </div>
  );
};

export default Phonesection;