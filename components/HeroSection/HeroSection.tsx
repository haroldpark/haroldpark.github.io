"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ProfileCard } from "@/components/ProfileCard";
import { RotatingText } from "@/components/RotatingText";
import { LetterGlitch } from "@/components/LetterGlitch";

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
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Left side - Text content */}
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left bg-white/20 backdrop-blur-xs rounded-lg p-6 shadow-lg">
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
              Build Your SaaS
              <span className="block text-orange-500">
                <RotatingText
                  texts={rotatingTexts}
                  className="text-orange-500"
                  auto={true}
                  loop={true}
                  rotationInterval={3000}
                  splitBy="words"
                />
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Solving real-world problems with tech and empathy
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <a href={buttonHref} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg rounded-full"
                >
                  My Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Right side - ProfileCard */}
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center lg:justify-center">
            <ProfileCard
              avatarUrl={avatarUrl}
              name={profileCardProps.name || ""}
              title={profileCardProps.title || ""}
              handle={profileCardProps.handle || ""}
              status={profileCardProps.status || ""}
              contactText={profileCardProps.contactText || ""}
              showUserInfo={false}
              enableTilt={true}
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
