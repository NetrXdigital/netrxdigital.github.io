"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Element } from "react-scroll";
import { ChevronLeft, ChevronRight, PhoneCall, MessageCircle } from "lucide-react";
import { PiCheckBold, PiPlayFill } from "react-icons/pi";

import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
import BoxRevealDemo from "@/components/demos/box-reveal-demo";
import { CoverDemo } from "@/components/demos/cover-demo";
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import { WordPullUpDemo } from "@/components/demos/word-pull-up-demo";
import BoxReveal from "@/components/magicui/box-reveal";
import NumberTicker from "@/components/magicui/number-ticker";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import Footer from "@/components/footer";

/* -------------------- Utilities -------------------- */

const services = [
  { icon: "/images/web_development.png", title: "Web Design + Development", description: "Take your business to the next level with our web design and development services" },
  { icon: "/images/seo.png", title: "Search Engine Optimization", description: "Get your website to the top of search engine results with our SEO services" },
  { icon: "/images/content_creation.png", title: "Content Creation", description: "With our content creation services, we help businesses drive results" },
  { icon: "/images/social_media_marketing.png", title: "Social Media Marketing", description: "Boost your brand's online presence with our social media marketing services" },
  { icon: "/images/email_marketing.png", title: "Email Marketing", description: "Interact with your customers and increase sales with our email marketing services" },
  { icon: "/images/pay_per_click.png", title: "Pay-Per-Click Advertising", description: "Stop wasting ad spend — reach ready-to-buy audiences with smart PPC" },
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
      const maxLeft = node.scrollWidth - node.clientWidth - 4;
      if (nextLeft >= maxLeft) node.scrollTo({ left: 0, behavior: "smooth" });
      else node.scrollBy({ left: node.clientWidth * 0.95, behavior: "smooth" });
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

function ArrowButton({ dir, onClick, className = "" }: { dir: "left" | "right"; onClick: () => void; className?: string }) {
  const Icon = dir === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      aria-label={dir === "left" ? "Scroll left" : "Scroll right"}
      onClick={onClick}
      className={`inline-flex items-center justify-center h-10 w-10 rounded-full border border-border bg-card/70 backdrop-blur hover:bg-card transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${className}`}
    >
      <Icon className="h-5 w-5" />
    </button>
  );
}

/* -------------------- NEW: Scroll progress bar -------------------- */

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(scrolled);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-1 bg-transparent">
      <div
        className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

/* -------------------- NEW: Floating CTA -------------------- */

// function FloatingCTA() {
//   return (
//     <div className="fixed z-[55] right-4 bottom-4 flex flex-col gap-3">
//       <Link
//         href="/meeting"
//         className="group inline-flex items-center gap-2 rounded-full px-4 py-2 text-white shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-xl transition"
//       >
//         <PhoneCall className="h-4 w-4" />
//         <span className="font-medium">Book a Call</span>
//       </Link>
//       <a
//         href="https://wa.me/918722285017" // <- update to your WhatsApp number
//         target="_blank"
//         rel="noreferrer"
//         className="inline-flex items-center justify-center h-11 w-11 rounded-full text-white shadow-lg bg-green-500 hover:bg-green-600 transition"
//         aria-label="Chat on WhatsApp"
//       >
//         <MessageCircle className="h-5 w-5" />
//       </a>
//     </div>
//   );
// }

/* -------------------- Testimonials carousel -------------------- */

