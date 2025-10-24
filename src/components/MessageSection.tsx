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
              Dear Kuchi, 💝
            </p>
            
            <p>
              On this special day, I dont know if I have ever said this or not, You are very special to me.
              Its not because of big things but because you were there in small moments. You made me smile when i didn't even want to.
              You listened to me when I had no words. Your presence just made me feel better , I didn't even realise when you became my comfort zone.
            </p>

            <p>
              Yrr I still miss those times when we used sit together during the first workshop, when our lives were peaceful and fun without any chaos.
              But amid all this there is one thing that current khushi singh has stole from me, that's my best friend who used to have fun , who used to stay happy even for no reason,
              and listen and laugh at all my stupidity. During garbostasav I did see a glimpse of that old khushi singh. I am ready to sacrifice anything just to see my old friend back.
              koi toh chahiye jo ki mere gande jokes samjhe. Even though ab hum jyada baat nahi karte but I will always cherish those moments when we used to have fun,
              jab hamlog shruti ko gaali dena sikhate the, that late night 6 hr talk while we were doing CAD Lab Manual, jab steven david ne mera project cancel kiya tha tab tune jaise mujhe shaant kiya wo aaj bhi sochke khush ho jaata hun.
              I think ab jyda hi bakchodi kar chuka itna express karna aata nhi phir bhi itna likh diya.
            </p>

            <p>
              As you celebrate another year of being amazing, I hope this day brings you as much joy as you 
              bring to everyone around you. At the end thanks for all the non stop bakchodi and being my first platonic friend.
              Ab neeche memories wala section dekh usme asli mehnat lagi hai.
            </p>

            <p className="text-center font-vibes text-3xl text-primary mt-8">
              Happy Birthday, Kuchi! 🎂✨
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
