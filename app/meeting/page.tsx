"use client";

import Firestore from "./firestore"; // Updated import
import { PiCheckCircle } from "react-icons/pi";
import { motion } from "framer-motion";
import Footer from "@/components/footer";

const checkItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Meeting = () => {
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
      <div className="md:px-0 px-6 xl:w-4/5 2xl:w-[68%] justify-between md:mt-14 md:flex mx-auto">
        <div className="md:w-2/5">
          <h1 className="text-4xl font-semibold pt-10 text-foreground">Let&apos;s Meet</h1>
          <p className="text-lg text-muted-foreground py-4">
            We are always excited to meet new people and discuss new projects.
            Please feel free to book a meeting with us.
          </p>

          {[
            {
              title: "Development + Design",
              description:
                "Turn your ideas into reality with our development and design services.",
            },
            {
              title: "Free Consultation",
              description:
                "Get expert advice on how to improve your business and increase your online presence.",
            },
            {
              title: "Technical Support",
              description:
                "Get technical support for your website or application.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={checkItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 1.8 }}
              className="flex gap-x-4 py-4"
            >
              <PiCheckCircle className="rounded-md text-[#3d80d7] text-2xl flex-shrink-0" />
              <ul>
                <h3 className="text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <div className="text-muted-foreground">{item.description}</div>
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="md:w-1/2">
          <Firestore />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Meeting;
