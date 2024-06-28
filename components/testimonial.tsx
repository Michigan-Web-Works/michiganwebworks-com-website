import Image from 'next/image'
import Illustration from '@/public/images/testimonial-illustration.svg'
import TestimonialImage1 from '@/public/images/testimonial-01.jpg'

export default function Testimonial() {
  return (
    <section className="relative" data-aos="fade-up">
      {/* Illustration */}
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none -z-10 mt-5" aria-hidden="true">
        <Image className="max-w-none" src={Illustration} alt="Illustration" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:mb-20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center">
              <div className="inline-flex mb-3">
                <Image className="rounded-full" src={TestimonialImage1} width="40" height="40" alt="Testimonial 02" />
              </div>
              <div className="font-cabinet-grotesk font-bold text-lg text-gray-900 mb-2">
                "Working with this team has been a game-changer. Their expertise and dedication to our project have exceeded our expectations."
              </div>
              <div className="font-cabinet-grotesk text-gray-900 font-medium">
                Samantha Lee <span className="text-gray-400">-</span> CTO,{' '}
                <a className="text-blue-500 font-bold hover:text-blue-600" href="#0">
                  TechWave
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
