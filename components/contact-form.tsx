"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Phone, Mail } from "lucide-react";
import Link from "next/link";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  contactNumber: z
    .string()
    .min(10, "Contact number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type FormData = z.infer<typeof formSchema>;

interface ContactProps {
  isHomepage?: boolean;
}

export function ContactFormComponent({ isHomepage }: ContactProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call

    // const response = await fetch('https://script.google.com/macros/s/AKfycbw8rhKoytpXWWi3QTF9tD5442qjqTXM6v9uV_2PmvIVzzCsFibUrk0GjiUW7KvR2K3vXA/exe', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   body: new URLSearchParams({
    //     firstName: data.firstName,
    //     lastName: data.lastName,
    //     contactNumber: data.contactNumber,
    //     email: data.email,
    //     message: data.message,
    //   }).toString(), // Convert to string
    // });

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbw8rhKoytpXWWi3QTF9tD5442qjqTXM6v9uV_2PmvIVzzCsFibUrk0GjiUW7KvR2K3vXA/exec",
      {
        method: "POST",
        body: new URLSearchParams({
          firstName: data.firstName,
          lastName: data.lastName,
          contactNumber: data.contactNumber,
          email: data.email,
          message: data.message,
        }),
      }
    );

    console.log(response);

    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();
  };

  return (
    <div className="bg-yellow-500/70  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {
          isHomepage && (
            <div>
            <h1 className="text-5xl text-white drop-shadow-md font-bold text-center mb-2">Contact Us</h1>
            <p className="text-center text-blue-800 text-lg mb-8">
              Any question or remarks? Just write us a message!
            </p>
          </div>
          )
        }
        

        <div className="bg-white rounded-lg max-w-5xl mx-auto shadow-xl overflow-hidden">
          <div className="flex flex-col sm:flex-row ">
            <div className="bg-blue-600 p-8 text-white">
              <h2 className="text-4xl text-yellow-400 font-bold mb-4">
                Contact Information
              </h2>
              <p className="mb-4">Chat with us over a cup of coffee</p>
              <div className="space-y-4 mt-14">
                <Link href="tel:8860341444" className="flex items-center">
                  <Phone className="mr-2 text-yellow-400" /> +91 88603 41444
                </Link>
                <Link href="mailto:cecommunik@gmail.com" className="flex items-center">
                  <Mail className="mr-2  text-yellow-400" />{" "}
                  cecommunik@gmail.com
                </Link>
                <Link href="https://www.instagram.com/Communik_ce/" target="_blank" className="flex items-center">
                  <Instagram className="mr-2  text-yellow-400" /> @Communik_ce
                </Link>
                <Link href="https://www.linkedin.com/in/aarti-k-communik/" target="_blank" className="flex items-center">
                  <Linkedin className="mr-2  text-yellow-400" /> @communik-ce
                </Link>
              </div>
            </div>

            <div className="p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      {...register("firstName")}
                      placeholder="First Name"
                      className={errors.firstName ? "border-red-500" : ""}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Input
                      {...register("lastName")}
                      placeholder="Last Name"
                      className={errors.lastName ? "border-red-500" : ""}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <Input
                    {...register("contactNumber")}
                    placeholder="Enter your phone (e.g. +919876543210)"
                    className={errors.contactNumber ? "border-red-500" : ""}
                  />
                  {errors.contactNumber && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.contactNumber.message}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    {...register("email")}
                    placeholder="Enter a valid email address"
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <Textarea
                    {...register("message")}
                    placeholder="Enter your message"
                    className={errors.message ? "border-red-500" : ""}
                    rows={4}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </form>
              {submitSuccess && (
                <p className="text-green-500 mt-4 text-center">
                  Thank you for your message. We&apos;ll get back to you soon!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
