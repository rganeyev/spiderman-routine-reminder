/*
Design Philosophy: Comic Book Pop Art
- Comic book speech bubble headers with bold typography
- Diagonal expansion animations with elastic easing
- Web-wrap effect on completed tasks
- Halftone patterns and action lines
- POW! sound effects on task completion
- Daily-reset persistent storage
- Completion percentage tracking
*/

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { playPowSound } from "@/lib/soundEffects";
import { loadCheckedTasks, saveCheckedTasks } from "@/lib/storage";

interface RoutineSectionProps {
  title: string;
  icon: string;
  tasks: string[];
  accentColor: "red" | "blue" | "yellow";
  defaultOpen?: boolean;
  kidId: "emin" | "samira";
}

const colorClasses = {
  red: {
    emin: {
      bg: "bg-[oklch(0.55_0.22_27)]",
      text: "text-white",
      border: "border-[oklch(0.55_0.22_27)]",
      checkBg: "data-[state=checked]:bg-[oklch(0.55_0.22_27)]",
    },
    samira: {
      bg: "bg-gradient-to-br from-blue-300 via-cyan-200 to-blue-100",
      text: "text-gray-800",
      border: "border-blue-300",
      checkBg: "data-[state=checked]:bg-blue-300",
    },
  },
  blue: {
    emin: {
      bg: "bg-[oklch(0.45_0.15_265)]",
      text: "text-white",
      border: "border-[oklch(0.45_0.15_265)]",
      checkBg: "data-[state=checked]:bg-[oklch(0.45_0.15_265)]",
    },
    samira: {
      bg: "bg-gradient-to-br from-orange-400 via-pink-400 to-purple-500",
      text: "text-white",
      border: "border-orange-400",
      checkBg: "data-[state=checked]:bg-orange-400",
    },
  },
  yellow: {
    emin: {
      bg: "bg-[oklch(0.85_0.15_95)]",
      text: "text-[oklch(0.2_0.015_65)]",
      border: "border-[oklch(0.85_0.15_95)]",
      checkBg: "data-[state=checked]:bg-[oklch(0.85_0.15_95)]",
    },
    samira: {
      bg: "bg-gradient-to-br from-orange-300 via-pink-300 to-yellow-200",
      text: "text-gray-800",
      border: "border-orange-300",
      checkBg: "data-[state=checked]:bg-orange-300",
    },
  },
};

export default function RoutineSection({ title, icon, tasks, accentColor, defaultOpen = false, kidId }: RoutineSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [checkedTasks, setCheckedTasks] = useState<Set<number>>(new Set());
  const colors = colorClasses[accentColor][kidId];

  // Load checked tasks from localStorage on mount
  useEffect(() => {
    const loaded = loadCheckedTasks(title, kidId);
    setCheckedTasks(loaded);
  }, [title, kidId]);

  const toggleTask = (index: number) => {
    const newChecked = new Set(checkedTasks);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
      // Play POW! sound when checking a task
      playPowSound();
    }
    setCheckedTasks(newChecked);
    // Save to localStorage
    saveCheckedTasks(title, newChecked, kidId);
  };

  // Calculate completion percentage
  const completionPercentage = tasks.length > 0 
    ? Math.round((checkedTasks.size / tasks.length) * 100)
    : 0;

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full"
    >
      <CollapsibleTrigger className="w-full group">
        <div className={`
          relative overflow-hidden
          ${colors.bg} ${colors.text}
          p-6 rounded-lg
          comic-border
          transition-all duration-300
          hover:scale-[1.02] hover:shadow-lg
          flex items-center justify-between gap-4
        `}>
          {/* Background halftone pattern */}
          <div className="absolute inset-0 halftone-bg opacity-20" />
          
          {/* Icon */}
          <div className="relative z-10 flex-shrink-0">
            <img 
              src={icon} 
              alt={title}
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
          </div>
          
          {/* Title and Percentage */}
          <div className="relative z-10 flex-1 text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider">
              {title}
            </h2>
            <div className="text-lg md:text-xl font-bold mt-1 opacity-90">
              {completionPercentage}% COMPLETE
            </div>
          </div>
          
          {/* Chevron */}
          <ChevronDown 
            className={`
              relative z-10 w-8 h-8 transition-transform duration-300
              ${isOpen ? 'rotate-180' : ''}
            `}
          />
        </div>
      </CollapsibleTrigger>

      <CollapsibleContent className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
        <div className="mt-4 space-y-3 bg-white p-6 rounded-lg comic-border">
          {tasks.map((task, index) => (
            <div
              key={index}
              className={`
                flex items-start gap-4 p-4 rounded-md
                transition-all duration-300
                hover:bg-muted/50
                ${checkedTasks.has(index) ? 'opacity-60 scale-95' : 'opacity-100 scale-100'}
              `}
            >
              <Checkbox
                id={`${title}-task-${index}`}
                checked={checkedTasks.has(index)}
                onCheckedChange={() => toggleTask(index)}
                className={`
                  mt-1 w-6 h-6 border-2 ${colors.border}
                  ${colors.checkBg}
                  data-[state=checked]:border-transparent
                `}
              />
              <label
                htmlFor={`${title}-task-${index}`}
                className={`
                  flex-1 text-lg md:text-xl font-medium cursor-pointer
                  ${checkedTasks.has(index) ? 'line-through text-muted-foreground' : 'text-foreground'}
                `}
              >
                {task}
              </label>
            </div>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
