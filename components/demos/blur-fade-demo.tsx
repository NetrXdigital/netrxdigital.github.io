// components/demos/blur-fade-demo.tsx
import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import Link from "next/link";

type Work = {
  background?: string;
  imageUrl: string;
  title: string;
  description: string;
  link: string;
  tags?: string[];
};

const works: Work[] = [
  {
    background: "bg-card border border-border shadow-sm",
    imageUrl: "/images/business.webp",
    title: "Stylizeunique",
    description:
      "Custom resin art creations tailored to client specifications. Handcrafted unique pieces that bring artistic vision to life.",
    link: "https://stylizeunique.github.io/",
    tags: ["Custom Art", "E-commerce", "Branding"],
  },
  {
    background: "bg-card border border-border shadow-sm",
    imageUrl: "/images/Kosut Builder.png", 
    title: "Kosut Builders",
    description:
      "Premium real-estate presence for a Patna-based construction company—focused on trust, clarity, and lead generation.",
    link: "https://kosut-builder.vercel.app",
    tags: ["Construction", "Real Estate", "Lead Gen"],
  },
  // 👉 In future, just push more objects here.
];

export function BlurFadeDemo() {
  return (
    <section id="photos" className="mt-8">
      <div className="grid gap-8 md:grid-cols-2">
        {works.map(({ imageUrl, title, description, link, tags, background }, idx) => (
          <BlurFade
            key={title}
            delay={0.18 + idx * 0.06}
            inView
            className={`rounded-2xl ${background ?? ""} overflow-hidden`}
          >
            <Link href={link} target="_blank" rel="noreferrer" className="block">
              {/* Image wrapper to prevent CLS and keep a clean aspect */}
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

              <div className="p-6 md:p-7">
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-2 text-sm md:text-base text-muted-foreground">{description}</p>

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

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Visit project <span aria-hidden>↗</span>
                </div>
              </div>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
