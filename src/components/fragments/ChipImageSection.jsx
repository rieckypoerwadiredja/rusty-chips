import React from "react";
import { motion } from "framer-motion";

const ChipImageSection = ({ imagesChips, indexImageChips }) => {
  return (
    <section className="relative container py-12 pr-4">
      <motion.div
        className="relative w-full flex justify-start"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }} // Memastikan animasi mulai setelah 80% terlihat
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative max-w-2/3 group">
          <div className="absolute -right-[20%] -top-[10%] -z-10 w-15 aspect-square bg-secondary transition-all duration-300 group-hover:-right-[10%] group-hover:top-0 group-hover:w-12"></div>
          <div className="absolute -right-[10%] top-0 -z-10 w-15 aspect-square border-4 border-white transition-all duration-300 group-hover:-right-[20%] group-hover:-top-[10%]"></div>
          <motion.img
            src="/Images/Hero/side_hero_green_chips.png"
            alt="Green Chip"
            className="object-contain w-full transition-transform duration-300 group-hover:translate-x-5"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          />
        </div>
        <div className="absolute bottom-0 md:bottom-[10%] left-10 container mx-auto px-4 flex justify-center">
          <div className="relative">
            <motion.img
              src="/Images/Logo/logo_complete_not_chips.png"
              alt="Rusty's Island Chips"
              className="object-contain w-4/5 md:max-w-xl max-w-lgxl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            />
            <motion.img
              className="absolute -bottom-[170%] left-[38%] w-[65%] -z-10"
              src={imagesChips[indexImageChips]}
              alt=""
              viewport={{ once: true, amount: 0.5 }}
              animate={
                indexImageChips === imagesChips.length - 1
                  ? { opacity: 0 }
                  : { x: [0, -2, 2, -2, 2, 0], y: [0, -1.5, 1.5, -1.5, 1.5, 0] }
              }
              transition={{
                duration: 0.4,
                repeat:
                  indexImageChips === imagesChips.length - 1 ? 0 : Infinity,
                repeatDelay: 0.8,
                ease: "easeOut",
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ChipImageSection;
