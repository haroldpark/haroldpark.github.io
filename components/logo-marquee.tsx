export function LogoMarquee() {
  const items = [
    { logo: "/logos/basised-logo-square.png", alt: "basised" },
    { logo: "/logos/cicom-logo-square.png", alt: "cicom" },
    { logo: "/logos/braingu-logo-square.jpg", alt: "braingu" },
    { logo: "/logos/scope-logo-square.jpg", alt: "scope" },
    { logo: "/logos/springboard.jpg", alt: "springboard" },
    { logo: "/logos/hpsolutions-logo-square.png", alt: "hp-solutions" },
  ]

  return (
    <div>
      <div className="relative overflow-hidden shadow-xl/30 py-16 -rotate-[5deg] mt-32 mb-16 min-w-[120vw] -mx-[10vw] left-0">
        <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <img key={index} src={item.logo || "/placeholder.svg"} alt={item.alt} className="h-12 w-auto" />
          ))}
        </div>
      </div>
    </div>
  )
}
