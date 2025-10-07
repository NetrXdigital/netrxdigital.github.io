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
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

function useAutoScroller(ref: React.RefObject<HTMLDivElement>, delayMs = 180000) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let paused = false;
    const onEnter = () => (paused = true);
    const onLeave = () => (paused = false);

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("focusin", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("focusout", onLeave);

    const id = setInterval(() => {
      if (paused || !ref.current) return;

      const node = ref.current;
      const nextLeft = node.scrollLeft + node.clientWidth * 0.95;
      const maxLeft = node.scrollWidth - node.clientWidth - 4; // tolerance
      if (nextLeft >= maxLeft) {
        node.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        node.scrollBy({ left: node.clientWidth * 0.95, behavior: "smooth" });
      }
    }, delayMs);

    return () => {
      clearInterval(id);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("focusin", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("focusout", onLeave);
    };
  }, [ref, delayMs]);
}

function ArrowButton({
  dir,
  onClick,
  className = "",
}: {
  dir: "left" | "right";
  onClick: () => void;
  className?: string;
}) {
  const Icon = dir === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      aria-label={dir === "left" ? "Scroll left" : "Scroll right"}
      onClick={onClick}
      className={`inline-flex items-center justify-center
        h-10 w-10 rounded-full border border-border
        bg-card/70 backdrop-blur
        hover:bg-card transition
        focus:outline-none focus-visible:ring-2 focus-visible:ring-ring
        ${className}`}
    >
      <Icon className="h-5 w-5" />
    </button>
  );
}

