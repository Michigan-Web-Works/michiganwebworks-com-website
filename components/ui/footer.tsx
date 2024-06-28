import Image from 'next/image'
import Link from 'next/link'
import Illustration from '@/public/images/footer-illustration.svg'

export default function Footer() {
  return (
    <footer className="relative">
      {/* Bg */}
      <div className="absolute inset-0 bg-blue-600 -z-10" aria-hidden="true" />

      {/* Illustration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
        <Image className="max-w-none" src={Illustration} alt="Illustration" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Blocks */}
        <div className="grid sm:grid-cols-12 lg:grid-cols-10 gap-8 py-8 border-t border-blue-500">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-2 lg:max-w-xs">
            {/* Logo */}
            <Link className="block group" href="/" aria-label="Michigan Web Works">
              <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                <path
                  className="fill-blue-100 group-hover:fill-white transform duration-150 ease-in-out"
                  d="M12 6v24C5.373 30 0 24.627 0 18S5.373 6 12 6Z"
                />
                <path
                  className="fill-sky-400 group-hover:fill-sky-300 transform duration-150 ease-in-out"
                  d="M10.807 6.059A10.003 10.003 0 0 1 20 0c5.523 0 10 4.477 10 10 0 4.123-2.496 7.664-6.059 9.193.04-.392.059-.79.059-1.193 0-6.627-5.373-12-12-12-.403 0-.8.02-1.193.059Z"
                />
              </svg>
            </Link>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-xs text-gray-100 font-bold uppercase mb-3">Services</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a className="text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0">
                  Web Development
                </a>
              </li>
              <li>
                <a className="text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0">
                  IT Consulting
                </a>
              </li>
              <li>
                <a className="text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0">
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a className="text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0">
                  Cybersecurity
                </a>
              </li>
              <li>
                <a className="text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0">
                  Ongoing Support
                </a>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-xs text-gray-100 font-bold uppercase mb-3">Company</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a className="text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0">
                  Careers
                </a>
              </li>
              <li>
                <a className="text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0">
                  Our Team
                </a>
              </li>
              <li>
                <a className="text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0">
                  Blog
                </a>
              </li>
              <li>
                <a className="text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-xs text-gray-100 font-bold uppercase mb-3">Resources</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a className="text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0">
                  Case Studies
                </a>
              </li>
              <li>
                <a className="text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0">
                  Documentation
                </a>
              </li>
              <li>
                <a className="text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0">
                  FAQs
                </a>
              </li>
              <li>
                <a className="text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0">
                  Help Center
                </a>
              </li>
              <li>
                <a className="text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-xs text-gray-100 font-bold uppercase mb-3">Contact</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a className="text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0">
                  Support
                </a>
              </li>
              <li>
                <a className="text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0">
                  Sales
                </a>
              </li>
              <li>
                <a className="text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0">
                  General Inquiries
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between pb-4 md:pb-8">
          {/* Social links */}
          {/* <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a
                className="flex justify-center items-center text-blue-300 hover:text-white transition duration-150 ease-in-out"
                href="#0"
                aria-label="Twitter"
              >
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 6v24C5.373 30 0 24.627 0 18S5.373 6 12 6Z" />
                  <path d="M10.807 6.059A10.003 10.003 0 0 1 20 0c5.523 0 10 4.477 10 10 0 4.123-2.496 7.664-6.059 9.193.04-.392.059-.79.059-1.193 0-6.627-5.373-12-12-12-.403 0-.8.02-1.193.059Z" />
                </svg>
              </a>
            </li>
            <li className="ml-2">
              <a
                className="flex justify-center items-center text-blue-300 hover:text-white transition duration-150 ease-in-out"
                href="#0"
                aria-label="Github"
              >
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </a>
            </li>
            <li className="ml-2">
              <a
                className="flex justify-center items-center text-blue-300 hover:text-white transition duration-150 ease-in-out"
                href="#0"
                aria-label="LinkedIn"
              >
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M29 0H3C1.3 0 0 1.3 0 3v26c0 1.7 1.3 3 3 3h26c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zM12 27H7V12h5v15zM9.5 10.2c-1.5 0-2.5-1.1-2.5-2.5S8 5.2 9.5 5.2 12 6.3 12 7.7s-1.1 2.5-2.5 2.5zM27 27h-5V18c0-2.2-2.8-2-2.8 0v9h-5V12h5v1.5c2.3-3.3 8-3.6 8 2v11z" />
                </svg>
              </a>
            </li>
          </ul> */}

          {/* Copyrights */}
          <div className="text-sm text-blue-300">© 2024 Michigan Web Works. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
