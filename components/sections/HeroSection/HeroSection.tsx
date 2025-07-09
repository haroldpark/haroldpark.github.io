"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ProfileCard } from "@/components/ProfileCard";
import { RotatingText } from "@/components/RotatingText";
import { LetterGlitch } from "@/components/LetterGlitch";
import { Logo } from "@/components/Logo";
import { ShinyText } from "@/components/ShinyText";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  rotatingTexts?: string[];
  profileCardProps?: {
    avatarUrl?: string;
    name?: string;
    title?: string;
    handle?: string;
    status?: string;
    contactText?: string;
  };
}

export function HeroSection({
  description = "Launch your SaaS product in record time with our powerful, ready-to-use template. Packed with modern technologies and essential integrations.",
  buttonHref = "https://vercel.com/templates/next.js/next-js-saas-starter",
  rotatingTexts = ["Innovative", "Scalable", "Modern", "Powerful"],
  profileCardProps = {
    name: "Harold Park",
    title: "Full Stack Developer",
    handle: "haroldpark",
    status: "Available for hire",
    contactText: "Get in touch",
  },
}: HeroSectionProps) {
  const avatarUrl =
    "https://private-user-images.githubusercontent.com/14915286/463914970-2ac5f693-8c3d-48f3-9311-c915700a42f7.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTIwMTY4MzYsIm5iZiI6MTc1MjAxNjUzNiwicGF0aCI6Ii8xNDkxNTI4Ni80NjM5MTQ5NzAtMmFjNWY2OTMtOGMzZC00OGYzLTkzMTEtYzkxNTcwMGE0MmY3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA3MDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNzA4VDIzMTUzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQwMDdlYjVjNmY3YTYwMTY5OGVhNDE5Y2NlYzgyNjE2MzliMzA1NGQwNTk5NzQ0Yjc1NjA3YmQwZDFiNjMwZTAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.Ax3-8uQoucePQw0eFavzUvEFzUxbDcAGQF-u-Ky2234";

  return (
    <section className="py-20 relative">
      {/* LetterGlitch foreground overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <LetterGlitch
          glitchColors={["#2b4539", "#61dca3", "#76ca72", "#29752a"]}
          glitchSpeed={50}
          centerVignette={false}
          outerVignette={true}
          smooth={true}
        />
      </div>

      {/* Main content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:max-w-3xl md:mx-auto lg:col-span-6 lg:text-left bg-white/30 backdrop-blur-xs rounded-lg p-6 shadow-lg text-center">
        <div className="flex items-center gap-4">
          <div className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl w-full">
            <Logo size="lg" showText={false} />
            <div className="flex flex-col items-center my-16">
              <RotatingText
                texts={["Technical Consulting", "Mentorship", "Teaching"]}
                className="text-primary font-secondary"
                auto={true}
                loop={true}
                rotationInterval={3000}
                splitBy="words"
              />
              <RotatingText
                texts={[
                  "resolve business pain-points",
                  "career-change into the tech industry",
                  "learn new skills through the socratic method",
                ]}
                className="text-secondary text-2xl justify-end"
                auto={true}
                loop={true}
                rotationInterval={3000}
                splitBy="words"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="pb-3">
            <a href={buttonHref} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="text-lg rounded-full"
              >
                <ShinyText
                  text="Check Out My Services"
                  disabled={false}
                  speed={3}
                />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
