import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2, Search } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/91598-628463753_medium.mp4" type="video/mp4" />
        </video>
        {/* Optional overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Navigation Container */}
      <div className="max-w-[1260px] mx-auto px-6 relative z-10">
        {/* Navigation */}
        <nav className="flex flex-col md:flex-row justify-between items-center py-6">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Search className="w-6 h-6 text-white" />
            <div className="font-roboto text-white font-bold text-2xl">TrendFinder</div>
          </div>
          <div className="text-white/70 mb-4 md:mb-0"></div>
          <div className="flex flex-wrap gap-4 md:gap-8 text-white justify-center">
            <a href="#" className="hover:text-white/80 transition">Trends</a>
            <a href="#" className="hover:text-white/80 transition">Analytics</a>
            <a href="#" className="hover:text-white/80 transition">Reports</a>
            <a href="#" className="hover:text-white/80 transition">Dashboard</a>
            <a href="#" className="hover:text-white/80 transition">Sign In</a>
          </div>
        </nav>
      </div>

      {/* Main Content - Updated for responsiveness */}
      <div className="container mx-auto px-6 mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 max-w-[1260px]">
        {/* Left Side */}
        <div className="col-span-1 md:col-span-7 relative z-10">
          {/* Side Numbers - Hide on mobile */}
          <div className="hidden md:flex absolute left-[-60px] top-0 h-full flex-col justify-between text-white/30">
            <div className="h-16 w-px bg-white/20 mx-auto"></div>
            <div className="writing-mode-vertical transform rotate-180 text-sm tracking-wider">
              Lorem Ipsum
            </div>
            <div className="writing-mode-vertical transform rotate-180 text-sm tracking-wider">
              Lorem Ipsum
            </div>
            <div className="writing-mode-vertical transform rotate-180 text-sm tracking-wider">
              Lorem Ipsum
            </div>
            <div className="writing-mode-vertical transform rotate-180 text-sm tracking-wider">
              Lorem Ipsum
            </div>
            <div className="h-16 w-px bg-white/20 mx-auto"></div>
          </div>

          {/* Main Text Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-8xl font-bold">
              <span className="text-[#B6B1FF]">FIND WHAT'S</span>
              <br />
              <span className="text-white">TRENDING</span>
            </h1>
            <p className="text-white/80 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            <Button 
              className="bg-[#2B1B44] text-white hover:bg-[#3D2960] transition-colors"
              size="lg"
            >
              EXPLORE MORE
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Right Side */}
        {/* <div className="col-span-1 md:col-span-5 relative">
          <div className="absolute right-0 top-0 text-[60px] md:text-[120px] font-thin text-white/90">
            <span>02</span>
            <span className="ml-4">03</span>
          </div>
          
          <div className="mt-32 space-y-6">
            <div className="bg-black aspect-video rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/m_1NLHQojQs?start=752"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3 className="text-2xl font-bold text-white">LOREM IPSUM</h3>
            <p className="text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
            <Button 
              variant="secondary"
              size="lg"
              className="w-full bg-[#F87171] text-white hover:bg-[#EF4444]"
            >
              LOREM IPSUM
            </Button>
          </div>
        </div> */}
      </div>

      {/* Dots Pattern - Adjust for smaller screens */}
      <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-12 gap-4 md:gap-8 pointer-events-none">
        {[...Array(156)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-white/10 rounded-full"></div>
        ))}
      </div>

      {/* Add this after your Explore More button section */}
      <div className="mt-20 max-w-[1260px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="rounded-xl border text-card-foreground shadow bg-white bg-opacity-10 backdrop-blur-md">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Retail Giant Boosts Sales by 30%
              </h3>
              <p className="text-gray-300 mb-4">
                Implemented an AI-driven recommendation engine, resulting in a significant increase in cross-selling and upselling.
              </p>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background shadow-sm h-9 px-4 py-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 border-white hover:bg-white hover:text-black transition-colors duration-300">
                Read More
                <ArrowRight className="ml-2 h-4 w-4 text-white" />
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl border text-card-foreground shadow bg-white bg-opacity-10 backdrop-blur-md">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">
                FinTech Startup Reduces Fraud by 60%
              </h3>
              <p className="text-gray-300 mb-4">
                Developed a machine learning model to detect and prevent fraudulent transactions in real-time.
              </p>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background shadow-sm h-9 px-4 py-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 border-white hover:bg-white hover:text-black transition-colors duration-300">
                Read More
                <ArrowRight className="ml-2 h-4 w-4 text-white" />
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl border text-card-foreground shadow bg-white bg-opacity-10 backdrop-blur-md">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Tech Company Optimizes Cloud Costs
              </h3>
              <p className="text-gray-300 mb-4">
                Implemented cloud optimization strategies resulting
              </p>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background shadow-sm h-9 px-4 py-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 border-white hover:bg-white hover:text-black transition-colors duration-300">
                Read More
                <ArrowRight className="ml-2 h-4 w-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}