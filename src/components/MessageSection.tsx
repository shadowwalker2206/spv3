import { Mail, Sparkles } from "lucide-react";

export const MessageSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <Mail className="w-8 h-8 text-primary" />
            <h2 className="text-5xl md:text-6xl font-playfair font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              A Special Message
            </h2>
            <Sparkles className="w-8 h-8 text-accent" />
          </div>
        </div>

        <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-border animate-scale-in">
          <div className="space-y-6 text-lg md:text-xl font-poppins text-muted-foreground leading-relaxed">
            <p className="text-center">
              Dear Khushi, 💝
            </p>
            
            <p>
              On this special day, I want you to know how incredibly grateful I am to have you in my life. 
              Your smile lights up every room, and your kindness touches everyone around you.
            </p>

            <p>
              Every moment we've shared together has been a treasure. From the silly inside jokes to the 
              deep conversations, from the adventures to the quiet moments – each memory is precious to me.
            </p>

            <p>
              You have this amazing ability to make ordinary days extraordinary. Your energy, your laughter, 
              your genuine care for others – these are just a few of the countless reasons why you're so special.
            </p>

            <p>
              As you celebrate another year of being amazing, I hope this day brings you as much joy as you 
              bring to everyone around you. May all your dreams come true, and may this year be filled with 
              love, laughter, and unforgettable moments! 🎉
            </p>

            <p className="text-center font-vibes text-3xl text-primary mt-8">
              Happy Birthday, Khushi! 🎂✨
            </p>

            <p className="text-center text-base italic mt-4">
              Here's to more memories, more laughter, and more adventures together! 🎈
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
