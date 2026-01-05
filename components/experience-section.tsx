import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ExperienceSection() {
  const experiences = [
    {
      period: "January 2025  — Current",
      title: "Tech Mentor",
      company: "Mentorcruise & Springboard",
      description:
        "Provided personalized mentorship to software engineering students facing challenges transitioning into tech careers",
      icon: "/images/experience/mentor.png",
    },
    {
      period: "June 2023 — Current",
      title: "Tech Mentor",
      company: "Mentorcruise & Springboard",
      description:
        "Provided personalized mentorship to software engineering students facing challenges transitioning into tech careers",
      icon: "/images/experience/mentor.png",
    },
    {
      period: "July 2023 — Dec. 2024",
      title: "Senior Software Engineer",
      company: "Scope",
      description:
        "Delivered full-stack development for consumer-facing cloud web application, connecting users to its AI-powered rope inspection system. Developed an MVP for a training platform that processes pre-existing AWS S3-hosted rope images through Scope's LLMs. Modernized front-end testing practices and revitalized back-end architecture.",
      icon: "/images/experience/scope.png",
    },
    {
      period: "May 2020 — March 2023",
      title: "Software Engineer",
      company: "BrainGu",
      description:
        "Delivered full-stack development of mission-critical features for the cloud-based WIDOW application. Maintained CI/CD pipeline achieving 80%+ test coverage. Resolved mission-blocking defects during live military exercises.",
      icon: "/images/experience/braingu.png",
    },
    {
      period: "Nov. 2018 — Mar. 2020",
      title: "Full-stack Developer",
      company: "CICOM Software",
      description: "Full-stack development for various clients in Los Angeles, CA.",
      icon: "/images/experience/cicom.png",
    },
    {
      period: "Jan. 2017 — Jun. 2017",
      title: "Freelance Developer",
      company: "Sam Costa Studios",
      description: "Remote freelance development work.",
      icon: "/images/experience/freelance.png",
    },
    {
      period: "Oct. 2016 — Dec. 2016",
      title: "Software Developer Intern",
      company: "BASIS.ed",
      description: "Internship in Scottsdale, AZ.",
      icon: "/images/experience/basis.png",
    },
  ]

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="text-white pt-0 md:pt-12 md:sticky md:top-12 self-start">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-[1.3]">
              Take a look at my <span className="bg-[#6366F1] text-white px-3 py-1 inline-block">past experience</span>
            </h2>
            <p className="text-gray-400 mb-8 md:mb-10 leading-relaxed text-base md:text-lg">
              7+ years of professional full stack development experience, in diverse industries such as education, adtech, fashion, government, and manufacturing.
            </p>
            <Button className="bg-white text-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]">
              <FileText className="w-5 h-5" />
              View full resume
            </Button>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white border-4 border-black rounded-3xl min-h-[220px] md:min-h-[240px]">
                <div className="flex items-center justify-between mb-4 md:mb-6 pt-6 md:pt-8 px-6 md:px-8">
                  <div className="flex flex-col">
                    <div className="text-base md:text-[22px] leading-tight md:leading-[34px] font-bold text-[#0B0B0B]">
                      {exp.period}
                    </div>
                    <div className="text-sm md:text-lg font-bold text-gray-500">
                      {exp.company}
                    </div>
                  </div>
                  <div className="rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white overflow-hidden">
                    <Image
                      src={exp.icon || "/images/placeholder.png"}
                      alt={exp.company}
                      width={48}
                      height={48}
                      className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 object-contain p-1"
                    />
                  </div>
                </div>

                <div className="border-t-[3px] border-black mb-4 md:mb-6"></div>

                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <h3 className="text-xl md:text-[28px] leading-tight md:leading-[40px] font-bold text-[#0B0B0B] mb-2 md:mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-[#393939] text-base md:text-[20px] leading-relaxed md:leading-[32px]">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
