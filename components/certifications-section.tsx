import { Award } from "lucide-react"

export function CertificationsSection() {
  return (
    <section className="bg-[#F3F4F6] py-16 md:py-24 border-b-2 border-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
            <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">Certifications</span>
          </h2>

          <div className="inline-block bg-white border-4 border-black rounded-3xl p-8 max-w-2xl w-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-[#FDB927] rounded-full border-2 border-black flex items-center justify-center">
                <Award className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold">CompTIA SY0-601 Security+ Certified</h3>
              <p className="text-lg text-gray-600 font-medium">2023 — 2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
