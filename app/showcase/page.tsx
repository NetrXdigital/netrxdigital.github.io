import { BlurFadeDemo } from "@/components/demos/blur-fade-demo";
import Footer from "@/components/footer";
import WordFadeIn from "@/components/magicui/word-fade-in";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";

const Showcase = () => {
  return (
    <div
      className="
        overflow-clip 
        inset-0 
        -z-10 h-full w-full bg-background
        bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)]
        bg-[size:14px_24px]
        pt-20
      "
    >
      {/* Removed ShowcaseNavbar since we now have global Header */}
      
      <section className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <div className="flex items-center justify-center relative">
          <WordFadeIn
            className="text-3xl pt-20 lg:text-5xl font-semibold max-w-3xl mx-auto md:text-center z-20"
            words="Design & Code That Helps Your Business Grow"
          />
        </div>
        <p className="md:text-center text-xl md:text-2xl my-6 md:w-4/5 mx-auto text-gray-500 dark:text-gray-400">
          Have a look at some of our recent projects.
        </p>

        <BlurFadeDemo />

        <LetsMakeThingsHappenSection />
      </section>

      <Footer />
    </div>
  );
};

export default Showcase;
