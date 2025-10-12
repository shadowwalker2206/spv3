import { Cake, Gift, Sparkles, Heart } from "lucide-react";

export const BirthdayWishes = () => {
  const wishes = [
    {
      icon: Cake,
      title: "Sweet Moments",
      message: "May your life be as sweet as the cake we share!",
    },
    {
      icon: Gift,
      title: "Precious Memories",
      message: "Every moment with you is a gift I treasure.",
    },
    {
      icon: Sparkles,
      title: "Endless Joy",
      message: "Wishing you a year filled with magic and wonder!",
    },
    {
      icon: Heart,
      title: "True Friendship",
      message: "Grateful for your friendship every single day!",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-playfair font-bold text-center mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          Special Wishes
        </h2>
        <p className="text-xl text-center text-muted-foreground font-poppins mb-16">
          For someone who deserves the world 💫
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {wishes.map((wish, index) => {
            const Icon = wish.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-3xl p-8 shadow-xl border border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-playfair font-bold mb-2 text-foreground">
                      {wish.title}
                    </h3>
                    <p className="text-lg font-poppins text-muted-foreground leading-relaxed">
                      {wish.message}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
