import React from "react";
import { motion } from "framer-motion";

export default function HandmadeSection() {
  return (
    <section className="container mx-auto py-12 px-4 flex justify-center items-center">
      <div className="relative flex justify-end">
        {/* Teks SINCE 1980 muncul dari kiri */}
        <motion.div
          className="absolute top-[50%] left-[0%]"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl md:text-4xl xl:text-6xl font-bold text-secondary">
            SINCE
          </h2>
          <h2 className="text-3xl md:text-6xl xl:text-8xl font-bold ml-3 md:ml-5 text-white">
            1980
          </h2>
        </motion.div>

        {/* Gambar Fade-in */}
        <motion.img
          src="../public/Images/Banner/marketing.png"
          alt="Rusty's Chips Varieties on Beach"
          className="object-contain w-[90%] shadow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true, amount: 0.3 }}
        />

        {/* Tombol Shop Now */}
        <motion.button
          className="absolute cursor-pointer shadow bottom-[5%] left-[25%] bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Shop Now
        </motion.button>
      </div>
    </section>
  );
}
