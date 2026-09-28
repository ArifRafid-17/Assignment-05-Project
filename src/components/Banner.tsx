import React from 'react';
import BannerImage from '../assets/banner-stack.png';

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-20 lg:pt-20 lg:pb-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Build Your Ideal <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600">
                Development Stack
              </span>
            </h1>

            <p className="mt-6 text-sm sm:text-base text-slate-500 leading-relaxed max-w-xl">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that fits your
              next project.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#technologies"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-pink-600 hover:opacity-95 shadow-sm transition-all duration-150 active:scale-95"
              >
                Explore Technologies
              </a>

              <a
                href="#learn-more"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-xs transition-all duration-150 active:scale-95"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right 3D Illustration Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-none flex justify-center">
              {/* Soft background glow */}
              <div 
                className="absolute -inset-4 bg-gradient-to-tr from-pink-500/20 via-purple-500/20 to-blue-500/10 rounded-full blur-3xl -z-10" 
                aria-hidden="true" 
              />
              <img
                src={BannerImage}
                alt="Development Stack 3D Visual"
                className="w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] h-auto object-contain drop-shadow-2xl select-none"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;