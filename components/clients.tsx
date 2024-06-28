'use client'

import { useEffect } from 'react'
import Image from 'next/image'

// Import Swiper
import Swiper, { Autoplay } from 'swiper'
import 'swiper/swiper.min.css'
Swiper.use([Autoplay])

export default function Technologies() {

  useEffect(() => {
    const carousel = new Swiper('.tech-carousel', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      centeredSlides: true,
      loop: true,
      speed: 5000,
      noSwiping: true,
      noSwipingClass: 'swiper-slide',
      autoplay: {
        delay: 0,
        disableOnInteraction: true,
      },
    })
  }, [])

  return (
    <section className="bg-gray-900">
      <div className="py-12 md:py-20">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h2 className="h4 font-cabinet-grotesk text-gray-100">Technologies We Use</h2>
        </div>

        {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
        {/* * Custom styles in src/css/additional-styles/theme.scss */}
        <div className="tech-carousel swiper-container relative before:absolute before:inset-0 before:w-32 before:z-10 before:pointer-events-none before:bg-gradient-to-r before:from-gray-900 after:absolute after:inset-0 after:left-auto after:w-32 after:z-10 after:pointer-events-none after:bg-gradient-to-l after:from-gray-900">
          <div className="swiper-wrapper !ease-linear select-none">
            {/* Carousel items */}
            <div className="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
              <Image className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg" width={100} height={100} alt="Cloudflare" />
            </div>
            <div className="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
              <Image className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" width={100} height={100} alt="C#" />
            </div>
            <div className="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
              <Image className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" width={100} height={100} alt="PHP" />
            </div>
            <div className="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
              <Image className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" width={100} height={100} alt="Laravel" />
            </div>
            <div className="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
              <Image className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" width={100} height={100} alt="ASP.NET" />
            </div>
            <div className="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
              <Image className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" width={100} height={100} alt="NodeJS" />
            </div>
            <div className="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
              <Image className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" width={100} height={100} alt="Python" />
            </div>
            <div className="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
              <Image className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width={100} height={100} alt="React" />
            </div>
            <div className="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
              <Image className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" width={100} height={100} alt="Flutter" />
            </div>
            <div className="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
              <Image className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg" width={100} height={100} alt="Wordpress" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
