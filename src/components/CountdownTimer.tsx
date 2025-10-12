import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = ({ targetDate }: { targetDate: Date }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isBirthday, setIsBirthday] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference <= 0) {
        setIsBirthday(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [targetDate]);

  if (isBirthday) {
    return (
      <div className="text-center py-8 animate-scale-in">
        <p className="text-4xl md:text-5xl font-vibes text-primary mb-2">
          🎉 It's Your Birthday! 🎉
        </p>
      </div>
    );
  }

  return (
    <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-border max-w-3xl mx-auto animate-scale-in">
      <div className="flex items-center justify-center gap-2 mb-6">
        <Clock className="w-6 h-6 text-primary" />
        <h3 className="text-2xl font-playfair font-bold text-foreground">
          Countdown to Your Special Day
        </h3>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Minutes", value: timeLeft.minutes },
          { label: "Seconds", value: timeLeft.seconds },
        ].map((item, index) => (
          <div
            key={item.label}
            className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-4 text-center animate-scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-4xl md:text-5xl font-bold font-poppins text-primary mb-2">
              {item.value.toString().padStart(2, "0")}
            </div>
            <div className="text-sm md:text-base font-poppins text-muted-foreground uppercase tracking-wider">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
