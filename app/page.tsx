import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#2B1B44] via-[#E87D93] to-[#F7A5A2] relative overflow-hidden">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6">
        <div className="text-white font-bold text-2xl">LOREM</div>
        <div className="text-white/70">vector/ eps.10</div>
        <div className="flex gap-8 text-white">
          <a href="#" className="hover:text-white/80 transition">Shop</a>
          <a href="#" className="hover:text-white/80 transition">Account</a>
          <a href="#" className="hover:text-white/80 transition">Story</a>
          <a href="#" className="hover:text-white/80 transition">Blog</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 mt-12 grid grid-cols-12 gap-8">
        {/* Left Side */}
        <div className="col-span-7 relative z-10">
          {/* Side Numbers */}
          <div className="absolute left-[-60px] top-0 h-full flex flex-col justify-between text-white/30">
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
            <h1 className="text-8xl font-bold">
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
        <div className="col-span-5 relative">
          <div className="absolute right-0 top-0 text-[120px] font-thin text-white/90">
            <span>02</span>
            <span className="ml-4">03</span>
          </div>
          
          <div className="mt-32 space-y-6">
            <div className="bg-black aspect-video rounded-lg flex items-center justify-center">
              <Loader2 className="w-8 h-8 text-white animate-spin" />
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

      {/* Decorative Elements */}
      <div className="absolute left-1/3 top-1/2 w-96 h-96 bg-[#4B69BD] rounded-full blur-3xl opacity-20 -translate-y-1/2"></div>
      <div className="absolute right-1/4 bottom-1/4 w-64 h-64 bg-[#B6B1FF] rounded-full blur-3xl opacity-20"></div>
      
      {/* Dots Pattern */}
      <div className="absolute inset-0 grid grid-cols-12 gap-8 pointer-events-none">
        {[...Array(156)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-white/10 rounded-full"></div>
        ))}
      </div>
    </main>
  );
}