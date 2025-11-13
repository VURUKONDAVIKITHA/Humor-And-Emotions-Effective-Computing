import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import AnalysisCard from "./AnalysisCard";
import EmotionResults from "./EmotionResults";

const TextAnalysis = () => {
  const [text, setText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<Record<string, number> | null>(null);
  const { toast } = useToast();

  const handleAnalyze = async () => {
    if (!text.trim()) {
      toast({
        title: "No text provided",
        description: "Please enter some text to analyze",
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
      icon={MessageSquare}
      title="Text Emotion Analysis"
      description="Analyze sentiment and emotions from written text using natural language processing"
    >
      <div className="space-y-4">
        <Textarea
          placeholder="Enter your text here to analyze emotions..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="min-h-[150px] resize-none"
        />
        <Button
          onClick={handleAnalyze}
          disabled={isAnalyzing}
          className="w-full bg-gradient-primary hover:opacity-90"
        >
          {isAnalyzing ? "Analyzing..." : "Analyze Text"}
        </Button>
        {results && <EmotionResults emotions={results} />}
      </div>
    </AnalysisCard>
  );
};

export default TextAnalysis;
