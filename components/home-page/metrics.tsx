import { BadgeCheck, Building2, Hourglass, Users } from "lucide-react";

const Metrics = () => {
  const metrics = [
    {
      title: "15+",
      description: "Years of Experience",
      icon: Hourglass
    },
    {
      title: "1000+",
      description: "OutSourced Employees",
      image: "/assets/Human-Resources-Team-Settings--Streamline-Ultimate.png",
      icon: Users
    },
    {
      title: "50+",
      description: "Companies",
      image: "/assets/Buildings-1--Streamline-Ultimate.png",
      icon: Building2
    },

    {
      title: "100%",
      description: "Client Satisfaction",
      icon: BadgeCheck,
    },
  ];
  return (
    <div className="bg-[#0B2E4A] md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px] px-4 py-20">
      <div className="grid grid-cols-1  md:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.title} className="flex items-center gap-2">
           <metric.icon className="h-12 w-12 stroke-white"/>
           <div>
            <h2 className="text-5xl font-bold text-white">{metric.title}</h2>
            <p className="text-base text-white font-medium">{metric.description}</p>
           </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Metrics;
