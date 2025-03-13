import React, { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import "./App.css";
import ChipImageSection from "./components/fragments/ChipImageSection";
import HandmadeSection from "./components/fragments/HandmadeSection";
import ProductShowcase from "./components/fragments/ProductShowcase";

function App() {
  const imagesChips = [
    "/Images/Products/slice_chip.png",
    "/Images/Products/slice_bite_chip.png",
    "",
  ];

  const [indexImageChips, setIndexImageChips] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setIndexImageChips((prev) => (prev + 1) % imagesChips.length);
      },
      indexImageChips === imagesChips.length - 1 ? 2500 : 1500
    );
    // 1500ms saat menggigit, 2500ms saat chip hilang

    return () => clearInterval(interval);
  }, [indexImageChips]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="text-3xl font-bold text-white">
          <img
            src="/Images/Logo/logo.png"
            alt="Rusty's Chips Logo"
            className="object-contain h-12 md:h-24"
          />
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white hover:text-opacity-80">
            Order Now
          </a>
          <a href="#" className="text-white hover:text-opacity-80">
            About Us
          </a>
          <a href="#" className="text-white hover:text-opacity-80">
            Private Label
          </a>
        </nav>
        <div className="text-secondary">
          <ShoppingCart size={28} />
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-2 px-4 md:px-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Muncul dari bawah dengan fade-in
            animate={{ opacity: 1, y: 0 }} // Efek ke posisi normal
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl font-bold text-secondary mb-6">
              Rusty's Tale
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }} // Delay biar muncul setelah h1
          >
            <p className="text-white mb-8">
              In 1980 Rusty began that journey. He began producing his natural
              handmade Island potato chips in a little kitchen in the coastal
              community of Costa Mesa CA. Now you can experience that journey by
              purchasing your own variety pack of Rusty's Chips today.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }} // Tombol muncul terakhir
          >
            <button className="bg-secondary cursor-pointer text-white font-semibold px-3 py-2 rounded-xl hover:bg-secondary/90 transition">
              Order Now
            </button>
          </motion.div>
        </div>

        <div className="relative">
          <motion.img
            src="/Images/Products/red_chips.png"
            alt="Rusty's Chips Island Style"
            className="mx-auto w-4/5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: [1, 1.05, 1], // Smooth scale dari besar ke normal
              rotate: [0, 2, -2, 0],
              y: [0, -3, 3, 0],
            }}
            transition={{
              opacity: { duration: 1 },
              scale: { duration: 1.5, ease: "easeInOut" }, // Smooth scaling
              rotate: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              type: "spring",
              stiffness: 80,
              damping: 10, // Efek pegas biar lebih halus
            }}
          />

          <motion.img
            src="/Images/Element/circle.svg"
            alt="Circle Element"
            className="absolute top-[40%] left-[60%] -translate-y-1/2 -translate-x-1/2 -z-10 mx-auto w-4/5"
            animate={{ scale: [1, 1.03, 1] }} // Perubahan skala lebih kecil
            transition={{
              duration: 3, // Lebih lambat biar nggak terlalu mencolok
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <img
            src="/Images/Element/line.svg"
            alt="Line Element"
            className="absolute top-[45%] left-[70%] -translate-y-1/2 -translate-x-1/2 -z-10 mx-auto w-3/5"
          />

          <motion.img
            src="/Images/Products/chips.png"
            alt="Chips Element"
            className="absolute -bottom-[35%] left-[25%] -translate-y-1/2 -translate-x-1/2 -z-10 mx-auto w-3/5"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </section>

      {/* Chip Image Section */}
      <ChipImageSection
        imagesChips={imagesChips}
        indexImageChips={indexImageChips}
      />
      {/* Handmade in Orange County */}
      <HandmadeSection />

      {/* Best Natural Chips */}
      <ProductShowcase />

      {/* Footer */}
      <footer className="bg-[#1389ff]/40 py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-evenly items-center mb-8">
            <div>
              <img
                src="/Images/Logo/logo_complete_not_chips.png"
                alt="Rusty's Island Chips"
                className="object-contain h-20"
              />
              <div className="text-center text-white text-sm mt-3">
                ©2021 RUSTYS CHIPS. ALL RIGHTS RESERVED
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-16 gap-y-4 mt-12 md:mt-0">
              <a href="#" className="text-white hover:text-opacity-80">
                THE CHIPS
              </a>
              <a href="#" className="text-white hover:text-opacity-80">
                CONTACT
              </a>
              <a href="#" className="text-white hover:text-opacity-80">
                ORDERS
              </a>
              <a href="#" className="text-white hover:text-opacity-80">
                FACEBOOK
              </a>
              <a href="#" className="text-white hover:text-opacity-80">
                PRIVATE LABEL
              </a>
              <a href="#" className="text-white hover:text-opacity-80">
                TWITTER
              </a>
              <a href="#" className="text-white hover:text-opacity-80">
                BLOG
              </a>
              <a href="#" className="text-white hover:text-opacity-80">
                INSTAGRAM
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
