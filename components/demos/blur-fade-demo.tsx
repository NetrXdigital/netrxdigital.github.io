// components/demos/blur-fade-demo.tsx
import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import Link from "next/link";

type Work = {
  background?: string;
  imageUrl: string;
  title: string;
  description: string;
  link?: string; // main project / website
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
    google:"https://www.google.com/maps?ll=25.589631,85.130404&z=14&t=m&hl=en&gl=IN&mapclient=embed&cid=16579713393397816670",
    tags: ["Construction", "Real Estate", "Lead Gen"],
  },
  {
    background: "bg-card border border-border shadow-sm",
    imageUrl: "/images/srfitness.png", // add an SR Fitness image to /public/images
    title: "SR Fitness",
    description:
      "A modern fitness center in Patna dedicated to strength, discipline, and transformation — empowered by NetrX Digital’s social growth strategy.",
    instagram: "https://www.instagram.com/sr_fitness_5/?hl=en",
    google:
      "https://www.google.com/search?sca_esv=6848a430e14581e8&hl=en-GB&gl=in&output=search&kgmid=/g/11vwm7mj82&q=SR+FITNESS&shndl=30&source=sh/x/loc/act/m1/3&kgs=8463a02f2072cef5&shem=shrtsdl&utm_source=shrtsdl,sh/x/loc/act/m1/3",
    tags: ["Gym", "Brand Marketing", "Social Media"],
  },
  {
    background: "bg-card border border-border shadow-sm",
    imageUrl: "/images/instanthub.png", // add an Instant Hub image
    title: "Instant Hub",
    description:
      "Recommerce platform for selling used laptops, phones, and gadgets with instant cash and doorstep pickup — fully powered by NetrX Digital.",
    link: "https://www.instanthub.in/",
    instagram: "https://www.instagram.com/instanthub.in/",
    tags: ["Recommerce", "E-commerce", "Lead Generation"],
  },
  {
    background: "bg-card border border-border shadow-sm",
    imageUrl: "/images/raza.png", // add an image of Raza Pioneer store or logo
    title: "Raza Pioneer Mobile Lab",
    description:
      "Leading mobile shop and repair center in Anisabad, Patna — optimized for online visibility and customer reach.",
    instagram: "https://www.instagram.com/raza_pioneer/",
    google:
      "https://www.google.com/search?q=Raza+Pioneer+Mobile+Lab+Patna",
    tags: ["Retail", "Local SEO", "Mobile Shop"],
  },
];

export function BlurFadeDemo() {
  return (
    <section id="photos" className="mt-8">
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
              {/* Each card */}
              <div className="block">
                {/* Image wrapper */}
                <div className="relative h-64 w-full md:h-80 flex items-center justify-center bg-muted/30 rounded-lg overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={`${title} — showcase image`}
                    fill
                    className="object-contain p-3"
                    sizes="(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw"
                    priority={idx === 0}
                  />
                </div>

                {/* Text section */}
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

                  {/* Links */}
                  <div className="mt-5 flex flex-wrap items-center gap-4 text-sm font-medium">
                    {link && (
                      <Link
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary hover:underline flex items-center gap-1"
                      >
                        Website <span aria-hidden>↗</span>
                      </Link>
                    )}
                    {instagram && (
                      <Link
                        href={instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="text-pink-500 hover:underline flex items-center gap-1"
                      >
                        Instagram <span aria-hidden>↗</span>
                      </Link>
                    )}
                    {google && (
                      <Link
                        href={google}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 hover:underline flex items-center gap-1"
                      >
                        Google <span aria-hidden>↗</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </BlurFade>
          )
        )}
      </div>
    </section>
  );
}