// ===== Testimonials carousel =====
function TestimonialsSection() {
  const items = [
    {
      quote:
        "NetrX Digital helped us boost our online presence and generate consistent leads through smart marketing strategies. Their SEO and social media expertise made a real difference in our growth. Highly recommended!",
      name: "Shouaib Ahmed",
      role: "CEO, Instant Hub",
      logo: "/logo/instant_hub.webp",
    },
    {
      quote:
        "NetrX Digital helped my business grow tremendously. Their marketing strategies and SEO expertise brought real results — more visibility, more leads, and a stronger online presence. Highly recommend their services for anyone serious about growing their brand online.",
      name: "Raza",
      role: "Founder, Raza Pioneer Labs",
      logo: "/logo/raza.webp",
    },
    {
      quote:
        "NetrX Digital has truly transformed our business growth journey. Their expert digital marketing strategies, attention to detail, and result-driven approach helped us reach a wider audience and establish a stronger online presence. Highly professional and committed team — we couldn’t have asked for a better partner in our digital growth.",
      name: "Priya Patel",
      role: "Executive, Kosut Builders and Developers Pvt. Ltd.",
      logo: "/logo/kosut.webp",
    },
    {
      quote:
        "NetrX Digital helped my business grow online with professional SEO and digital marketing services. Highly reliable, creative, and result-driven team.",
      name: "Anshu",
      role: "Founder, StylizeUnique",
      logo: "/logo/stylizeunique.webp",
    },
    {
      quote:
        "NetrX Digital has been a game-changer for my gym. Their marketing strategies brought in more clients than I ever expected, and my local visibility improved drastically. Highly professional and result-oriented service — truly helped my business grow fast.",
      name: "Parth Singh",
      role: "Founder, S R Fitness",
      logo: "/logo/s_r_fitness.webp",
    },
  ];

  const scrollerRef = useRef<HTMLDivElement>(null);
  useAutoScroller(scrollerRef, 3000); // 3 seconds

  const scrollByAmount = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const delta = el.clientWidth * 0.95 * (dir === "left" ? -1 : 1);
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-20 bg-card/30">
      <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-4xl font-bold">What clients say</h2>
          <div className="hidden md:flex gap-2">
            <ArrowButton dir="left" onClick={() => scrollByAmount("left")} />
            <ArrowButton dir="right" onClick={() => scrollByAmount("right")} />
          </div>
        </div>

        <div className="relative">
          {/* mobile arrow buttons */}
          <div className="md:hidden absolute inset-y-1/2 -translate-y-1/2 left-2 z-10">
            <ArrowButton dir="left" onClick={() => scrollByAmount("left")} />
          </div>
          <div className="md:hidden absolute inset-y-1/2 -translate-y-1/2 right-2 z-10">
            <ArrowButton dir="right" onClick={() => scrollByAmount("right")} />
          </div>

          <div
            ref={scrollerRef}
            className="
              group relative
              overflow-x-auto overflow-y-hidden
              snap-x snap-mandatory
              scroll-smooth
              hide-scrollbar
              flex gap-6
              pr-2
            "
            aria-label="Client testimonials"
            tabIndex={0}
          >
            {items.map((t, i) => (
              <article
                key={i}
                className="
                  min-w-[85%] sm:min-w-[70%] md:min-w-[48%] lg:min-w-[38%]
                  snap-start scroll-ml-4
                  rounded-2xl border border-border bg-card
                  p-6 shadow-sm
                "
              >
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={t.logo}
                    alt={`${t.name} logo`}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded object-contain"
                  />
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </div>
                <p className="text-lg leading-relaxed">“{t.quote}”</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== Client logos carousel =====
function ClientsLogosSection() {
  const clients = [
    { name: "Instant Hub", logo: "/logo/instant_hub.webp" },
    { name: "Raza Pioneer Labs", logo: "/logo/raza.webp" },
    { name: "Kosut Builders and Developers Pvt. Ltd.", logo: "/logo/kosut.webp" },
    { name: "StylizeUnique", logo: "/logo/stylizeunique.webp" },
    { name: "S R Fitness", logo: "/logo/s_r_fitness.webp" },
  ];

  const scrollerRef = useRef<HTMLDivElement>(null);
  useAutoScroller(scrollerRef, 3000); // 3 seconds

  const scrollByAmount = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const delta = el.clientWidth * 0.95 * (dir === "left" ? -1 : 1);
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section className="py-14 md:py-16 bg-background">
      <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-4xl font-bold">Brands we’ve worked with</h2>
          <div className="hidden md:flex gap-2">
            <ArrowButton dir="left" onClick={() => scrollByAmount("left")} />
            <ArrowButton dir="right" onClick={() => scrollByAmount("right")} />
          </div>
        </div>

        <div className="relative">
          {/* mobile arrows */}
          <div className="md:hidden absolute inset-y-1/2 -translate-y-1/2 left-2 z-10">
            <ArrowButton dir="left" onClick={() => scrollByAmount("left")} />
          </div>
          <div className="md:hidden absolute inset-y-1/2 -translate-y-1/2 right-2 z-10">
            <ArrowButton dir="right" onClick={() => scrollByAmount("right")} />
          </div>

          <div
            ref={scrollerRef}
            className="
              relative overflow-x-auto overflow-y-hidden
              snap-x snap-mandatory scroll-smooth hide-scrollbar
              flex gap-6 items-center
              py-2
            "
            aria-label="Client logos"
            tabIndex={0}
          >
            {clients.map((c, i) => (
              <div
                key={i}
                className="
                  min-w-[45%] sm:min-w-[32%] md:min-w-[22%] lg:min-w-[18%]
                  snap-start scroll-ml-4
                  rounded-xl border border-border bg-card
                  px-4 py-6 flex items-center justify-center
                "
                title={c.name}
              >
                <Image
                  src={c.logo}
                  alt={`${c.name} logo`}
                  width={160}
                  height={80}
                  className="h-10 w-auto object-contain opacity-90"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


export default function Home() {
  return (
    <div
      className="overflow-clip inset-0 -z-10 h-full w-full bg-background
      bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)]
      bg-[size:14px_24px]"
    >
      {/* ====================== HERO WITH VIDEO BG ====================== */}
      <section
        className="relative pt-24 md:pt-28 min-h-[80vh] md:min-h-[86vh] flex items-center overflow-hidden"
        aria-label="Hero"
      >
        {/* Background video — place file at /public/videos/hero-bg.mp4 */}
        
      <video
        className="absolute inset-0 h-full w-full object-cover pointer-events-none z-0"
        src="/videos/hero-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />


        {/* Readability overlays */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(transparent,rgba(0,0,0,0.35))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:14px_24px]" />

        {/* Content */}
        <div className="relative z-10 md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
          <h1 className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            <CoverDemo />
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-center justify-items-center md:mx-auto mt-10 md:mt-16">
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center text-white/95 hover:scale-105">
                <PiCheckBold className="text-xl text-blue-400" />
                Design
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center text-white/95 hover:scale-105">
                <PiCheckBold className="text-xl text-blue-400" />
                Development
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center text-white/95 hover:scale-105">
                <PiCheckBold className="text-xl text-blue-400" />
                Marketing
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center text-white/95 hover:scale-105">
                <PiCheckBold className="text-xl text-blue-400" />
                Strategy
              </p>
            </BoxReveal>
          </div>
        </div>
      </section>
      {/* ==================== /HERO WITH VIDEO BG ===================== */}

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
                Discover the proven strategies and results that have helped our
                clients achieve remarkable growth in their digital presence
              </p>
            </div>

            <div className="relative max-w-5xl mx-auto">
              <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-70"></div>
                <div className="absolute -top-2 -right-6 w-6 h-6 bg-indigo-400 rounded-full opacity-50"></div>
                <div className="absolute -bottom-6 -left-2 w-10 h-10 bg-purple-400 rounded-full opacity-40"></div>

                <div className="relative aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/nFzc15dg1fc?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=1"
                    title="Digital Marketing Success Stories - How We Transform Businesses"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>

              <div className="text-center mt-8">
                <div className="inline-flex items-center gap-x-3 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg">
                  <PiPlayFill className="text-blue-500 text-xl" />
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    Watch the full case study above
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PiCheckBold className="text-blue-500 text-xl" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Real Results</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  See actual case studies and measurable outcomes from our
                  campaigns
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

      {/* Full Width CTA Section */}
      <section className="w-full py-20 bg-card">
        <div className="px-6 md:px-12 lg:px-20">
          <p className="text-center text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500">
            Schedule a call with us to discuss your project and get a quote in
            minutes
          </p>

          <div className="flex justify-center items-center gap-x-4">
            <Link
              href="/meeting"
              className="py-3 px-10 md:px-16 md:text-m hover:bg-[#abcbff] rounded-[6px]
              border-2 border-black dark:border-white bg-[#121212] text-white transition duration-200 
              hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]
              dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
            >
              Book a Call
            </Link>
            <Link
              href={"/showcase"}
              className="py-3 px-10 md:px-16 md:text-m hover:bg-[#abcbff] rounded-[6px]
              border-2 border-black dark:border-white bg-[#121212] text-white transition duration-200 
              hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]
              dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
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
                    <NumberTicker value={20} /> +
                    <p className="text-gray-500 text-sm md:text-md">
                      Happy Clients
                    </p>
                  </h1>
                </div>

                <div className="w-px bg-gray-300 self-stretch"></div>

                <div className="flex-1 min-w-0">
                  <h1 className="text-blue-500 text-3xl md:text-5xl whitespace-nowrap overflow-hidden">
                    <NumberTicker value={32} /> +
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
                  { logo: "/logo/logo.webp", name: "Logo" },
                  { logo: "/logo/logo.webp", name: "Logo" },
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
                <p className="text-gray-500 dark:text-gray-300">
                  {service.description}
                </p>
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

            <p className="text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
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
      {/* === NEW: Testimonials carousel === */}
      <TestimonialsSection />

      {/* === NEW: Client logos carousel === */}
      <ClientsLogosSection />

      <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <LetsMakeThingsHappenSection />
      </section>

      <Footer />
    </div>
  );
}
