"use client";

import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import { MagneticLink } from "@/components/ui/magnetic-link";
import CursorFX from "@/components/ui/cursor-fx";
import { TiltCard } from "@/components/ui/tilt-card";

type Work = {
  background?: string;
  imageUrl: string;
  title: string;
  description: string;
  link?: string;
  instagram?: string;
  google?: string;
  tags?: string[];
};

const works: Work[] = [
  {
    background: "bg-card border border-border shadow-sm",
    imageUrl: "/images/business.png",
    title: "Stylizeunique",
    description:
      "Custom resin art creations tailored to client specifications. Handcrafted unique pieces that bring artistic vision to life.",
    link: "https://stylizeunique.github.io/",
    instagram: "https://www.instagram.com/stylizeunique16/#",
    tags: ["Custom Art", "E-commerce", "Branding"],
  },
  {
    background: "bg-card border border-border shadow-sm",
    imageUrl: "/images/Kosut Builder.png",
    title: "Kosut Builders",
    description:
      "Premium real-estate presence for a Patna-based construction company—focused on trust, clarity, and lead generation.",
    link: "https://kosut-builder.vercel.app",
    google:
      "https://www.google.com/maps?ll=25.589631,85.130404&z=14&t=m&hl=en&gl=IN&mapclient=embed&cid=16579713393397816670",
    tags: ["Construction", "Real Estate", "Lead Gen"],
  },
  {
    background: "bg-card border border-border shadow-sm",
    imageUrl: "/images/srfitness.png",
    title: "SR Fitness",
    description:
      "A modern fitness center in Patna dedicated to strength, discipline, and transformation — empowered by NetrX Digital’s social growth strategy.",
    instagram: "https://www.instagram.com/sr_fitness_5/?hl=en",
    google:
      "https://www.google.com/search?q=SR+FITNESS",
    tags: ["Gym", "Brand Marketing", "Social Media"],
  },
  {
    background: "bg-card border border-border shadow-sm",
    imageUrl: "/images/instanthub.png",
    title: "Instant Hub",
    description:
      "Recommerce platform for selling used laptops, phones, and gadgets with instant cash and doorstep pickup — fully powered by NetrX Digital.",
    link: "https://www.instanthub.in/",
    instagram: "https://www.instagram.com/instanthub.in/",
    tags: ["Recommerce", "E-commerce", "Lead Generation"],
  },
  {
    background: "bg-card border border-border shadow-sm",
    imageUrl: "/images/raza.png",
    title: "Raza Pioneer Mobile Lab",
    description:
      "Leading mobile shop and repair center in Anisabad, Patna — optimized for online visibility and customer reach.",
    instagram: "https://www.instagram.com/raza_pioneer/",
    google: "https://www.google.com/search?q=Raza+Pioneer+Mobile+Lab+Patna",
    tags: ["Retail", "Local SEO", "Mobile Shop"],
  },
];

export function BlurFadeDemo() {
  return (
    <section id="photos" className="relative mt-8">
      {/* global cursor effects */}
      <CursorFX />

      <div className="grid gap-8 md:grid-cols-2">
        {works.map(
          (
            { imageUrl, title, description, link, instagram, google, tags, background },
            idx
          ) => (
            <BlurFade
              key={title}
              delay={0.18 + idx * 0.06}
              inView
              className={`rounded-2xl ${background ?? ""} overflow-hidden`}
            >
              <TiltCard className="rounded-2xl hover:shadow-xl border border-border bg-card/80 backdrop-blur">
                {/* Image */}
                <div className="relative h-64 w-full md:h-80 flex items-center justify-center bg-muted/30 rounded-lg overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={`${title} — showcase image`}
                    fill
                    className="object-contain p-3 will-change-transform"
                    sizes="(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw"
                    priority={idx === 0}
                  />
                  {/* subtle animated border */}
                  <div className="pointer-events-none absolute inset-0 rounded-lg [mask-image:radial-gradient(180px_120px_at_10%_-10%,#000,transparent)] border border-transparent bg-[conic-gradient(from_180deg_at_50%_10%,rgba(99,102,241,.35),transparent_60%)]" />
                </div>

                {/* Text */}
                <div className="p-6 md:p-7">
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground">
                    {description}
                  </p>

                  {!!tags?.length && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {tags.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Links with magnetic effect */}
                  <div className="mt-5 flex flex-wrap items-center gap-4 text-sm font-medium">
                    {link && (
                      <MagneticLink
                        href={link}
                        className="text-primary hover:underline inline-flex items-center gap-1"
                      >
                        Website <span aria-hidden>↗</span>
                      </MagneticLink>
                    )}
                    {instagram && (
                      <MagneticLink
                        href={instagram}
                        className="text-pink-500 hover:underline inline-flex items-center gap-1"
                      >
                        Instagram <span aria-hidden>↗</span>
                      </MagneticLink>
                    )}
                    {google && (
                      <MagneticLink
                        href={google}
                        className="text-blue-600 hover:underline inline-flex items-center gap-1"
                      >
                        Google <span aria-hidden>↗</span>
                      </MagneticLink>
                    )}
                  </div>
                </div>
              </TiltCard>
            </BlurFade>
          )
        )}
      </div>
    </section>
  );
}
