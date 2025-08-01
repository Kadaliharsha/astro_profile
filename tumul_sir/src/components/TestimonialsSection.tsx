import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect, useRef } from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sumeet Somani",
      title: "Director, Karni Packaging",
      content: "Our's was a very well established manufacturing unit and we were planning for expansion of our business. To set up a new manufacturing unit we reached out to Dr. Tumul Raathi for Vastu Consultation. It was very insightful and helped us with selecting the right location and set the right energies at the new Manufacturing Unit. Happy to share that we have tripled our production in just 3 months and will consult you very soon as we look for another space!",
      rating: 5
    },
    {
      name: "Jorawar Singh, ",
      title: "Founder, JS Enterprises",
      content: "I wish I had consulted Dr. Tumul Raathi when I was working on my first business idea. His expertise on Business and Astrology has helped me with strategizing multiple businesses. From astro-branding to his business consultation, I can vouch for him and have helped my friends by recommending his services.",
      rating: 5
    },
    {
      name: "Amit Bajaj, ",
      title: "Founder, Estrella Ceramica",
      content: "A great command on his subject and with amazing analytical & predictive abilities, Tumul ji is one of the finest Astrologers I've ever met his remedies have helped me a lot in business as well as in my personal life. I heart full of wishes & thanks to him.",
      rating: 5
    }
  ];

  // Autoplay logic
  const carouselApiRef = useRef<any>(null);
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselApiRef.current) {
        carouselApiRef.current.scrollNext();
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-lavender-dark mb-6">
            Voices of Transformation
          </h2>
          <p className="text-xl text-cosmic-brown/80 max-w-3xl mx-auto">
            Discover how cosmic wisdom has guided leaders to unprecedented success
          </p>
        </div>
        
        <Carousel opts={{ loop: true }} setApi={api => (carouselApiRef.current = api)} className="max-w-2xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="px-2 w-80 md:w-96 h-96 flex items-center justify-center">
                <Card className="w-full h-full rounded-3xl flex flex-col justify-between transition-all duration-300 shadow-none">
                  <CardContent className="p-8 flex flex-col justify-between h-full">
                    <div className="flex gap-1 mb-4 justify-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-orange fill-orange" />
                      ))}
                    </div>
                    <p className="text-cosmic-brown/80 mb-6 italic text-lg text-center">
                      "{testimonial.content}"
                    </p>
                    <div className="text-center">
                      <h4 className="font-semibold text-cosmic-brown">{testimonial.name}</h4>
                      <p className="text-cosmic-brown/60 text-sm">{testimonial.title}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
