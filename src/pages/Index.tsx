import Hero from "@/components/Hero";
import TextAnalysis from "@/components/TextAnalysis";
import ImageAnalysis from "@/components/ImageAnalysis";
import AudioAnalysis from "@/components/AudioAnalysis";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      <section className="px-4 py-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TextAnalysis />
          <ImageAnalysis />
          <AudioAnalysis />
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
        <p>Powered by advanced AI and machine learning models</p>
      </footer>
    </div>
  );
};

export default Index;
