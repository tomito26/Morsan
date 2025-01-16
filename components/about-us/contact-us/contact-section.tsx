import { Mail, MapPinned, Phone } from "lucide-react";
import ContactUsForm from "./contact-us-form";

const ContactSection = () => {
  const contact_details = [
    {
      description: "+254 796 470 580",
      icon: Phone,
      title: "Call Us",
    },
    {
      description: "info@morsanhr.co.ke",
      icon: Mail,
      title: "Email Us",
    },
    {
      description:
        "Nairobi Garage - 4th floor  Delta Corner Annex, Ring Rd Westlands Ln, Nairobi",
      icon: MapPinned,
      title: "Office Address",
    },
  ];
  return (
    <div className="md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px] px-4 py-20">
      <div className="flex md:flex-row flex-col-reverse gap-10">
        <div className="flex-1">
          <ContactUsForm />
        </div>
        <div className="flex-1">
          <h1 className="text-[#0B2E4A] font-bold uppercase text-sm">
            Contact Us
          </h1>
          <h2 className="text-2xl md:text-5xl font-bold text-monochrome my-4">
            Get In Touch!
          </h2>
          <p className="text-base">
            Have questions or need HR solutions tailored to your business? Get
            in touch with Us today—we are here to help!
          </p>
          <div className="mt-6">
            {contact_details.map((contact, index) => (
              <div key={index} className="flex gap-4 items-center mb-6">
                <contact.icon className="h-8 w-8 stroke-[#1a4e79] "/>
                <div className="w-1/2">
                  <h3 className="text-monochrome text-lg font-bold ">{contact.title}</h3>
                  <p className="text-base">{contact.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
