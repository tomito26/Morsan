import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const HeroSection = ({
  hero,
  callToAction = true,
  className,
}: {
  hero: { image: string; title: string; description: string };
  callToAction?: boolean;
  className?: string;
}) => {
  return (
    <div className={cn("h-[84vh] w-full relative", className)}>
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
          <p className="text-white font-medium mt-3">{hero.description}</p>
          {callToAction && (
            <div className="flex h-full w-full items-center gap-4 mt-4">
              <Button className="bg-[#0B2E4A] text-white hover:bg-[#0B2E4A]/90 font-medium">
                Book A Meeting
              </Button>
              <Button className="border-white border bg-transparent hover:bg-white hover:text-[#0B2E4A]">
                Get Started
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
