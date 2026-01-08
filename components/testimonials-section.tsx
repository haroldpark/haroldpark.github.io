"use client"

import Image from "next/image"

export function TestimonialsSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 pt-4 md:pt-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-[1.3]">
            What my coworkers & clients
            <br />
            say about <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">my work</span>
          </h2>
          {/* <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto pb-8">
            Lacus, adipiscing lectus convallis purus aliquet cursus magnaol montes augue donec cras turpis ultrices
            nulla sed doler.
          </p> */}
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative">
            <div className="bg-white border-4 border-black rounded-3xl py-8 md:py-14 px-6 md:px-8 md:pr-36">
              <div className="absolute -top-6 md:-top-8 left-6 md:left-8 w-12 h-12 md:w-16 md:h-16">
                <Image
                  src="/images/quote.png"
                  alt="Quote"
                  width={64}
                  height={64}
                  className="w-full h-full"
                />
              </div>

              <div>
                <p className="text-sm md:text-base lg:text-lg mb-6 leading-relaxed italic">"It has been a pleasure working alongside Harold. His proactive, can-do attitude, coupled with his strong web development skills (including JavaScript, React, Python, and Django) enabled him to tackle numerous diverse full-stack challenges and contribute to key application features. Additionally, his proactive approach to skill enhancement and staying current with industry trends was truly impressive, enabling him to master and swiftly implement evolving concepts in the React and JavaScript ecosystem. Harold is a versatile teammate who wears many hats, seamlessly pivoting between development, mentorship, QA, and design. His adaptability and collaborative spirit make him an immediate asset to any engineering team."</p>

                <div>
                  <div className="font-bold text-base md:text-lg">Reggie Johnson</div>
                  <div className="text-gray-600 text-sm md:text-base">Principal Software Engineer @ BrainGu</div>
                </div>
              </div>
            </div>

                <div className="absolute -right-20 top-1/4 -translate-y-1/2 xs:w-[64px] xs:h-[64px] sm:w-[128px] sm:h-[128px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden lg:block">
              <Image
                src="/images/afro-avatar-male-svgrepo-com.svg"
                alt="Client testimonial"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="relative max-w-5xl mx-auto mt-12">
          <div className="relative">
            <div className="bg-white border-4 border-black rounded-3xl py-8 md:py-14 px-6 md:px-8 md:pr-36">
              <div className="absolute -top-6 md:-top-8 left-6 md:left-8 w-12 h-12 md:w-16 md:h-16">
                <Image
                  src="/images/quote.png"
                  alt="Quote"
                  width={64}
                  height={64}
                  className="w-full h-full"
                />
              </div>

              <div>
                <p className="text-sm md:text-base lg:text-lg mb-6 leading-relaxed italic">"Harold is great in a pinch. He has a sharp instinct for identifying root causes within complex codebases and delivering precise hotfixes when the team is under pressure. Rather than just patching symptoms, he isolates logic gaps and prevents regressions during mission-critical sprints. His ability to navigate deep stack traces to enhance product reliability make him a highly dependable engineer for any high-performance development team."</p>

                <div>
                  <div className="font-bold text-base md:text-lg">Thomas Wilson</div>
                  <div className="text-gray-600 text-sm md:text-base">Tech Lead @ BrainGu</div>
                </div>
                
                <div className="absolute -right-20 top-1/4 -translate-y-1/2 xs:w-[64px] xs:h-[64px] sm:w-[128px] sm:h-[128px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden lg:block">
              <Image
                src="/images/beard-hipster-male-svgrepo-com.svg"
                alt="Client testimonial"
                fill
                className="object-cover "
              />
            </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  )
}
