import { useEffect, useState } from "react";

interface Balloon {
  id: number;
  left: number;
  delay: number;
  duration: number;
  emoji: string;
}

export const FloatingBalloons = () => {
  const [balloons, setBalloons] = useState<Balloon[]>([]);

  useEffect(() => {
    const balloonEmojis = ["🎈", "🎈", "🎈", "🎈", "🎈"];

    const pieces: Balloon[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
      emoji: balloonEmojis[Math.floor(Math.random() * balloonEmojis.length)],
    }));

    setBalloons(pieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="absolute text-4xl animate-float"
          style={{
            left: `${balloon.left}%`,
            bottom: "-50px",
            animationDelay: `${balloon.delay}s`,
            animationDuration: `${balloon.duration}s`,
          }}
        >
          {balloon.emoji}
        </div>
      ))}
    </div>
  );
};
