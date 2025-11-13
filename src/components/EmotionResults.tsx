import { Progress } from "@/components/ui/progress";

interface EmotionResultsProps {
  emotions: Record<string, number>;
}

const EmotionResults = ({ emotions }: EmotionResultsProps) => {
  const emotionColors: Record<string, string> = {
    joy: "bg-emotion-joy",
    sadness: "bg-emotion-sadness",
    anger: "bg-emotion-anger",
    fear: "bg-emotion-fear",
    surprise: "bg-emotion-surprise",
    neutral: "bg-emotion-neutral",
  };

  const sortedEmotions = Object.entries(emotions).sort(([, a], [, b]) => b - a);

  return (
    <div className="mt-6 p-4 rounded-lg bg-muted/30 border border-border">
      <h4 className="text-sm font-semibold mb-4">Emotion Analysis Results</h4>
      <div className="space-y-3">
        {sortedEmotions.map(([emotion, value]) => (
          <div key={emotion} className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <span className="capitalize font-medium">{emotion}</span>
              <span className="text-muted-foreground">{value.toFixed(1)}%</span>
            </div>
            <div className="relative h-2 rounded-full bg-secondary overflow-hidden">
              <div
                className={`absolute inset-y-0 left-0 rounded-full ${emotionColors[emotion]} transition-all duration-1000 ease-out`}
                style={{ width: `${value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground">
          Dominant emotion:{" "}
          <span className="font-semibold capitalize text-foreground">
            {sortedEmotions[0][0]}
          </span>
        </p>
      </div>
    </div>
  );
};

export default EmotionResults;
