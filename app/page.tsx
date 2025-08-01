"use client";

import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
import BoxRevealDemo from "@/components/demos/box-reveal-demo";
import { CoverDemo } from "@/components/demos/cover-demo";
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import { WordPullUpDemo } from "@/components/demos/word-pull-up-demo";
import BoxReveal from "@/components/magicui/box-reveal";
import NumberTicker from "@/components/magicui/number-ticker";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import Image from "next/image";
import Link from "next/link";
import { PiCheckBold, PiPlayFill } from "react-icons/pi";
import { Element } from "react-scroll";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import Footer from "@/components/footer";

const services = [
  {
    icon: "/images/web_development.png",
    title: "Web Design + Development",
    description:
      "Take your business to the next level with our web design and development services",
  },
  {
    icon: "/images/seo.png",
    title: "Search Engine Optimization",
    description:
      "Get your website to the top of search engine results with our SEO services",
  },
  {
    icon: "/images/content_creation.png",
    title: "Content Creation",
    description:
      "With our content creation services, we help businesses drive results",
  },
  {
    icon: "/images/social_media_marketing.png",
    title: "Social Media Marketing",
    description:
      "Boost your brand's online presence with our social media marketing services",
  },
  {
    icon: "/images/email_marketing.png",
    title: "Email Marketing",
    description:
      "Interact with your customers and increase sales with our email marketing services",
  },
  {
    icon: "/images/pay_per_click.png",
    title: "Pay-Per-Click Advertising",
    description:
      "Don't waste money on ineffective advertising. Our PPC services help you reach your target audience",
  },
];

