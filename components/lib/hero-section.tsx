import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = ({
  hero,
  callToAction = true,
  className,
  page,
}: {
  hero: { image: string; title: string; description?: string };
  callToAction?: boolean;
  className?: string;
  page?: string;
}) => {
  return (
    <div className={cn("h-[90vh] w-full relative", className)}>
      <Image
        src={hero.image}
        alt="Morsan Hr Landing page"
        fill
        className="object-cover object-center absolute"
      />
      <div className="bg-[#0B2E4A]/70 h-full w-full flex items-center absolute z-50  md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px] px-4">
        <div className="w-full md:w-8/12">
          <h1 className="text-white font-bold md:text-6xl text-3xl ">
            {hero.title}
          </h1>
          <p className="text-white font-medium mt-6">{hero.description}</p>
          {callToAction ? (
            <div className="flex h-full w-full items-center gap-4 mt-6">
              <Button className="bg-[#134c7a] text-white hover:bg-[#134c7a]/90 font-medium">
                Book A Meeting
              </Button>
              <Link href={"/about"}>
                <Button className="border-white border bg-transparent hover:bg-white hover:text-[#0B2E4A]">
                  Get Started
                </Button>
              </Link>
            </div>
          ) : (
            <p className="flex items-center">
              <Link href="/" className="text-white text-base font-medium">Home</Link> <ChevronRight className="h-4 w-4 stroke-white"/>
              <span className="text-white text-base font-medium">{page}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
