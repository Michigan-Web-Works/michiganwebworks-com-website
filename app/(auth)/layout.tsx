import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faLaptopCode, faCloud, faShieldAlt, faLifeRing } from '@fortawesome/free-solid-svg-icons'
import Header from './header'
import Illustration from '@/public/images/hero-illustration.svg'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex">
      {/* Content */}
      <div className="min-h-screen w-full lg:w-1/2">
        <div className="h-full">
          <div className="h-full w-full max-w-md px-6 mx-auto flex flex-col after:mt-auto after:flex-1">

            <Header />

            <div className="flex-1 py-8">
              {children}
            </div>

          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="fixed right-0 top-0 bottom-0 hidden lg:block lg:w-1/2 overflow-hidden" aria-hidden="true">
        {/* Bg */}
        <div className="absolute inset-0 bg-blue-600 pointer-events-none -z-10" />

        {/* Illustration */}
        <div className="absolute left-1/2 -translate-x-1/4 pointer-events-none -z-10">
          <object type="image/svg+xml" data={Illustration.src} width="1440" height="1214" />
        </div>

        {/* Services */}
        <div className="absolute inset-0 flex flex-col justify-center space-y-3">
          <div className="flex flex-nowrap space-x-3 mx-auto -translate-x-1/4">
            {/* Card */}
            <div className="w-72 shrink-0 p-4 bg-white rounded opacity-60 hover:opacity-100 transition duration-150 ease-in-out">
              <div className="flex items-center space-x-3">
                <div className="shrink-0">
                  <FontAwesomeIcon icon={faCode} size="2x" className="text-blue-600" />
                </div>
                <div>
                  <div className="font-cabinet-grotesk text-gray-900 font-bold">Web Development</div>
                  <div className="font-medium text-sm text-gray-600">Creating dynamic and responsive websites.</div>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="w-72 shrink-0 p-4 bg-white rounded opacity-80 hover:opacity-100 transition duration-150 ease-in-out">
              <div className="flex items-center space-x-3">
                <div className="shrink-0">
                  <FontAwesomeIcon icon={faLaptopCode} size="2x" className="text-blue-600" />
                </div>
                <div>
                  <div className="font-cabinet-grotesk text-gray-900 font-bold">IT Consulting</div>
                  <div className="font-medium text-sm text-gray-600">Expert advice to optimize your IT infrastructure.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-nowrap space-x-3 mx-auto">
            {/* Card */}
            <div className="w-72 shrink-0 p-4 bg-white rounded opacity-80 hover:opacity-100 transition duration-150 ease-in-out">
              <div className="flex items-center space-x-3">
                <div className="shrink-0">
                  <FontAwesomeIcon icon={faCloud} size="2x" className="text-blue-600" />
                </div>
                <div>
                  <div className="font-cabinet-grotesk text-gray-900 font-bold">Cloud Solutions</div>
                  <div className="font-medium text-sm text-gray-600">Seamless migration and cloud management.</div>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="w-72 shrink-0 p-4 bg-white rounded opacity-70 hover:opacity-100 transition duration-150 ease-in-out">
              <div className="flex items-center space-x-3">
                <div className="shrink-0">
                  <FontAwesomeIcon icon={faShieldAlt} size="2x" className="text-blue-600" />
                </div>
                <div>
                  <div className="font-cabinet-grotesk text-gray-900 font-bold">Cybersecurity</div>
                  <div className="font-medium text-sm text-gray-600">Protecting your digital assets from threats.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-nowrap space-x-3 mx-auto translate-x-1/4">
            {/* Card */}
            <div className="w-72 shrink-0 p-4 bg-white rounded opacity-40 hover:opacity-100 transition duration-150 ease-in-out">
              <div className="flex items-center space-x-3">
                <div className="shrink-0">
                  <FontAwesomeIcon icon={faLifeRing} size="2x" className="text-blue-600" />
                </div>
                <div>
                  <div className="font-cabinet-grotesk text-gray-900 font-bold">Ongoing Support</div>
                  <div className="font-medium text-sm text-gray-600">Continuous assistance to keep you running smoothly.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
