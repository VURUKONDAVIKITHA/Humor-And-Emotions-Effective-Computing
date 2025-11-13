import { useState } from "react";
import { Image, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import AnalysisCard from "./AnalysisCard";
import EmotionResults from "./EmotionResults";

const ImageAnalysis = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<Record<string, number> | null>(null);
  const { toast } = useToast();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        toast({
          title: "Invalid file type",
          description: "Please upload an image file",
          variant: "destructive",
        });
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setResults(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedImage) {
      toast({
        title: "No image selected",
        description: "Please upload an image to analyze",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate analysis - replace with actual API call
    setTimeout(() => {
      setResults({
        joy: Math.random() * 100,
        sadness: Math.random() * 100,
        anger: Math.random() * 100,
        fear: Math.random() * 100,
        surprise: Math.random() * 100,
        neutral: Math.random() * 100,
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <AnalysisCard
      icon={Image}
      title="Facial Emotion Recognition"
      description="Detect emotions from facial expressions in images using computer vision"
    >
      <div className="space-y-4">
        <div className="relative">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            id="image-upload"
          />
          <label
            htmlFor="image-upload"
            className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
          >
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <Upload className="w-10 h-10" />
                <span className="text-sm">Click to upload an image</span>
              </div>
            )}
          </label>
        </div>
        <Button
          onClick={handleAnalyze}
          disabled={isAnalyzing || !selectedImage}
          className="w-full bg-gradient-primary hover:opacity-90"
        >
          {isAnalyzing ? "Analyzing..." : "Analyze Image"}
        </Button>
        {results && <EmotionResults emotions={results} />}
      </div>
    </AnalysisCard>
  );
};

export default ImageAnalysis;