export default function Home() {
  return (
    <div
      className="overflow-clip 
 inset-0 
 -z-10 h-full w-full bg-background
  bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)]
   bg-[size:14px_24px]"
    >
      {/* Hero Section */}
      <section className="md:pb-10 pt-20">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
          <h1>
            <CoverDemo />
          </h1>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-center justify-items-center md:mx-auto mt-10 md:mt-16">
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Design
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Development
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Marketing
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Strategy
              </p>
            </BoxReveal>
          </div>
          </div>
      </section>

      {/* VSL Video Section */}
      <Element name="video">
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
          <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Watch How We{" "}
                <span className="text-blue-500 relative">
                  Transform
                  <Image
                    src={"/icons/squiggle.svg"}
                    width={10000}
                    height={10000}
                    className="absolute -bottom-2 left-0 w-full h-3"
                    alt="underline"
                  />
                </span>{" "}
                Businesses
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                Discover the proven strategies and results that have helped our clients 
                achieve remarkable growth in their digital presence
              </p>
            </div>

            <div className="relative max-w-5xl mx-auto">
              {/* Video Container with Enhanced Styling */}
              <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-70"></div>
                <div className="absolute -top-2 -right-6 w-6 h-6 bg-indigo-400 rounded-full opacity-50"></div>
                <div className="absolute -bottom-6 -left-2 w-10 h-10 bg-purple-400 rounded-full opacity-40"></div>
                
                {/* Video Iframe */}
                <div className="relative aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/Pd55mUaMze4?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=1"
                    title="Digital Marketing Success Stories - How We Transform Businesses"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                
                {/* Overlay for better visual appeal */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>

              {/* Call-to-Action Below Video */}
              <div className="text-center mt-8">
                <div className="inline-flex items-center gap-x-3 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg">
                  <PiPlayFill className="text-blue-500 text-xl" />
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    Watch the full case study above
                  </span>
                </div>
              </div>
            </div>

            {/* Video Benefits/Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PiCheckBold className="text-blue-500 text-xl" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Real Results</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  See actual case studies and measurable outcomes from our campaigns
                </p>
              </div>
              
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PiCheckBold className="text-green-500 text-xl" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Proven Strategies</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Learn about the methodologies that drive consistent growth
                </p>
              </div>
              
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PiCheckBold className="text-purple-500 text-xl" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Client Success</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Hear directly from clients about their transformation journey
                </p>
              </div>
            </div>
          </div>
        </section>
      </Element>

      {/* Full Width CTA Section - Moved outside container */}
      <section className="w-full py-20 bg-card">
        <div className="px-6 md:px-12 lg:px-20">
          <p
            className="text-center
             text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500"
          >
            Schedule a call with us to discuss your project and get a quote in
            minutes
          </p>

          <div
            className="
                   flex
                    justify-center
                    items-center
                    gap-x-4
                     "
          >
            <Link
              href="/meeting"
              className="py-3 
              px-10
              md:px-16
        md:text-xl
        hover:bg-[#abcbff] 
        rounded-[6px]
        border-2 
        border-black 
        dark:border-white 
         bg-[#121212] 
         text-white 
         transition 
         duration-200 
         hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
            >
              Book a Call
            </Link>
            <Link
              href={"/showcase"}
              className="
                py-3 
     px-10
     md:px-16
        md:text-xl
        hover:bg-[#abcbff] 
        rounded-[6px]
        border-2 
        border-black 
        dark:border-white
        bg-[#121212] 
        text-white 
        transition 
        duration-200 
        hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
            >
              Showcase
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-20">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
          <div className="md:flex items-center justify-between gap-y-4 my-10 gap-x-28 mx-auto">
            <div className="md:w-2/5">
              <h1 className="text-2xl font-medium text-gray-600 w-4/5">
                Trusted by fast moving brands
              </h1>

              <div className="flex my-6 gap-x-5 w-full">
                <div>
                  <h1 className="text-blue-500 text-3xl md:text-5xl">
                    <NumberTicker value={5} /> +
                    <p className="text-gray-500 text-sm md:text-md">
                      Happy Clients
                    </p>
                  </h1>
                </div>

                <div className="w-px bg-gray-300 self-stretch"></div>

                <div className="flex-1 min-w-0">
                  <h1 className="text-blue-500 text-3xl md:text-5xl whitespace-nowrap overflow-hidden">
                    <NumberTicker value={2} /> +
                    <p className="text-gray-500 text-sm md:text-md">
                      Projects Completed
                    </p>
                  </h1>
                </div>
              </div>
            </div>

            <section className="overflow-hidden mt-10 md:w-4/5">
              <InfiniteMovingLogos
                speed="slow"
                direction="left"
                items={[
                  {
                    logo: "/logo/logo.webp",
                    name: "Logo",
                  },
                  {
                    logo: "/logo/logo.webp",
                    name: "Logo",
                  },
                ]}
              />
            </section>
          </div>
          </div>
      </section>

      {/* Services Section */}
      <Element name="services">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto ">
          <h1>
            <WordPullUpDemo />
          </h1>
          <p className="text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
            All of our services are designed to help your business stand out
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 justify-items-center">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 dark:bg-gray-800 p-4 cursor-pointer hover:scale-105 transition-transform rounded-md"
              >
                <Image
                  src={service.icon}
                  width={10000}
                  height={10000}
                  className="object-contain bg-gray-100 dark:bg-gray-800 p-4 w-full h-40 rounded-md"
                  alt="image"
                />
                <h1 className="text-xl font-medium">{service.title}</h1>
                <p className="text-gray-500 dark:text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Element>

      <section className="py-20">
        <ScrollBasedVelocityDemo />
      </section>

      {/* Process Section */}
      <section className="py-20 bg-card">
      <Element name="process">
        <main className="md:px-0 mx-6 md:mx-auto">
          <h1 className="text-3xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center">
            Our{" "}
            <span className="text-blue-500 flex gap-x-1 items-center">
              {" "}
              <Image
                src={"/icons/squiggle.svg"}
                width={10000}
                height={10000}
                className="w-6"
                alt="image"
              />
              Creative
              <Image
                src={"/icons/star.svg"}
                width={10000}
                height={10000}
                className="w-6 mb-8"
                alt="image"
              />
            </span>{" "}
            Process
          </h1>

          <p className="text-center 
          py-4 md:w-1/2 mx-auto 
          text-xl md:text-2xl text-gray-500">
            All of our services are designed to help your business to get
            noticed.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <AnimatedBeamMultipleOutputDemo />
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 md:ml-0">
              <BoxRevealDemo />
            </div>
          </div>
        </main>
      </Element>
      </section>

      <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <LetsMakeThingsHappenSection />
      </section>

      <Footer />
    </div>
  );
}