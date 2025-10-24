import { useState } from "react";
import { Confetti } from "@/components/Confetti";
import { FloatingBalloons } from "@/components/FloatingBalloons";
import { Hero } from "@/components/Hero";
import { CountdownTimer } from "@/components/CountdownTimer";
import { MessageSection } from "@/components/MessageSection";
import { BirthdayWishes } from "@/components/BirthdayWishes";
import { MemoryTimeline } from "@/components/MemoryTimeline";
import { Tabs } from "@/components/Tabs";
import { PhotoGallery } from "@/components/PhotoGallery";
import { VideoGallery } from "@/components/VideoGallery";
import { MusicPlayer } from "@/components/MusicPlayer";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"photos" | "videos" | "music">("photos");

  // Set your friend's birthday date here (Year, Month (0-indexed), Day)
  const birthdayDate = new Date(2025, 0, 15); // Example: January 15, 2025

  return (
    <div className="min-h-screen">
      <Confetti />
      <FloatingBalloons />
      <Hero />
      
      {/* Countdown Timer Section */}
      <div className="py-12 px-4">
        <CountdownTimer targetDate={birthdayDate} />
      </div>

      <MessageSection />
      <BirthdayWishes />
      <MemoryTimeline />
      
      <div className="py-12">
        <h2 className="text-5xl md:text-6xl font-playfair font-bold text-center mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          Our Memories
        </h2>
        <p className="text-xl text-center text-muted-foreground font-poppins mb-12">
          Relive our favorite moments together 📸🎬🎵
        </p>
        
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
        
        <div className="mt-8">
          {activeTab === "photos" && <PhotoGallery />}
          {activeTab === "videos" && <VideoGallery />}
          {activeTab === "music" && <MusicPlayer />}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-16 text-center bg-gradient-to-t from-primary/5 to-transparent">
        <div className="space-y-4">
<<<<<<< HEAD
          <p className="text-3xl md:text-4xl font-vibes bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          </p>
=======
>>>>>>> 5c2ce148f0d76419373f475df1ac5034fc9e443a
          <p className="text-lg font-poppins text-muted-foreground">
            Happy Birthday! May this year be your best one yet! 🎉
          </p>
          <div className="flex items-center justify-center gap-2 text-4xl mt-4">
            <span>🎂</span>
            <span>✨</span>
            <span>💝</span>
            <span>🎈</span>
            <span>🎊</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
