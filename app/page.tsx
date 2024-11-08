import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2 } from "lucide-react";

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
          <div className="text-white font-bold text-2xl mb-4 md:mb-0">LOREM</div>
          <div className="text-white/70 mb-4 md:mb-0">vector/ eps.10</div>
          <div className="flex flex-wrap gap-4 md:gap-8 text-white justify-center">
            <a href="#" className="hover:text-white/80 transition">Shop</a>
            <a href="#" className="hover:text-white/80 transition">Account</a>
            <a href="#" className="hover:text-white/80 transition">Story</a>
            <a href="#" className="hover:text-white/80 transition">Blog</a>
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
              <span className="text-[#B6B1FF]">WEB</span>
              <br />
              <span className="text-white">DESIGN</span>
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
        <div className="col-span-1 md:col-span-5 relative">
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
        </div>
      </div>

      {/* Dots Pattern - Adjust for smaller screens */}
      <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-12 gap-4 md:gap-8 pointer-events-none">
        {[...Array(156)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-white/10 rounded-full"></div>
        ))}
      </div>
    </main>
  );
}