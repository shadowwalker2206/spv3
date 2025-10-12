import { Calendar, MapPin, Star } from "lucide-react";

interface Memory {
  date: string;
  title: string;
  description: string;
  location?: string;
}

const memories: Memory[] = [
  {
    date: "First Meeting",
    title: "The Day We Met",
    description: "The beginning of an amazing friendship that changed everything!",
    location: "College",
  },
  {
    date: "Summer 2023",
    title: "Adventure Trip",
    description: "That unforgettable trip where we made countless memories.",
    location: "Mountains",
  },
  {
    date: "Birthday 2023",
    title: "Last Year's Celebration",
    description: "Celebrating your special day with cake, laughter, and joy!",
    location: "Home",
  },
  {
    date: "Recent",
    title: "Our Latest Adventure",
    description: "More memories to cherish and moments to remember forever.",
    location: "City",
  },
];

export const MemoryTimeline = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-primary/5">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-playfair font-bold text-center mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          Our Journey Together
        </h2>
        <p className="text-xl text-center text-muted-foreground font-poppins mb-16">
          Moments that made us who we are today 💫
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary" />

          <div className="space-y-12">
            {memories.map((memory, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-1/2 z-10">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
                </div>

                {/* Content card */}
                <div
                  className={`flex-1 ml-16 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                  } animate-scale-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="bg-card rounded-2xl p-6 shadow-xl border border-border hover:shadow-2xl transition-shadow">
                    <div className="flex items-center gap-2 mb-2 text-primary">
                      <Calendar className="w-5 h-5" />
                      <span className="font-poppins font-semibold">{memory.date}</span>
                    </div>

                    <h3 className="text-2xl font-playfair font-bold text-foreground mb-2 flex items-center gap-2">
                      <Star className="w-5 h-5 text-accent" />
                      {memory.title}
                    </h3>

                    <p className="text-muted-foreground font-poppins mb-2">
                      {memory.description}
                    </p>

                    {memory.location && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span className="font-poppins">{memory.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
