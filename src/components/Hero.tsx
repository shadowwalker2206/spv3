import { Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20" />
      
      {/* Animated circles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        <div className="flex items-center justify-center gap-3 mb-6 animate-scale-in">
          <Sparkles className="w-8 h-8 text-secondary animate-float" />
          <span className="text-5xl animate-float" style={{ animationDelay: "0.5s" }}>🎈</span>
          <Sparkles className="w-8 h-8 text-primary animate-float" style={{ animationDelay: "1s" }} />
        </div>
        
        <h1 className="text-7xl md:text-9xl font-vibes bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-4 animate-shimmer bg-[length:200%_auto]">
          Happy Birthday
        </h1>
        
        <h2 className="text-5xl md:text-7xl font-playfair font-bold text-foreground mb-8">
          Khushi Singh
        </h2>
        
        <div className="max-w-2xl mx-auto bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-border animate-scale-in" style={{ animationDelay: "0.3s" }}>
          <p className="text-xl md:text-2xl font-poppins text-muted-foreground leading-relaxed">
            ✨ To someone who makes every moment special ✨
          </p>
          <p className="text-lg md:text-xl font-poppins text-muted-foreground mt-4 leading-relaxed">
            Here's to celebrating you and all the amazing memories we've created together! 
            May this year bring you endless joy, laughter, and beautiful moments! 🎉💝
          </p>
        </div>
        
        <div className="mt-12 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <p className="text-lg font-poppins text-muted-foreground italic">
            Scroll down to relive our favorite moments together 💫
          </p>
        </div>
      </div>
    </section>
  );
};
