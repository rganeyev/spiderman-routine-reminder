/*
Design Philosophy: Comic Book Pop Art
- Dynamic diagonal hero background with cityscape and web patterns
- Speech bubble section headers
- Bold halftone patterns and comic book styling
- Kid-friendly superhero mission theme
- Time-based automatic section opening
*/

import RoutineSection from "@/components/RoutineSection";
import { useMemo } from "react";

export default function Home() {
  const morningTasks = [
    "Brush teeth",
    "Make up the bed",
    "Wear clothes",
    "Brush hair",
    "Prepare schoolbag for the school"
  ];

  const afternoonTasks = [
    "Get changed after school",
    "Clean the room",
    "Put lunch can into dishwasher",
    "Have lunch",
    "Do homework",
    "Prepare clothes for jiu-jitsu"
  ];

  const eveningTasks = [
    "Brush teeth",
    "Prepare clothes for tomorrow",
    "Clean the room"
  ];

  // Determine which section should be open based on current time
  const defaultOpenSection = useMemo(() => {
    const currentHour = new Date().getHours();
    
    if (currentHour >= 0 && currentHour < 12) {
      return 'morning';
    } else if (currentHour >= 12 && currentHour < 18) {
      return 'afternoon';
    } else {
      return 'evening';
    }
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Background with Web Pattern */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/TbidjwUVrWipI6gJiC6g1r/sandbox/LVLtIMOS0yyHstPFSVaYHu-img-1_1770727134000_na1fn_aGVyby1jaXR5c2NhcGUtd2Vicw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVGJpZGp3VVZyV2lwSTZnSmlDNmcxci9zYW5kYm94L0xWTHRJTU9TMHl5SHN0UEZTVmFZSHUtaW1nLTFfMTc3MDcyNzEzNDAwMF9uYTFmbl9hR1Z5YnkxamFYUjVjMk5oY0dVdGQyVmljdy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=hf~0iXw3aKCxFtgGploiF3M5frPAxAJ-BOCeSvpniHntqKSDDWQ9Kea~W-3pYnjZGCKZse9XrLg~PxWNOMRM0YKPWxQzvaViLaCFlRaZQXHEjj36AnZQ9cr9-mJlGnlimg4t3hGlKqcZdLegTAqeStBj1akSZx34fSc6yKt1OvUoC4phxNu4RcUz4X7C2vvh4bDugYAmntHF6moXb6OyX7JjVvHI-XlWqrViqZ8qDTwGSfHM1sdTRlTWqoNMveZ0WyZCAHLSBNTBH0FInojqKhLAW269tqX05YX4khVtqHSExvU3pH0jD5jc44l~~oVB8eXTNHcgJvAbr7uqsHhIvg__')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />

      {/* Main Content */}
      <div className="relative z-10 container py-8 md:py-12">
        {/* Header */}
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-4 drop-shadow-lg">
            SUPERHERO
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-secondary mb-6 drop-shadow-lg">
            DAILY MISSIONS!
          </h1>
          <p className="text-xl md:text-2xl font-bold text-foreground max-w-2xl mx-auto">
            Complete your missions like a true hero! 🕷️
          </p>
        </header>

        {/* Routine Sections */}
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          <RoutineSection
            title="MORNING MISSION!"
            icon="https://private-us-east-1.manuscdn.com/sessionFile/TbidjwUVrWipI6gJiC6g1r/sandbox/LVLtIMOS0yyHstPFSVaYHu-img-2_1770727126000_na1fn_bW9ybmluZy1zdW5yaXNlLWljb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVGJpZGp3VVZyV2lwSTZnSmlDNmcxci9zYW5kYm94L0xWTHRJTU9TMHl5SHN0UEZTVmFZSHUtaW1nLTJfMTc3MDcyNzEyNjAwMF9uYTFmbl9iVzl5Ym1sdVp5MXpkVzV5YVhObExXbGpiMjQucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Uzn~UzysdqmTBltfabvbfrzPkgAeg590Snrv0ZMpGePIgvIrQlDjAZ-2xBkNJIOolGTBFShG6SmxDfTrn0ZAsc3E3Sw-FS2yo64VMRmj~UnIarpROkmzAODkvI~y5pIrUJ5v4q98rp6jZmrBFdZ~Un~nbB9Dgfs2JZI1hu7mabZxmKCeWzcmA70fAKXHLXKQRR56LqOdC7LJ8YANZCSUZxG-CqcUjQLanAj~Vn4ddPhX-PmUl2h5jk~WfG0RrSlHlGVvKPGvaZYsfkZfOwZU50tt7dKVeN2hNlXNBlNlYXuMrZGjxJvuXUv9-8OQhDlMDgAzFcfJ9uiYBD1SZS-ncQ__"
            tasks={morningTasks}
            accentColor="yellow"
            defaultOpen={defaultOpenSection === 'morning'}
          />

          <RoutineSection
            title="AFTERNOON DUTIES!"
            icon="https://private-us-east-1.manuscdn.com/sessionFile/TbidjwUVrWipI6gJiC6g1r/sandbox/LVLtIMOS0yyHstPFSVaYHu-img-3_1770727127000_na1fn_YWZ0ZXJub29uLXNjaG9vbC1pY29u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVGJpZGp3VVZyV2lwSTZnSmlDNmcxci9zYW5kYm94L0xWTHRJTU9TMHl5SHN0UEZTVmFZSHUtaW1nLTNfMTc3MDcyNzEyNzAwMF9uYTFmbl9ZV1owWlhKdWIyOXVMWE5qYUc5dmJDMXBZMjl1LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Jc~i78ybQEUCGR3xO-ON9Q5YFLpCN2D0yY3GzBSN5KzW-9y1-4eL2CeDNm95cJdq4YsKYOyT5kp7KVu3QEgrDzGsLKhIdAcYz1BCRYI4x4Sm-MDxbgRJPHBbWq9p~5vSxzo9WQcmjLPxWgn~uOQgxJdU62sPPmW-gS9zfdfV9mI6GAY1NGw2hcSmDAkMfpszk2SNSKMH8gsQE2W3bTZEkNjKwEbUyaXXV1fL1tRU9nn0XbLknMCQC7HxJPebwvtOUWV5R3OUM0JIAPABmrFQkmk7~uWyPU2gSLjV75c3WidboR0AOvHkxEmogafIoC5ZqDluEHi9peXSqlJEgOES~w__"
            tasks={afternoonTasks}
            accentColor="red"
            defaultOpen={defaultOpenSection === 'afternoon'}
          />

          <RoutineSection
            title="EVENING ROUTINE!"
            icon="https://private-us-east-1.manuscdn.com/sessionFile/TbidjwUVrWipI6gJiC6g1r/sandbox/LVLtIMOS0yyHstPFSVaYHu-img-4_1770727125000_na1fn_ZXZlbmluZy1tb29uLWljb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVGJpZGp3VVZyV2lwSTZnSmlDNmcxci9zYW5kYm94L0xWTHRJTU9TMHl5SHN0UEZTVmFZSHUtaW1nLTRfMTc3MDcyNzEyNTAwMF9uYTFmbl9aWFpsYm1sdVp5MXRiMjl1TFdsamIyNC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=eAmpWg4r1Lg3N2BEh-q9HfFJ0q0-3w5PLGo0xlg0mF43~~VVR-FHopnbmsgfhvBFCcjBoMAmiAqYxrhkFVJvar5OzhcHm0H1iBZG8ZgDVBODKCkJGdyclMmVEYUgTKFwbOhOhKFDfRAvISHfsS4APcjQkFYkZ-sBJ1AkbZ9Y7Ac5pfTF5jcgSito0gxmM-MKEIT1rDAmj4muVfPFF2TTn7ARunGGtDh3B-b6Py~sD~GCY0fNrrsErng2uNd1kXMk5cL3CN3CcNc2ezjTI1LMdg3YHCc1X6wo4mURVrPEE90OZHSJwMxp-Y-OipY2HE8j9jDPz6ACbaXmxpKGbzSjDQ__"
            tasks={eveningTasks}
            accentColor="blue"
            defaultOpen={defaultOpenSection === 'evening'}
          />
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 pb-8">
          <p className="text-2xl md:text-3xl font-bold text-primary">
            🕷️ GREAT JOB, HERO! 🕷️
          </p>
        </footer>
      </div>
    </div>
  );
}
