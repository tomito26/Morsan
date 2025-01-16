"use client"
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import FormFieldWithIcon from "@/components/ui/form-field-with-icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Asterisk, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import validator from "validator";
import * as z from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

const services = [
  { id: 1, name: "Talent Acquisition" },
  { id: 2, name: "Talent Management" },
  { id: 3, name: "Human Resource Support" },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ContactFormSchema = z.object({
  name: z.string(),
  email: z.string().refine(validator.isEmail),
  service: z.string(),
  message: z.string(),
});

const ContactUsForm = () => {
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    defaultValues: {
      name: "",
      email: "",
      service: undefined,
      message: "",
    },
  });

  const handleSendMessage = (data: z.infer<typeof ContactFormSchema>) => {
    console.log(data)
  }
  return (
        <div className="shrink-0 ">
          <h3 className="text-monochrome text-xl font-bold mb-3">
            Send A Message
          </h3>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSendMessage)} className="lg:w-[500px] w-full">
              <div>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="w-full mt-4">
                      <FormLabel className="text-sm font-medium">
                        Name
                      </FormLabel>
                      <FormControl className="w-full">
                        <Input
                          placeholder="Name"
                          {...field}
                          className="text-[14px] w-full"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormLabel className="flex items-start text-sm font-medium gap-x-1">
                        Email
                        <Asterisk className="w-3 h-3 stroke-app-destructive" />
                      </FormLabel>
                      <FormFieldWithIcon FieldIcon={Mail}>
                        <FormControl>
                          <Input
                            placeholder="Enter Email"
                            type="email"
                            {...field}
                            className="auth-form_input-field pl-[42px] pr-[14px] focus-visible:outline-none focus-visible:ring-2 h-9 text-[14px]"
                          />
                        </FormControl>
                      </FormFieldWithIcon>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormLabel className="text-sm font-medium">
                        Services
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="h-10">
                          <SelectTrigger>
                            <SelectValue placeholder="Select Service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {services.map((item) => (
                            <SelectItem value={item.name} key={item.id}>
                              {item.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormLabel className="text-sm font-medium">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Message"
                          {...field}
                          className="text-[14px] h-[120px] resize-none"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <Button className="bg-monochrome hover:bg-monochrome/90  mt-8">Send Message</Button>
            </form>
          </Form>
        </div>
  );
};

export default ContactUsForm;