/* -------------------- Testimonials carousel (center-mode, no per-card refs) -------------------- */
function TestimonialsSection() {
  const items = [
    { quote: "NetrX Digital helped us boost our online presence and generate consistent leads through smart marketing strategies. Their SEO and social media expertise made a real difference in our growth. Highly recommended!", name: "Shouaib Ahmed", role: "CEO, Instant Hub", logo: "/logo/instanthub.png" },
    { quote: "NetrX Digital helped my business grow tremendously. Their marketing strategies and SEO expertise brought real results — more visibility, more leads, and a stronger online presence.", name: "Raza", role: "Founder, Raza Pioneer Labs", logo: "/logo/raza.png" },
    { quote: "NetrX Digital has truly transformed our business growth journey. Highly professional and committed team — we couldn’t have asked for a better partner.", name: "Priya Patel", role: "Executive, Kosut Builders & Developers", logo: "/logo/Kosut Builder.png" },
    { quote: "Creative, reliable, and fast. Their digital strategy helped my brand stand out online.", name: "Anshu", role: "Founder, StylizeUnique", logo: "/logo/business.png" },
    { quote: "A game-changer for my gym. More clients, better local visibility, and strong ROI.", name: "Parth Singh", role: "Founder, S R Fitness", logo: "/logo/srfitness.png" },
  ];

  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  // Autoplay (respects reduced motion)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const id = setInterval(() => {
      if (!paused) setI((p) => (p + 1) % items.length);
    }, 5000);
    return () => clearInterval(id);
  }, [paused, items.length]);

  const go = (dir: "prev" | "next") =>
    setI((p) => (dir === "next" ? (p + 1) % items.length : (p - 1 + items.length) % items.length));

  return (
    <section className="py-16 md:py-20">
      <div className="mx-6 md:mx-auto xl:w-4/5 2xl:w-[68%]">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-4xl font-bold">What clients say</h2>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => go("prev")}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/70 hover:bg-card transition"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => go("next")}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/70 hover:bg-card transition"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Card */}
        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="rounded-3xl border bg-card p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src={items[i].logo}
                alt={`${items[i].name} logo`}
                width={44}
                height={44}
                className="h-11 w-11 rounded object-contain"
              />
              <div>
                <div className="font-semibold">{items[i].name}</div>
                <div className="text-sm text-muted-foreground">{items[i].role}</div>
              </div>
            </div>

            {/* Quote with fade transition */}
            <div key={i} className="transition-opacity duration-500 opacity-100">
              <p className="text-lg leading-relaxed">“{items[i].quote}”</p>
            </div>

            {/* Mobile controls */}
            <div className="mt-6 flex items-center justify-between md:hidden">
              <button
                onClick={() => go("prev")}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/70 hover:bg-card transition"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => go("next")}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/70 hover:bg-card transition"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  i === idx ? "w-8 bg-primary" : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


