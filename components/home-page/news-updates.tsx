import React from "react";
import Link from "next/link";
import { CalendarDays, ChevronRight } from "lucide-react";
import Image from "next/image";
import { news_updates } from "@/lib/constants";

const NewsUpdatesSection = () => {

  return (
    <div className="md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px] px-4 py-16">
      <div className="flex md:flex-row flex-col justify-between">
        <div>
          <h1 className="text-[#0B2E4A] font-bold uppercase text-sm">
            News Updates
          </h1>
          <h2 className="text-2xl md:text-5xl font-bold text-monchrome mt-3 mb-4 w-8/12">
            Read Our Latest Articles, Tips & News
          </h2>
        </div>
        <div className="mb-3 md:mb-0">
          <Link
            href="/news-updates"
            className="text-base text-[#0B2E4A] hover:text-[#0B2E4A]/80 font-medium inline-block"
          >
            See More News
          </Link>
          <ChevronRight className="h-4 w-4 stroke-[#0B2E4A] inline-block" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {news_updates.map((news, index) => (
          <div className="shadow-sm" key={index}>
            <div className="h-[250px] w-full relative">
              <Image
                src={news.image}
                alt={news.title}
                fill
                className="object-cover absolute object-center"
              />
            </div>
            <Link href="#">
              <h1 className="text-lg font-bold mt-5 hover:text-[#0B2E4A]">
                {news.title.length > 60
                  ? `${news.title.substring(0, 60)}...`
                  : news.title}
              </h1>
            </Link>
            <p className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5" />
              <span>
                {new Date().toLocaleDateString("en", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsUpdatesSection;
