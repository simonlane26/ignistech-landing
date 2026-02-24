import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Logo Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-6">
            <Image
              src="/logo.png"
              alt="IgnisTech Ltd Logo"
              width={200}
              height={200}
              className="rounded-2xl shadow-2xl"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            IgnisTech Ltd
          </h1>
          <p className="text-xl md:text-2xl text-orange-400 font-semibold">
            Innovative Fire Safety Solutions
          </p>
        </div>

        {/* Company Bio */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              About Us
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              IgnisTech Ltd is at the forefront of fire safety technology, delivering cutting-edge solutions
              that protect lives and property. Our mission is to revolutionize fire safety compliance and
              management through innovative digital tools.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              We combine expert knowledge in fire safety regulations with modern technology to create
              intuitive, powerful applications that simplify complex compliance requirements and enhance
              safety standards across industries.
            </p>
          </div>
        </div>

        {/* Apps Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Our Applications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* FireXCheck App Card */}
            <Link
              href="https://www.firexcheck.com/"
              target="_blank"
              className="group bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <Image
                  src="/firexcheck-logo.png"
                  alt="FireXCheck Logo"
                  width={60}
                  height={60}
                  className="mr-4 rounded-lg shrink-0"
                />
                <h3 className="text-xl font-bold text-white">FireXCheck</h3>
              </div>
              <p className="text-white/90 mb-4">
                Comprehensive fire safety inspection and compliance management platform.
              </p>
              <div className="flex items-center text-white font-semibold">
                Visit FireXCheck
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </Link>

            {/* Door Compliance App Card */}
            <Link
              href="https://www.doorcompliance.co.uk"
              target="_blank"
              className="group bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <Image
                  src="/Doorlogo.png"
                  alt="Door Compliance Logo"
                  width={60}
                  height={60}
                  className="mr-4 rounded-lg shrink-0"
                />
                <h3 className="text-xl font-bold text-white">DoorCompliance</h3>
              </div>
              <p className="text-white/90 mb-4">
                Comprehensive Fire Door Compliance Management system
              </p>
              <div className="flex items-center text-white font-semibold">
                Visit Site
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </Link>

            {/* AirfieldOpsManager App Card */}
            <Link
              href="https://www.airfieldopsmanager.com"
              target="_blank"
              className="group bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <Image
                  src="/airfieldops-logo.png"
                  alt="AirfieldOpsManager Logo"
                  width={60}
                  height={60}
                  className="mr-4 rounded-lg shrink-0"
                />
                <h3 className="text-xl font-bold text-white">Airfield Ops Manager</h3>
              </div>
              <p className="text-white/90 mb-4">
                Airfield operations management and compliance solution
              </p>
              <div className="flex items-center text-white font-semibold">
                Visit Site
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </Link>
            {/* IgnisCompetence App Card */}
            <Link
              href="https://www.igniscompetence.com"
              target="_blank"
              className="group bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <Image
                  src="/IgnisCompetence.png"
                  alt="IgnisCompetence Logo"
                  width={60}
                  height={60}
                  className="mr-4 rounded-lg shrink-0"
                />
                <h3 className="text-xl font-bold text-white">IgnisCompetence</h3>
              </div>
              <p className="text-white/90 mb-4">
                A competence, quality assurance, and operational readiness platform
              </p>
              <div className="flex items-center text-white font-semibold">
                Visit Site
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </Link>
          </div>
        </div>

        {/* Contact/Footer Section */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-slate-400 mb-6">
              Interested in our fire safety solutions? Contact us to learn more about how IgnisTech can help your organization.
            </p>
            <a
              href="mailto:ignistech999@gmail.com"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold transition-colors mb-6"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              ignistech999@gmail.com
            </a>
            <div className="text-slate-500 text-sm mt-6">
              © 2025 IgnisTech Ltd. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
