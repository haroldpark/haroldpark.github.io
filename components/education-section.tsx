import { GraduationCap } from "lucide-react"

export function EducationSection() {
  return (
    <section className="bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Educational <br />
              <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block mt-2">Background</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Foundational knowledge and academic achievements.
            </p>
          </div>

          <div className="md:w-1/2 w-full">
            <div className="bg-white text-black border-4 border-white rounded-3xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">The George Washington University</h3>
                  <p className="text-lg font-medium mb-1">Bachelor of Science</p>
                  <p className="text-gray-600">Washington, DC • 2010 — 2014</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
