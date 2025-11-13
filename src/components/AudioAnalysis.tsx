import { useState } from "react";
import { Mic, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import AnalysisCard from "./AnalysisCard";
import EmotionResults from "./EmotionResults";

const AudioAnalysis = () => {
  const [selectedAudio, setSelectedAudio] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<Record<string, number> | null>(null);
  const { toast } = useToast();

  const handleAudioUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('audio/')) {
        toast({
          title: "Invalid file type",
          description: "Please upload an audio file",
          variant: "destructive",
        });
        return;
      }
      setSelectedAudio(file);
      setResults(null);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedAudio) {
      toast({
        title: "No audio selected",
        description: "Please upload an audio file to analyze",
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
      icon={Mic}
      title="Voice Emotion Analysis"
      description="Analyze emotions from voice tone and speech patterns in audio recordings"
    >
      <div className="space-y-4">
        <div className="relative">
          <input
            type="file"
            accept="audio/*"
            onChange={handleAudioUpload}
            className="hidden"
            id="audio-upload"
          />
          <label
            htmlFor="audio-upload"
            className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
          >
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <Upload className="w-10 h-10" />
              <span className="text-sm">
                {selectedAudio ? selectedAudio.name : "Click to upload audio"}
              </span>
            </div>
          </label>
        </div>
        <Button
          onClick={handleAnalyze}
          disabled={isAnalyzing || !selectedAudio}
          className="w-full bg-gradient-primary hover:opacity-90"
        >
          {isAnalyzing ? "Analyzing..." : "Analyze Audio"}
        </Button>
        {results && <EmotionResults emotions={results} />}
      </div>
    </AnalysisCard>
  );
};

export default AudioAnalysis;
