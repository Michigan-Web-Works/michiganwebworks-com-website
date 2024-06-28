export default function Faqs() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto pb-10">
            <h2 className="h2 font-cabinet-grotesk">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {/* Item */}
            <div className="space-y-2">
              <h4 className="text-xl font-cabinet-grotesk font-bold">What web development services do you offer?</h4>
              <p className="text-gray-500">
                We offer a wide range of web development services including custom website design, e-commerce solutions, responsive web design, content management systems (CMS) integration, and web application development. Our team is proficient in various technologies like HTML, CSS, JavaScript, React, Node.js, and more.
              </p>
            </div>
            {/* Item */}
            <div className="space-y-2">
              <h4 className="text-xl font-cabinet-grotesk font-bold">What IT consulting services do you provide?</h4>
              <p className="text-gray-500">
                Our IT consulting services include system integration, IT infrastructure planning, cybersecurity solutions, cloud computing, and IT project management. We work closely with your team to understand your needs and provide tailored solutions to enhance your IT environment.
              </p>
            </div>
            {/* Item */}
            <div className="space-y-2">
              <h4 className="text-xl font-cabinet-grotesk font-bold">How do you ensure the security of our web applications?</h4>
              <p className="text-gray-500">
                Security is a top priority in our development process. We implement best practices such as secure coding standards, regular security audits, vulnerability assessments, and the use of robust security tools. Additionally, we stay updated with the latest security trends and protocols to protect your applications from potential threats.
              </p>
            </div>
            {/* Item */}
            <div className="space-y-2">
              <h4 className="text-xl font-cabinet-grotesk font-bold">Can you help with migrating our systems to the cloud?</h4>
              <p className="text-gray-500">
                Yes, we offer comprehensive cloud migration services. We assist with planning and executing the migration of your data and applications to cloud platforms such as AWS, Azure, or Google Cloud. Our goal is to ensure a smooth transition with minimal downtime and optimal performance.
              </p>
            </div>
            {/* Item */}
            <div className="space-y-2">
              <h4 className="text-xl font-cabinet-grotesk font-bold">What kind of support do you offer after the project is completed?</h4>
              <p className="text-gray-500">
                We provide ongoing support and maintenance services to ensure your website or application runs smoothly. Our support includes bug fixes, performance optimization, updates, and technical assistance. We offer various support plans tailored to your specific needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