/* -------------------- Client logos carousel -------------------- */
function ClientsLogosSection() {
  const clients = [
    { name: "Instant Hub", logo: "/logo/instanthub.png" },
    { name: "Raza Pioneer Labs", logo: "/logo/raza.png" },
    { name: "Kosut Builders and Developers Pvt. Ltd.", logo: "/logo/Kosut Builder.png" },
    { name: "StylizeUnique", logo: "/logo/business.png" },
    { name: "S R Fitness", logo: "/logo/srfitness.png" },
  ];

  // Duplicate for seamless looping
  const duplicatedClients = [...clients, ...clients];

  const scrollerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-14 md:py-16 bg-background overflow-hidden">
      <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground">
            Brands we’ve worked with
          </h2>
        </div>

        <div className="relative">
          <div
            ref={scrollerRef}
            className="flex gap-12 items-center animate-scroll"
            aria-label="Client logos"
            tabIndex={0}
          >
            {duplicatedClients.map((c, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center min-w-[180px] md:min-w-[220px] transition-transform hover:scale-105"
                title={c.name}
              >
                <div className="flex items-center justify-center bg-white rounded-lg shadow-sm p-4">
                  <Image
                    src={c.logo}
                    alt={`${c.name} logo`}
                    width={200}
                    height={100}
                    className="h-24 w-auto md:h-28 object-contain transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Hide scrollbar globally */
        ::-webkit-scrollbar {
          display: none;
        }
        * {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Seamless auto scroll animation */
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          width: max-content;
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
}

/* -------------------- Page -------------------- */

export default function Home() {
  return (
    <div
      className="overflow-clip inset-0 -z-10 min-h-screen w-full bg-background
      bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)]
      bg-[size:14px_24px]"
    >
      <ScrollProgress />
      {/* <FloatingCTA /> */}

      {/* ====================== HERO WITH VIDEO BG ====================== */}
      <section className="relative pt-24 md:pt-28 min-h-[80vh] md:min-h-[86vh] flex items-center overflow-hidden" aria-label="Hero">
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

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/meeting"
              className="inline-flex h-12 items-center justify-center rounded-xl px-6 text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:opacity-95 shadow-lg"
            >
              Get Free Strategy Call
            </Link>
            <Link
              href="/showcase"
              className="inline-flex h-12 items-center justify-center rounded-xl px-6 border border-white/40 text-white/95 hover:bg-white/10"
            >
              See our work
            </Link>
          </div>

          {/* Quick pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-center justify-items-center md:mx-auto mt-10 md:mt-16">
            {["Design", "Development", "Marketing", "Strategy"].map((label) => (
              <BoxReveal key={label} boxColor={"#3b82f6"} duration={0.5}>
                <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center text-white/95 hover:scale-105">
                  <PiCheckBold className="text-xl text-blue-400" />
                  {label}
                </p>
              </BoxReveal>
            ))}
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
                  <Image src={"/icons/squiggle.svg"} width={800} height={30} className="absolute -bottom-2 left-0 w-full h-3" alt="underline" />
                </span>{" "}
                Businesses
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                Proven strategies and real outcomes that grow traffic, leads, and revenue.
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
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>

              <div className="text-center mt-8">
                <div className="inline-flex items-center gap-x-3 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg">
                  <PiPlayFill className="text-blue-500 text-xl" />
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Watch the full case study above</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                { title: "Real Results", desc: "See actual case studies and measurable outcomes" },
                { title: "Proven Strategies", desc: "Methodologies that drive consistent growth" },
                { title: "Client Success", desc: "Hear directly from clients about their journey" },
              ].map((c) => (
                <div key={c.title} className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <PiCheckBold className="text-blue-500 text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Element>

      {/* Full Width CTA Section */}
      <section className="w-full py-20 bg-card">
        <div className="px-6 md:px-12 lg:px-20">
          <p className="text-center text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500">
            Schedule a call with us to discuss your project and get a quote in minutes
          </p>

          <div className="flex justify-center items-center gap-x-4">
            <Link
              href="/meeting"
              className="py-3 px-10 md:px-16 rounded-[10px] text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-lg hover:opacity-95 transition"
            >
              Book a Call
            </Link>
            <Link
              href={"/showcase"}
              className="py-3 px-10 md:px-16 rounded-[10px] border border-foreground/20 bg-background hover:bg-accent transition"
            >
              Showcase
            </Link>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="w-full py-20">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
          <div className="md:flex items-center justify-between gap-y-4 my-10 gap-x-28 mx-auto">
            <div className="md:w-2/5">
              <h2 className="text-2xl font-medium text-gray-600 w-4/5">Trusted by fast-moving brands</h2>
              <div className="flex my-6 gap-x-5 w-full">
                <div>
                  <h3 className="text-blue-500 text-3xl md:text-5xl">
                    <NumberTicker value={20} />+
                    <p className="text-gray-500 text-sm md:text-md">Happy Clients</p>
                  </h3>
                </div>
                <div className="w-px bg-gray-300 self-stretch" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-blue-500 text-3xl md:text-5xl whitespace-nowrap overflow-hidden">
                    <NumberTicker value={32} />+
                    <p className="text-gray-500 text-sm md:text-md">Projects Completed</p>
                  </h3>
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
          <h2>
            <WordPullUpDemo />
          </h2>
          <p className="text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
            All of our services are designed to help your business stand out
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 justify-items-center">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 dark:bg-gray-800 p-5 cursor-pointer rounded-xl transition
                           hover:shadow-xl hover:-translate-y-1 ring-1 ring-transparent hover:ring-blue-300/40"
              >
                <Image
                  src={service.icon}
                  width={480}
                  height={240}
                  className="object-contain bg-gray-100 dark:bg-gray-800 p-4 w-full h-40 rounded-md"
                  alt={service.title}
                />
                <h3 className="text-lg md:text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
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
            <h2 className="text-3xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center">
              Our{" "}
              <span className="text-blue-500 flex gap-x-1 items-center">
                <Image src={"/icons/squiggle.svg"} width={40} height={40} className="w-6" alt="squiggle" />
                Creative
                <Image src={"/icons/star.svg"} width={40} height={40} className="w-6 mb-8" alt="star" />
              </span>{" "}
              Process
            </h2>

            <p className="text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
              We design to get your business noticed.
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

      {/* NEW: Testimonials + Logos */}
      <TestimonialsSection />
      <ClientsLogosSection />

      {/* Final CTA */}
      <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <LetsMakeThingsHappenSection />
      </section>

      <Footer />
    </div>
  );
}
