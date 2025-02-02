import { BadgeCheck, Briefcase, Hourglass, Users } from "lucide-react";

export const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Our Services",
    name: "services",
    values: [
      {
        title: "Talent Acquisition",
        href: "/talent-acquisition",
      },
      {
        title: "Talent Management",
        href: "/talent-management",
      },
      {
        title: "Human Resource Support",
        href: "/human-resource-support",
      },
    ],
  },
  {
    title: "Careers",
    href: "/careers",
  },
  {
    title: "News Updates",
    href: "/news-updates",
  },
];

export const testimonials = [
  {
    id: 1,
    testimony:
      "MonsarHR has been a crucial partner for our business. Their expertise in recruitment and performance management helped us build a strong, talented team. They truly understand our needs and deliver solutions that work.",
    client: {
      name: "Emily Thompson",
      title: "Managing Director",
      company: "Nova Designs",
      profile_photo_url:
        "/assets/pexels-divinetechygirl-1181519.jpg",
    },
  },
  {
    id: 1,
    testimony:
      "Outsourcing our HR functions to MonsarHR was the best decision we made. Their team handles everything, from payroll to compliance, with unmatched professionalism and attention to detail. It has allowed us to focus on growing our business.",
    client: {
      name: "Michael T.",
      title: "CEO",
      company: "GreenEdge Enterprises",
      profile_photo_url:
        "/assets/pexels-spencer-selover-142259-428333.jpg",
    },
  },
];

export const metrics = [
  {
    title: "10+",
    description: "Years of Experience",
    icon: Hourglass,
  },
  {
    title: "100+",
    description: "Projects Completed",
    image: "/assets/Human-Resources-Team-Settings--Streamline-Ultimate.png",
    icon: Briefcase,
  },
  {
    title: "2000+",
    description: "Placed Employees",
    image: "/assets/Buildings-1--Streamline-Ultimate.png",
    icon: Users,
  },

  {
    title: "100%",
    description: "Client Satisfaction",
    icon: BadgeCheck,
  },
];

export const news_updates = [
  {
    title: "HR Compliance Made Simple: Avoiding Common Legal Pitfalls",
    image:
      "/assets/law-enforcement-agents-sitting-flooor-investigating-crime-together-african-american-man-woman-detective-partners-analyzing-case-files-drinking-coffee-night-time.jpg",
  },
  {
    title:
      "Transforming Performance Management: Best Practices for Modern Organizations",
    image: "/assets/front-view-smiley-man-doing-presentation-meeting.jpg",
  },
  {
    title:
      "Workplace Wellness: Prioritizing Mental Health for a Thriving Workforce",
    image:
      "/assets/diverse-team-vr-developers-chatting-while-testing-product.jpg",
  },
];
export   const our_services = [
  {
    title: "Talent Acquisition",
    description:
      "We specialize in providing comprehensive talent acquisition services to help businesses attract, identify, and hire exceptional candidates who align with their goals and organizational culture.",
    image: "/assets/talent.png",
    link: "talent-acquisition",
  },
  {
    title: "Human Resource Support",
    description:
      "We offer end-to-end Human Resource Support to help businesses create a seamless HR experience, reduce administrative burdens, and foster a productive workplace. ",
    image: "/assets/human-resource.png",
    link: "/human-resource-support",
  },
  {
    title: "Talent Management",
    description:
      "We handles critical HR and compliance functions for clients who are outsourcing their workforce or hiring talent from various locations.",
    image: "/assets/talent-management.png",
    link: "talent-management",
  },
];
export const our_benefits = [
  {
    title: "Proven Expertise",
    description:
      "Our team comprises seasoned HR professionals with extensive experience across diverse industries",
    icon: "/assets/experience.png"
  },
  {
    title: "Customized Approach",
    description:
      " Our services are personalized to align with your goals, culture, and challenges.",
    icon: "/assets/hand.png"
  },
  {
    title: "Comprehensive Solutions",
    description:
      "From talent acquisition and HR support to compliance management and employee engagement, we provide end-to-end HR solutions",
    icon: "/assets/puzzle.png"
  },
  {
    title: "Time and Cost Efficiency",
    description:
      "Outsource your HR needs to us and save time, reduce overhead costs, and gain access to premium services without the hassle of building an in-house HR team.",
    icon: "/assets/money-strategy.png"
  },
  {
    title: "Focus on Results",
    description:
      "Our strategies are designed to deliver measurable outcomes—whether it's attracting top talent, reducing turnover, or improving employee productivity.",
    icon: "/assets/result.png"
  },
  // {
  //   title: "Technology Integration",
  //   description:
  //     "We leverage modern HR tools and systems to streamline processes, enhance efficiency, and provide real-time insights into your workforce.",
  // },
];

export const industries = [
  {
    name: "Manufacturing Industry",
    description: "Food products",
    image:
      "/assets/factory-workshop-interior-machines-glass-production-background.jpg",
  },
  {
    name: "Retail industry",
    description: "Gifting and home improvements",
    image: "/assets/Retail-Sector.jpg",
  },
  {
    name: "Healthcare industry",
    description: "Hospitals and pharmaceuticals",
    image:
      "/assets/caucasian-teenboy-as-doctor-consulting-giving-recommendation-treating-little-doctor-discussing-studying-with-older-colleague-concept-childhood-human-emotions-health-medicine.jpg",
  },
  {
    name: "Food and beverage industry",
    description: "Restaurants",
    image: "/assets/male-baker-standing-table-with-dough-bakery.jpg",
  },
  {
    name: "Financial industry",
    description: "Sacco",
    image: "/assets/stack-money-coin-with-trading-graph.jpg",
  },
  {
    name: "Service industry",
    description: "Digital and creative sector, cosmetic sector",
    image:
      "/assets/african-american-helpline-employee-working-call-center-reception-with-multiple-monitors-male-operator-using-telecommunication-help-clients-customer-service-support-remote-network.jpg",
  },
];
export  const benefits = [
  "Attract Top Talent",
  "Streamlined Recruitment Process",
  "Enhanced Employee Retention",
  "Customized Training and Development Programs",
];
