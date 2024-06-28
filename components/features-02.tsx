'use client'

import Image from 'next/image'
import { useState } from 'react'
import FeatImage from '@/public/images/features-01.png'

export default function Features02() {

  const [category, setCategory] = useState<string>('1')

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 font-cabinet-grotesk">Comprehensive Solutions for Your Digital Needs</h2>
          </div>

          <div>
            {/* Category buttons */}
            <div className="pb-12 md:pb-20">
              <div className="flex flex-wrap justify-center -m-1.5">
                <button
                  className={`btn-sm m-1.5 h-8 shadow ${category === '1' ? 'bg-blue-500 text-white' : 'bg-white text-gray-900 hover:bg-blue-50'}`}
                  onClick={() => setCategory('1')}
                >
                  Web Development
                </button>
                <button
                  className={`btn-sm m-1.5 h-8 shadow ${category === '2' ? 'bg-blue-500 text-white' : 'bg-white text-gray-900 hover:bg-blue-50'}`}
                  onClick={() => setCategory('2')}
                >
                  IT Consulting
                </button>
                <button
                  className={`btn-sm m-1.5 h-8 shadow ${category === '3' ? 'bg-blue-500 text-white' : 'bg-white text-gray-900 hover:bg-blue-50'}`}
                  onClick={() => setCategory('3')}
                >
                  Cloud Solutions
                </button>
                <button
                  className={`btn-sm m-1.5 h-8 shadow ${category === '4' ? 'bg-blue-500 text-white' : 'bg-white text-gray-900 hover:bg-blue-50'}`}
                  onClick={() => setCategory('4')}
                >
                  Ongoing Support
                </button>
              </div>
            </div>

            {/* Section content */}
            <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 space-y-reverse md:space-y-0">
              {/* Content */}
              <div className="md:w-7/12 lg:w-1/2 order-1 md:order-none" data-aos="fade-up">
                {/* Content #1 */}
                <div className={`${category !== '1' && 'hidden'}`}>
                  <h3 className="h3 font-cabinet-grotesk mb-3">Custom Web Development</h3>
                  <p className="text-lg text-gray-500 mb-8">
                    Our team of experts crafts dynamic, user-friendly web services tailored to meet your business needs. From concept to deployment, we ensure every aspect of your site is optimized for success.
                  </p>
                  <ul className="inline-flex flex-col space-y-6">
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <div>
                        <div className="font-cabinet-grotesk font-bold text-lg mb-1">Responsive Design</div>
                        <div className="text-gray-500">
                          We ensure your website looks great on all devices, providing an optimal user experience.
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <div>
                        <div className="font-cabinet-grotesk font-bold text-lg mb-1">SEO Optimization</div>
                        <div className="text-gray-500">
                          Our SEO strategies help improve your search engine rankings and increase visibility.
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <div>
                        <div className="font-cabinet-grotesk font-bold text-lg mb-1">E-commerce Solutions</div>
                        <div className="text-gray-500">
                          We provide robust e-commerce platforms to help you sell your products and services online.
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* Content #2 */}
                <div className={`${category !== '2' && 'hidden'}`}>
                  <h3 className="h3 font-cabinet-grotesk mb-3">Expert IT Consulting</h3>
                  <p className="text-lg text-gray-500 mb-8">
                    Our consulting services help you navigate the complex IT landscape, offering strategic advice and practical solutions to enhance your business operations.
                  </p>
                  <ul className="inline-flex flex-col space-y-6">
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <div>
                        <div className="font-cabinet-grotesk font-bold text-lg mb-1">System Integration</div>
                        <div className="text-gray-500">
                          Seamlessly integrate your existing systems to improve efficiency and performance.
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <div>
                        <div className="font-cabinet-grotesk font-bold text-lg mb-1">Cybersecurity</div>
                        <div className="text-gray-500">
                          Protect your business from cyber threats with our comprehensive cybersecurity solutions.
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* Content #3 */}
                <div className={`${category !== '3' && 'hidden'}`}>
                  <h3 className="h3 font-cabinet-grotesk mb-3">Advanced Cloud Solutions</h3>
                  <p className="text-lg text-gray-500 mb-8">
                    Leverage the power of the cloud to enhance your business flexibility, scalability, and efficiency with our advanced cloud solutions.
                  </p>
                  <ul className="inline-flex flex-col space-y-6">
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <div>
                        <div className="font-cabinet-grotesk font-bold text-lg mb-1">Cloud Migration</div>
                        <div className="text-gray-500">
                          Smoothly transition your existing systems to the cloud with minimal disruption.
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <div>
                        <div className="font-cabinet-grotesk font-bold text-lg mb-1">Cloud Management</div>
                        <div className="text-gray-500">
                          Optimize and manage your cloud infrastructure for peak performance.
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* Content #4 */}
                <div className={`${category !== '4' && 'hidden'}`}>
                  <h3 className="h3 font-cabinet-grotesk mb-3">Ongoing Support & Maintenance</h3>
                  <p className="text-lg text-gray-500 mb-8">
                    Our dedicated support team ensures your digital infrastructure remains robust and up-to-date, providing you with peace of mind.
                  </p>
                  <ul className="inline-flex flex-col space-y-6">
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <div>
                        <div className="font-cabinet-grotesk font-bold text-lg mb-1">24/7 Support</div>
                        <div className="text-gray-500">
                          Get round-the-clock support to resolve any issues promptly.
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <div>
                        <div className="font-cabinet-grotesk font-bold text-lg mb-1">Regular Updates</div>
                        <div className="text-gray-500">
                          Keep your systems updated with the latest features and security patches.
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Image */}
              <div className="md:w-5/12 lg:w-1/2" data-aos="fade-up" data-aos-delay="100">
                <Image className="mx-auto md:max-w-none" src={FeatImage} width="540" height="405" alt="Features" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
