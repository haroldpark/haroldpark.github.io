import { Mail, FileText, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-[38px] leading-11 md:text-[65px] font-bold md:leading-[80px]">
            <div>
              My name is{" "}
              <span className="bg-orange-500 text-white px-3 py-1 inline-block">
                Harold Park
              </span>
              , a Software Engineer currently residing in{" "}
              <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">
                Lyons, NY
              </span>
            </div>
          </h2>

          <p className="text-[#393939] text-[16px] md:text-[18px] font-medium leading-[28px] md:leading-[30px] max-w-xl"></p>

          <div className="flex sm:flex-row flex-wrap gap-4 sm:gap-7 pt-4">
            <a
              href="mailto:theharoldpark@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#0B0B0B] border-[3px] border-black text-white hover:bg-black/70 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[169px]">
                {/* <Button className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]"> */}
                <Mail className="w-5 h-5" />
                Email me
              </Button>
            </a>
            <a href="Resume_HaroldPark_Dev_2026.pdf" target="_blank">
              <Button
                variant="outline"
                className="bg-white border-[3px] border-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[169px]"
              >
                <FileText className="w-5 h-5" />
                See Resume
              </Button>
            </a>
            <a
              href="https://calendar.app.google/dP9uFU8UuhV8F3m19"
              target="_blank"
            >
              <Button
                variant="outline"
                className="bg-[#2F81F7] border-[3px] border-black text-white hover:bg-blue-400 hover:text-white rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[169px]"
              >
                <CalendarDays className="w-5 h-5" />
                Meet me
              </Button>
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-square bg-[#FDB927] border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <img
              src="/images/headshot-square.jpg"
              alt="Illustrated character avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
