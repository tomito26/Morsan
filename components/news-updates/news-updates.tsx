import React from "react";
import HeroSection from "../lib/hero-section";
import { news_updates } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";

const NewsUpdates = () => {
  return (
    <div>
      <HeroSection
        hero={{
          image: "/assets/medium-shot-man-working-home.jpg",
          title: "Our News",
          description: `Home > News Updates`,
        }}
        callToAction={false}
        className="h-[48vh]"
      />
      <div>
        <div className="md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px] px-4 pt-16 pb-20">
          <div>
            <h1 className="text-[#0B2E4A] font-bold uppercase text-sm text-center">
              Our News
            </h1>
            <h2 className="text-2xl md:text-5xl font-bold text-monochrome mt-3 mb-4 text-center">
              Latest Blog & News for You
            </h2>
            <p className="text-base text-center">
              Stay updated with the latest trends, insights, and best practices
              in human resource management. Our blog covers topics like employee
              engagement, recruitment strategies, performance management,
              workplace culture, and HR technology. Whether you&apos;re an HR
              professional, business leader, or simply passionate about people
              management, our articles provide valuable knowledge to help you
              build and sustain a thriving workforce.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[...news_updates, ...news_updates].map((news, index) => (
              <div className="shadow-md hover:shadow-lg" key={index}>
                <div className="h-[250px] w-full relative">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover absolute object-center"
                  />
                </div>
                <Link href="#">
                  <h1 className="text-lg font-bold mt-5 hover:text-[#0B2E4A] px-4">
                    {news.title.length > 60
                      ? `${news.title.substring(0, 60)}...`
                      : news.title}
                  </h1>
                </Link>
                <p className="flex items-center gap-2 px-4 my-4">
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
      </div>
    </div>
  );
};

export default NewsUpdates;
