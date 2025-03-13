// import Image from "next/image";
// import { Link } from "react-router";
import { ShoppingCart } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="text-3xl font-bold text-white">
          {/* <Image
            src="/placeholder.svg?height=60&width=200"
            alt="Rusty's Chips Logo"
            width={200}
            height={60}
            className="object-contain"
          /> */}
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-white hover:text-opacity-80">
            Order Now
          </Link>
          <Link href="#" className="text-white hover:text-opacity-80">
            About Us
          </Link>
          <Link href="#" className="text-white hover:text-opacity-80">
            Private Label
          </Link>
        </nav>
        <div className="text-secondary">
          <ShoppingCart size={28} />
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-12 px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-5xl font-bold text-secondary mb-6">
            Rusty's Tale
          </h1>
          <p className="text-white mb-8">
            In 1980 Rusty began that journey. He began producing his natural
            handmade Island potato chips in a little kitchen in the coastal
            community of Costa Mesa CA. Now you can experience that journey by
            purchasing your own variety pack of Rusty's Chips today.
          </p>
          <button className="bg-secondary text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition">
            Order Now
          </button>
        </div>
        <div className="relative">
          {/* <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Rusty's Chips Island Style"
            width={400}
            height={400}
            className="object-contain mx-auto"
          /> */}
          <div className="absolute -z-10 top-0 right-0 w-full h-full">
            <div
              className="w-full h-full bg-[url('/placeholder.svg?height=400&width=400')] bg-no-repeat bg-contain opacity-50"
              style={{
                backgroundImage:
                  "linear-gradient(45deg, #e3217d 25%, transparent 25%, transparent 50%, #e3217d 50%, #e3217d 75%, transparent 75%, transparent)",
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Chip Image Section */}
      <section className="container mx-auto py-8 px-4 flex justify-center">
        <div className="relative">
          {/* <Image
            src="/placeholder.svg?height=200&width=200"
            alt="Green Chip"
            width={200}
            height={100}
            className="object-contain"
          /> */}
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-white"></div>
        </div>
      </section>

      {/* Island Chips Logo */}
      <section className="container mx-auto py-12 px-4 flex justify-center">
        {/* <Image
          src="/placeholder.svg?height=100&width=500"
          alt="Rusty's Island Chips"
          width={500}
          height={100}
          className="object-contain"
        /> */}
      </section>

      {/* Handmade in Orange County */}
      <section className="container mx-auto py-16 px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="relative md:col-span-1 md:col-start-2">
          <div className="bg-[#00d1ff] p-8 rounded-md">
            <h2 className="text-3xl font-bold text-primary mb-2 text-right">
              HANDMADE
            </h2>
            <h2 className="text-3xl font-bold text-primary mb-6 text-right">
              IN ORANGE COUNTY
            </h2>
            <div className="flex justify-center">
              {/* <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Rusty's Chips Varieties on Beach"
                width={500}
                height={300}
                className="object-contain rounded-md"
              /> */}
            </div>
            <div className="flex justify-center mt-6">
              <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="md:col-span-1 md:col-start-1 md:row-start-1">
          <div className="relative">
            <h2 className="text-6xl font-bold text-secondary">SINCE</h2>
            <h2 className="text-8xl font-bold text-white">1980</h2>
            <div className="absolute -z-10 -left-4 top-0 w-full h-full">
              <div className="w-full h-full border-l-4 border-t-4 border-b-4 border-[#1389ff]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Natural Chips */}
      <section className="container mx-auto py-16 px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          {/* <Image
            src="/placeholder.svg?height=400&width=300"
            alt="Rusty's Surf City Strips"
            width={300}
            height={400}
            className="object-contain mx-auto"
          /> */}
          <div className="flex justify-center mt-8 space-x-4">
            <span className="w-8 h-8 rounded-full bg-[#ff4d4b] cursor-pointer"></span>
            <span className="w-8 h-8 rounded-full bg-[#e3217d] cursor-pointer"></span>
            <span className="w-8 h-8 rounded-full bg-black cursor-pointer"></span>
            <span className="w-8 h-8 rounded-full bg-[#fea63a] cursor-pointer"></span>
          </div>
        </div>
        <div>
          <div className="relative mb-8">
            <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 w-24 h-24 rounded-full border-4 border-[#1389ff]">
              <div className="w-16 h-16 rounded-full bg-[#1389ff] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            ONE OF THE ONLY
          </h2>
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            BEST NATURAL
          </h2>
          <h2 className="text-4xl font-bold text-white text-center mb-6">
            HANDMADE CHIPS
          </h2>
          <p className="text-3xl text-[#00d1ff] text-center mb-8">
            you will ever have!
          </p>
          <div className="zigzag mt-4"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1389ff] py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              {/* <Image
                src="/placeholder.svg?height=80&width=300"
                alt="Rusty's Island Chips"
                width={300}
                height={80}
                className="object-contain"
              /> */}
            </div>
            <div className="grid grid-cols-2 gap-x-16 gap-y-4 mt-8 md:mt-0">
              <Link href="#" className="text-white hover:text-opacity-80">
                THE CHIPS
              </Link>
              <Link href="#" className="text-white hover:text-opacity-80">
                CONTACT
              </Link>
              <Link href="#" className="text-white hover:text-opacity-80">
                ORDERS
              </Link>
              <Link href="#" className="text-white hover:text-opacity-80">
                FACEBOOK
              </Link>
              <Link href="#" className="text-white hover:text-opacity-80">
                PRIVATE LABEL
              </Link>
              <Link href="#" className="text-white hover:text-opacity-80">
                TWITTER
              </Link>
              <Link href="#" className="text-white hover:text-opacity-80">
                BLOG
              </Link>
              <Link href="#" className="text-white hover:text-opacity-80">
                INSTAGRAM
              </Link>
            </div>
          </div>
          <div className="text-center text-white text-sm">
            ©2021 RUSTYS CHIPS. ALL RIGHTS RESERVED
          </div>
        </div>
      </footer>
    </div>
  );
}
