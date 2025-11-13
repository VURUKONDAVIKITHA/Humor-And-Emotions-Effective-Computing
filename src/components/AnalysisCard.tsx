import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface AnalysisCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  children: ReactNode;
}

const AnalysisCard = ({ icon: Icon, title, description, children }: AnalysisCardProps) => {
  return (
    <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 rounded-lg bg-gradient-primary">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      {children}
    </Card>
  );
};

export default AnalysisCard;
