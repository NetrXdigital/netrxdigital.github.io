// app/showcase/page.tsx
import Link from "next/link";
import { BlurFadeDemo } from "@/components/demos/blur-fade-demo";
import Footer from "@/components/footer";
import WordFadeIn from "@/components/magicui/word-fade-in";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";

export default function ShowcasePage() {
  return (
    <div
      className="
        overflow-clip inset-0 -z-10 min-h-screen w-full bg-background
        bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)]
        bg-[size:14px_24px]
        pt-20
      "
    >
      {/* HERO */}
      <section className="mx-6 md:mx-auto md:px-0 xl:w-4/5 2xl:w-[68%]">
        <div className="flex items-center justify-center relative">
          <WordFadeIn
            className="text-3xl pt-20 lg:text-5xl font-semibold max-w-4xl mx-auto md:text-center z-20 tracking-tight"
            words="Design & Code That Helps Your Business Grow"
          />
        </div>

        <p className="md:text-center text-lg md:text-xl mt-6 mb-2 md:w-4/5 mx-auto text-muted-foreground">
          A curated look at recent work built for speed, clarity, and conversions.
        </p>

        {/* Primary CTAs */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            href="/meeting"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-6 text-primary-foreground transition hover:opacity-90"
          >
            Start a Project
          </Link>
          <a
            href="#work"
            className="inline-flex h-11 items-center justify-center rounded-xl border px-6 transition hover:bg-accent"
          >
            See the Work ↓
          </a>
        </div>

        {/* Featured Work */}
        <h2 id="work" className="mt-14 text-xl md:text-2xl font-semibold">
          Featured Work
        </h2>
        <p className="text-sm text-muted-foreground">
          Selected builds across art, construction, and services.
        </p>

        <BlurFadeDemo />

        {/* CTA */}
        <div className="mt-16">
          <LetsMakeThingsHappenSection />
        </div>
      </section>

      <footer className="mt-16">
        <Footer />
      </footer>
    </div>
  );
}
