import { useState } from "react";
import { Camera, Film, Music } from "lucide-react";
import { Button } from "./ui/button";

interface TabsProps {
  onTabChange: (tab: "photos" | "videos" | "music") => void;
  activeTab: "photos" | "videos" | "music";
}

export const Tabs = ({ onTabChange, activeTab }: TabsProps) => {
  const tabs = [
    { id: "photos" as const, label: "Photos", icon: Camera },
    { id: "videos" as const, label: "Videos", icon: Film },
    { id: "music" as const, label: "Music", icon: Music },
  ];

  return (
    <div className="flex justify-center gap-4 p-6 sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="inline-flex gap-2 bg-card p-2 rounded-2xl shadow-xl border border-border">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <Button
              key={tab.id}
              variant={isActive ? "default" : "ghost"}
              className={`
                font-poppins font-medium transition-all duration-300 rounded-xl
                ${isActive 
                  ? "bg-gradient-to-r from-primary via-accent to-secondary text-white shadow-lg" 
                  : "hover:bg-muted"
                }
              `}
              onClick={() => onTabChange(tab.id)}
            >
              <Icon className="w-5 h-5 mr-2" />
              {tab.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
