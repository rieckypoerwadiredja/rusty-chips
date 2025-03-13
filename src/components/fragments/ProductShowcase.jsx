import React, { useState } from "react";
import { motion } from "framer-motion";

const ProductShowcase = () => {
  const images = {
    red: "/Images/Products/orange_chips.png",
    pink: "/Images/Products/red_chips.png",
    black: "/Images/Products/black_chips.png",
    orange: "/Images/Products/yellow_chips.png",
  };

  const [activeImage, setActiveImage] = useState(images.red);

  return (
    <motion.section
      className="container mx-auto py-12 px-4 grid md:grid-cols-2 gap-8 items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div>
        <motion.div
          className="relative w-full max-w-xl min-h-[350px] flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.img
            key={activeImage}
            src={activeImage}
            alt="Rusty's Surf City Strips"
            className="object-contain mx-auto w-full max-w-xl max-h-[350px] absolute"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
        <div className="flex justify-center mt-8 space-x-4">
          {Object.entries(images).map(([color, imgSrc]) => (
            <motion.span
              key={color}
              className={`w-8 h-8 rounded-full cursor-pointer border-4 border-white ${
                activeImage === imgSrc ? "ring-4 ring-white" : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => setActiveImage(imgSrc)}
              whileHover={{
                scale: 1.2,
                boxShadow: "0px 0px 8px rgba(255,255,255,0.8)",
              }}
              whileTap={{ scale: 0.9 }}
            ></motion.span>
          ))}
        </div>
      </div>
      <motion.div
        className="pr-4 md:pr-12 flex flex-col items-end"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-6xl font-bold text-white text-right mb-4">
          ONE OF THE ONLY
        </h2>
        <h2 className="text-3xl md:text-6xl font-bold text-white text-right mb-4">
          BEST NATURAL
        </h2>
        <h2 className="text-3xl md:text-6xl font-bold text-white text-right mb-6">
          HANDMADE CHIPS
        </h2>
        <p className="text-3xl md:text-5xl text-[#00d1ff] text-right mb-8">
          you will ever have !
        </p>
        <motion.img
          className="md:max-w-3xs w-full md:pr-5"
          src="/Images/Element/triagle_line.png"
          alt=""
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </motion.div>
    </motion.section>
  );
};

export default ProductShowcase;
