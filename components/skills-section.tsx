import { Code2 } from "lucide-react"

export function SkillsSection() {
  const needs = [
    {
      category: "LANGUAGES",
      skills: ["Javascript (Fluent)", "HTML (Fluent)", "CSS (Fluent)", "Python (Intermediate)", "Rust (Basic)", "C# (Basic)", "C++ (Basic)"],
    },
    {
      category: "FRONT-END",
      skills: ["Typescript", "ReactJS/Redux", "react-query", "VueJS/Vuex", "NextJS", "SCSS/LESS", "Tailwind", "Figma", "D3", "Tanstack", "Vite", "Webpack"],
    },
    {
      category: "BACK-END",
      skills: ["Node/Express", "SQL", "DjangoREST", "Postgres", "Prisma", "AWS", "Mongo", ".NET", "Firebase", "Docker", "Golang"],
    },
    {
      category: "TESTING",
      skills: ["React/Vue Testing Library", "Jest", "Vitest", "Storybook", "Enzyme", "Cypress", "Jasmine"],
    },
  ]

  return (
    <section className="bg-white py-16 md:py-24 border-b-2 border-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16 text-center">
            <h2 id="skills" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Technical <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">Skills</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {needs.map((group, index) => (
              <div key={index} className="bg-white border-4 border-black rounded-3xl p-6 md:p-8 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow">
                <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2">
                  <Code2 className="w-6 h-6" />
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, i) => (
                    <span key={i} className="bg-gray-100 border-2 border-black rounded-lg px-3 py-1 text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
