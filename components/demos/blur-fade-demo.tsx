import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import Link from "next/link";

const works = [
  {
    // Option 1: Use theme-aware background colors
    background: "bg-card border border-border shadow-sm",
    imageUrl: "/images/business.webp",
    title: "Stylizeunique",
    description: "Custom resin art creations tailored to client specifications. Handcrafted unique pieces that bring artistic vision to life.",
    link: "#",
  }
];

export function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="grid md:grid-cols-1 gap-8 mt-10 justify-items-center">
        {works.map(({ imageUrl, title, description, link }, idx) => (
          <BlurFade
            key={title}
            delay={0.25 + idx * 0.05}
            inView
            className={`rounded-lg ${works[idx].background} p-6 md:p-10 w-full max-w-3xl`}
          >
            <Link href={link} target="_blank" rel="noreferrer">
              <Image
                height={10000}
                width={10000}
                className="h-5/6 w-full object-cover rounded-lg"
                src={imageUrl}
                alt={`Random stock image ${idx + 1}`}
              />
              <h3 className="text-4xl font-semibold p-4 text-center">{title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center px-4 pb-4">{description}</p>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}