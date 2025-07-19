"use client";

import Image from "next/image";
import Link from "next/link";
import { PiCheckBold } from "react-icons/pi";
import NumberTicker from "@/components/magicui/number-ticker";
import { IconStarFilled } from "@tabler/icons-react";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import Header from "@/components/Header";
import Footer from "@/components/footer";

export default function About() {
  return (
    <div
      className="overflow-clip 
 inset-0 
 -z-10 h-full w-full bg-background
  bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)]
   bg-[size:14px_24px]"
    >

      {/* Hero Section */}
      <main className="pt-20 pb-10">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-medium mb-6 text-foreground">
              About{" "}
              <span className="text-blue-500 flex gap-x-1 items-center justify-center">
                <Image
                  src={"/icons/squiggle.svg"}
                  width={10000}
                  height={10000}
                  className="w-8"
                  alt="image"
                />
                NetrX
                <Image
                  src={"/icons/star.svg"}
                  width={10000}
                  height={10000}
                  className="w-8 mb-8"
                  alt="image"
                />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground md:w-3/4 mx-auto">
              We are a passionate team of Marketing dedicated to transforming your business vision into reality through cutting-edge digital solutions.
            </p>
          </div>
        </div>
      </main>

      {/* Our Story Section */}
      <section className="py-20 bg-card">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium mb-6 text-card-foreground">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded with a mission to bridge the gap between digital solutions and business success, NetrX has been at the forefront of digital transformation for businesses of all sizes.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We believe that every business deserves a powerful online presence that not only looks stunning but also drives real results and growth.
              </p>
              <p className="text-lg text-muted-foreground">
                Our journey began with a simple belief: technology should empower businesses, not complicate them. Today, we continue to push boundaries and deliver exceptional digital experiences.
              </p>
            </div>
            <div className="relative">
              <Image
                src={"/logo/logo.webp"}
                width={500}
                height={400}
                className="w-full rounded-lg shadow-lg"
                alt="About NetrX Digital"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-foreground">
              Our Impact in Numbers
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-blue-500 text-4xl md:text-6xl font-bold mb-2">
                <NumberTicker value={5} />+
              </h3>
              <p className="text-muted-foreground text-lg">Happy Clients</p>
            </div>
            <div>
              <h3 className="text-blue-500 text-4xl md:text-6xl font-bold mb-2">
                <NumberTicker value={2} />+
              </h3>
              <p className="text-muted-foreground text-lg">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-blue-500 text-4xl md:text-6xl font-bold mb-2">
                <NumberTicker value={1} />+
              </h3>
              <p className="text-muted-foreground text-lg">Years Experience</p>
            </div>
            <div>
              <h3 className="text-blue-500 text-4xl md:text-6xl font-bold mb-2">
                <NumberTicker value={99} />%
              </h3>
              <p className="text-muted-foreground text-lg">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-card-foreground">
              What Drives Us
            </h2>
            <p className="text-xl text-muted-foreground md:w-2/3 mx-auto">
              Our core values shape everything we do and guide us in delivering exceptional results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-muted/50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <PiCheckBold className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Innovation First</h3>
              <p className="text-muted-foreground text-lg">
                We stay ahead of the curve with the latest technologies and design trends to deliver cutting-edge solutions that give you a competitive advantage.
              </p>
            </div>
            
            <div className="text-center p-8 bg-muted/50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <PiCheckBold className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Client-Centric</h3>
              <p className="text-muted-foreground text-lg">
                Your success is our priority. We work closely with you to understand your goals and deliver personalized solutions that exceed expectations.
              </p>
            </div>
            
            <div className="text-center p-8 bg-muted/50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <PiCheckBold className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Results Driven</h3>
              <p className="text-muted-foreground text-lg">
                We don&apos;t just create beautiful websites - we build digital experiences that convert visitors into customers and drive business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-foreground">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground md:w-2/3 mx-auto">
              Behind every successful project is our dedicated team of designers, developers, and digital strategists.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Team member cards */}
            <div className="text-center">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                <Image
                  src={"/images/team/ceo.webp"}
                  width={128}
                  height={128}
                  alt="CEO and Co-founder"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Prashant Kumar</h3>
              <p className="text-muted-foreground">CEO & Co-founder</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                <Image
                  src={"/images/team/cto.webp"}
                  width={128}
                  height={128}
                  alt="CTO"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Anmol Dhar</h3>
              <p className="text-muted-foreground">CTO & Co-founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose NetrX Section */}
      <section className="py-20 bg-card">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-card-foreground">
              Why Choose NetrX?
            </h2>
            <p className="text-lg text-muted-foreground md:w-2/3 mx-auto mb-8">
              With over 5+ happy clients and 2+ successful projects, we have the experience and expertise to take your business to the next level. Our comprehensive approach combines design, development, marketing, and strategy to deliver exceptional results.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link
                href="/meeting"
                className="py-4 px-10 text-lg hover:bg-[#abcbff] rounded-[6px] border-2 border-black dark:border-white text-white bg-[#121212] transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
              >
                Let&apos;s Work Together
              </Link>
              
              <Link
                href="/showcase"
                className="py-4 px-10 text-lg bg-background border-2 border-black dark:border-white rounded-[6px] hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] transition duration-200 text-foreground"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <LetsMakeThingsHappenSection />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}