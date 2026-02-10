import { Button } from "@/components/ui/button";

interface KidSelectorProps {
  selectedKid: "emin" | "samira";
  onKidChange: (kid: "emin" | "samira") => void;
}

export default function KidSelector({ selectedKid, onKidChange }: KidSelectorProps) {
  return (
    <div className="flex gap-3 justify-center mb-8">
      <Button
        onClick={() => onKidChange("emin")}
        variant={selectedKid === "emin" ? "default" : "outline"}
        size="lg"
        className={`
          text-xl font-bold px-8 py-6 transition-all duration-300
          ${selectedKid === "emin" 
            ? "bg-gradient-to-br from-red-600 to-blue-700 text-white shadow-lg scale-105" 
            : "bg-white/80 text-gray-700 hover:bg-gray-100"
          }
        `}
      >
        🕷️ Emin
      </Button>
      <Button
        onClick={() => onKidChange("samira")}
        variant={selectedKid === "samira" ? "default" : "outline"}
        size="lg"
        className={`
          text-xl font-bold px-8 py-6 transition-all duration-300
          ${selectedKid === "samira" 
            ? "bg-gradient-to-br from-pink-400 via-purple-400 to-blue-300 text-white shadow-lg scale-105" 
            : "bg-white/80 text-gray-700 hover:bg-gray-100"
          }
        `}
      >
        🦄 Samira
      </Button>
    </div>
  );
}
