import { useState } from "react";
import { Confetti } from "@/components/Confetti";
import { Hero } from "@/components/Hero";
import { Tabs } from "@/components/Tabs";
import { PhotoGallery } from "@/components/PhotoGallery";
import { VideoGallery } from "@/components/VideoGallery";
import { MusicPlayer } from "@/components/MusicPlayer";
import { BirthdayWishes } from "@/components/BirthdayWishes";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"photos" | "videos" | "music">("photos");

  return (
    <div className="min-h-screen">
      <Confetti />
      <Hero />
      <BirthdayWishes />
      
      <div className="py-12">
        <h2 className="text-5xl md:text-6xl font-playfair font-bold text-center mb-12 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          Our Memories
        </h2>
        
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
        
        <div className="mt-8">
          {activeTab === "photos" && <PhotoGallery />}
          {activeTab === "videos" && <VideoGallery />}
          {activeTab === "music" && <MusicPlayer />}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 text-center">
        <p className="text-2xl font-vibes text-muted-foreground">
          Made with love for Khushi 💝
        </p>
        <p className="text-sm font-poppins text-muted-foreground mt-2">
          Happy Birthday! May this year be your best one yet! 🎉
        </p>
      </footer>
    </div>
  );
};

export default Index;
