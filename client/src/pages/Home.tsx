/*
Design Philosophy: Dual Theme Support
- Spider-Man Comic Book Pop Art for Emin
- My Little Pony Magical Pastel for Samira
- Kid selector at the top
- Separate storage for each kid
- Time-based automatic section opening
*/

import RoutineSection from "@/components/RoutineSection";
import KidSelector from "@/components/KidSelector";
import { useMemo, useState, useEffect } from "react";
import { getSelectedKid, saveSelectedKid } from "@/lib/storage";

type KidId = "emin" | "samira";

export default function Home() {
  const [selectedKid, setSelectedKid] = useState<KidId>("emin");

  // Load selected kid from localStorage on mount
  useEffect(() => {
    const saved = getSelectedKid();
    setSelectedKid(saved);
  }, []);

  // Save selected kid when it changes
  const handleKidChange = (kid: KidId) => {
    setSelectedKid(kid);
    saveSelectedKid(kid);
  };

  // Tasks for Emin
  const eminMorningTasks = [
    "Brush your teeth",
    "Make up your bed",
    "Get dressed",
    "Brush your hair",
    "Prepare your schoolbag for school"
  ];

  const eminAfternoonTasks = [
    "Get changed after school",
    "Clean your room",
    "Put your lunch box in the dishwasher",
    "Have lunch",
    "Do your homework",
    "Prepare clothes for jiu-jitsu"
  ];

  const eminEveningTasks = [
    "Brush your teeth",
    "Prepare clothes for tomorrow",
    "Clean your room"
  ];

  // Tasks for Samira
  const samiraMorningTasks = [
    "Brush your teeth",
    "Make up your bed",
    "Get dressed",
    "Brush your hair",
    "Prepare your schoolbag for school"
  ];

  const samiraAfternoonTasks = [
    "Get changed after school",
    "Clean your room",
    "Put your lunch box in the dishwasher",
    "Have lunch",
    "Do your homework"
  ];

  const samiraEveningTasks = [
    "Brush your teeth",
    "Prepare clothes for tomorrow",
    "Clean your room"
  ];

  // Select tasks based on selected kid
  const morningTasks = selectedKid === 'emin' ? eminMorningTasks : samiraMorningTasks;
  const afternoonTasks = selectedKid === 'emin' ? eminAfternoonTasks : samiraAfternoonTasks;
  const eveningTasks = selectedKid === 'emin' ? eminEveningTasks : samiraEveningTasks;

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

  // Theme configuration based on selected kid
  const theme = selectedKid === "emin" ? {
    heroBackground: "https://private-us-east-1.manuscdn.com/sessionFile/TbidjwUVrWipI6gJiC6g1r/sandbox/LVLtIMOS0yyHstPFSVaYHu-img-1_1770727134000_na1fn_aGVyby1jaXR5c2NhcGUtd2Vicw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVGJpZGp3VVZyV2lwSTZnSmlDNmcxci9zYW5kYm94L0xWTHRJTU9TMHl5SHN0UEZTVmFZSHUtaW1nLTFfMTc3MDcyNzEzNDAwMF9uYTFmbl9hR1Z5YnkxamFYUjVjMk5oY0dVdGQyVmljdy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=hf~0iXw3aKCxFtgGploiF3M5frPAxAJ-BOCeSvpniHntqKSDDWQ9Kea~W-3pYnjZGCKZse9XrLg~PxWNOMRM0YKPWxQzvaViLaCFlRaZQXHEjj36AnZQ9cr9-mJlGnlimg4t3hGlKqcZdLegTAqeStBj1akSZx34fSc6yKt1OvUoC4phxNu4RcUz4X7C2vvh4bDugYAmntHF6moXb6OyX7JjVvHI-XlWqrViqZ8qDTwGSfHM1sdTRlTWqoNMveZ0WyZCAHLSBNTBH0FInojqKhLAW269tqX05YX4khVtqHSExvU3pH0jD5jc44l~~oVB8eXTNHcgJvAbr7uqsHhIvg__",
    title1: "SUPERHERO",
    title2: "DAILY MISSIONS!",
    subtitle: "Complete your missions like a true hero! 🕷️",
    footer: "🕷️ GREAT JOB, HERO! 🕷️",
    morningIcon: "https://private-us-east-1.manuscdn.com/sessionFile/TbidjwUVrWipI6gJiC6g1r/sandbox/LVLtIMOS0yyHstPFSVaYHu-img-2_1770727126000_na1fn_bW9ybmluZy1zdW5yaXNlLWljb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVGJpZGp3VVZyV2lwSTZnSmlDNmcxci9zYW5kYm94L0xWTHRJTU9TMHl5SHN0UEZTVmFZSHUtaW1nLTJfMTc3MDcyNzEyNjAwMF9uYTFmbl9iVzl5Ym1sdVp5MXpkVzV5YVhObExXbGpiMjQucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Uzn~UzysdqmTBltfabvbfrzPkgAeg590Snrv0ZMpGePIgvIrQlDjAZ-2xBkNJIOolGTBFShG6SmxDfTrn0ZAsc3E3Sw-FS2yo64VMRmj~UnIarpROkmzAODkvI~y5pIrUJ5v4q98rp6jZmrBFdZ~Un~nbB9Dgfs2JZI1hu7mabZxmKCeWzcmA70fAKXHLXKQRR56LqOdC7LJ8YANZCSUZxG-CqcUjQLanAj~Vn4ddPhX-PmUl2h5jk~WfG0RrSlHlGVvKPGvaZYsfkZfOwZU50tt7dKVeN2hNlXNBlNlYXuMrZGjxJvuXUv9-8OQhDlMDgAzFcfJ9uiYBD1SZS-ncQ__",
    afternoonIcon: "https://private-us-east-1.manuscdn.com/sessionFile/TbidjwUVrWipI6gJiC6g1r/sandbox/LVLtIMOS0yyHstPFSVaYHu-img-3_1770727127000_na1fn_YWZ0ZXJub29uLXNjaG9vbC1pY29u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVGJpZGp3VVZyV2lwSTZnSmlDNmcxci9zYW5kYm94L0xWTHRJTU9TMHl5SHN0UEZTVmFZSHUtaW1nLTNfMTc3MDcyNzEyNzAwMF9uYTFmbl9ZV1owWlhKdWIyOXVMWE5qYUc5dmJDMXBZMjl1LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Jc~i78ybQEUCGR3xO-ON9Q5YFLpCN2D0yY3GzBSN5KzW-9y1-4eL2CeDNm95cJdq4YsKYOyT5kp7KVu3QEgrDzGsLKhIdAcYz1BCRYI4x4Sm-MDxbgRJPHBbWq9p~5vSxzo9WQcmjLPxWgn~uOQgxJdU62sPPmW-gS9zfdfV9mI6GAY1NGw2hcSmDAkMfpszk2SNSKMH8gsQE2W3bTZEkNjKwEbUyaXXV1fL1tRU9nn0XbLknMCQC7HxJPebwvtOUWV5R3OUM0JIAPABmrFQkmk7~uWyPU2gSLjV75c3WidboR0AOvHkxEmogafIoC5ZqDluEHi9peXSqlJEgOES~w__",
    eveningIcon: "https://private-us-east-1.manuscdn.com/sessionFile/TbidjwUVrWipI6gJiC6g1r/sandbox/LVLtIMOS0yyHstPFSVaYHu-img-4_1770727125000_na1fn_ZXZlbmluZy1tb29uLWljb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVGJpZGp3VVZyV2lwSTZnSmlDNmcxci9zYW5kYm94L0xWTHRJTU9TMHl5SHN0UEZTVmFZSHUtaW1nLTRfMTc3MDcyNzEyNTAwMF9uYTFmbl9aWFpsYm1sdVp5MXRiMjl1TFdsamIyNC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=eAmpWg4r1Lg3N2BEh-q9HfFJ0q0-3w5PLGo0xlg0mF43~~VVR-FHopnbmsgfhvBFCcjBoMAmiAqYxrhkFVJvar5OzhcHm0H1iBZG8ZgDVBODKCkJGdyclMmVEYUgTKFwbOhOhKFDfRAvISHfsS4APcjQkFYkZ-sBJ1AkbZ9Y7Ac5pfTF5jcgSito0gxmM-MKEIT1rDAmj4muVfPFF2TTn7ARunGGtDh3B-b6Py~sD~GCY0fNrrsErng2uNd1kXMk5cL3CN3CcNc2ezjTI1LMdg3YHCc1X6wo4mURVrPEE90OZHSJwMxp-Y-OipY2HE8j9jDPz6ACbaXmxpKGbzSjDQ__",
    titleColor: "text-primary",
    subtitleColor: "text-secondary",
  } : {
    heroBackground: "https://private-us-east-1.manuscdn.com/sessionFile/TbidjwUVrWipI6gJiC6g1r/sandbox/e6E7lEs9NIMkLC7e47E7pC-img-1_1770748921000_na1fn_bWxwLWhlcm8tYmFja2dyb3VuZA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVGJpZGp3VVZyV2lwSTZnSmlDNmcxci9zYW5kYm94L2U2RTdsRXM5TklNa0xDN2U0N0U3cEMtaW1nLTFfMTc3MDc0ODkyMTAwMF9uYTFmbl9iV3h3TFdobGNtOHRZbUZqYTJkeWIzVnVaQS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=rDyMugDAcpoPaeYF18T2X-UwQxPTSDUgQQFnk~3l95IrOntwraGVW66LzG8F4rQGlNfVX4WEraC07SpCIMi-XeKu8TvVNpvPSI~L-Wait2al0dj084YYsIoxMiJxn-OMFaDqCdUxqqnaXNRZnMhb6v55SlnKtssPMXQnWZVsyBx2U1-CrR6exd~JGnfWMNI7kWXTHz3~qo8Y89cP81X4k91LddH-cLd3~0eAVSBnhQ9eLhypfsJjA5Mje729-Y3-iakqLXNHuIcU7jDtmEaMojWxO9xm4PmbLWzd21Qve2xtxmXjp2Y6Qjn6okyn1J-U70YtYDiZYXrETSgdmAMTtw__",
    title1: "MAGICAL",
    title2: "DAILY ADVENTURES!",
    subtitle: "Complete your magical tasks! 🦄✨",
    footer: "🦄 AMAZING WORK, SUPERSTAR! ✨",
    morningIcon: "https://private-us-east-1.manuscdn.com/sessionFile/TbidjwUVrWipI6gJiC6g1r/sandbox/e6E7lEs9NIMkLC7e47E7pC_1770748925635_na1fn_bWxwLW1vcm5pbmctaWNvbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVGJpZGp3VVZyV2lwSTZnSmlDNmcxci9zYW5kYm94L2U2RTdsRXM5TklNa0xDN2U0N0U3cENfMTc3MDc0ODkyNTYzNV9uYTFmbl9iV3h3TFcxdmNtNXBibWN0YVdOdmJnLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=WGOxQ-f3MMU3ukpAXbTWEZNffMsjyN-KQQw9yZIbRycY9oKMcOnpgFeRuRRSrMwbHyZG-oS7Io-ZLM6rdSCsTMsqiQrhQiYrIRV23lPb-If8a6ySzMbTMVoBUleN4GUinR-oliZT3DntUA1cCUWrGYDDWzfgSNCNMxcILIG5DE0SlWce2APBEuzfzd5MrG9Y3q1mzcTCJIz3HHYOstdmygUTiGQi3LkHo5CThRNUlBHl6mZnHBUmz2XPdswm15zFEQXehMAWJiWkvG~TXiwisa-UGFDkfcrzMQvD50DvCNYD-s95~mpwS4E8VzGnrvPTaLkkLVjPx~~LSzix5xh7tQ__",
    afternoonIcon: "https://private-us-east-1.manuscdn.com/sessionFile/TbidjwUVrWipI6gJiC6g1r/sandbox/e6E7lEs9NIMkLC7e47E7pC_1770748925636_na1fn_bWxwLWFmdGVybm9vbi1pY29u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVGJpZGp3VVZyV2lwSTZnSmlDNmcxci9zYW5kYm94L2U2RTdsRXM5TklNa0xDN2U0N0U3cENfMTc3MDc0ODkyNTYzNl9uYTFmbl9iV3h3TFdGbWRHVnlibTl2YmkxcFkyOXUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Zpqy9azYJ4JW3AvZO6E57jzX1KJT12-zcYJBCYyxzumL~-deCfvZjCTCXBopGEiVHsdzetnE6RsB-9FB86Vvc-iqbK~BIUIFR1VfebZ8aPeL3uCqucMIEfjD6hkXr6hfe7TyGcyVmA5yFCI13KmfGcT08NLVH2rmXu33gm0Dao-Sh3OJ8bA2p6oetG22C~ngPKJE3iiZoKcrqKSWnBZnfA0jMs5zVNhRZb-iMQHYoDJt718oAAvK7lNZnHGV4L6o0gFDOYZHp1eyMuHmnqpCguOTwodmRMI6HqsInNf6UzkWaQtZI9N-pijHf5ZfhGjJBcLArniVNHhlpojTEU2pMQ__",
    eveningIcon: "https://private-us-east-1.manuscdn.com/sessionFile/TbidjwUVrWipI6gJiC6g1r/sandbox/e6E7lEs9NIMkLC7e47E7pC_1770748925637_na1fn_bWxwLWV2ZW5pbmctaWNvbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVGJpZGp3VVZyV2lwSTZnSmlDNmcxci9zYW5kYm94L2U2RTdsRXM5TklNa0xDN2U0N0U3cENfMTc3MDc0ODkyNTYzN19uYTFmbl9iV3h3TFdWMlpXNXBibWN0YVdOdmJnLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=KDmpZrwxQN4ptE-DstsOuYbBgHd0-to2f-8yjEWHhldr1pELkJnlYtUpW1kTMuCdtuk~Fpo352KT4CYVrf0XuvAjN~2Zj1bhJOV12PRu~-908dQj978CFnOIadej~HOJ8FRUgt63i8vPlgsjropTpuQg~bmysQ86jFCUTfKUm4k-1jsjqp-wATqO9Yi~92p3nWyjOmA5XUCTip4Vd6iHBohK8Wk~slueORo1JF7ccXGb~YucaquUlhnTAAteaDMqRpznmnen1Zd4m4MPvpEw5Aj3HdKADG0drgGgrKdKBNfvBo8H5fWDDJN9S5KsqCr0d5c5Bn7wTIhSOJbci8ePZg__",
    titleColor: "text-pink-500",
    subtitleColor: "text-purple-500",
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 z-0 transition-all duration-700"
        style={{
          backgroundImage: `url('${theme.heroBackground}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />

      {/* Sticky Kid Selector */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm shadow-md py-4">
        <div className="container">
          <KidSelector selectedKid={selectedKid} onKidChange={handleKidChange} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container py-8 md:py-12">

        {/* Header */}
        <header className="text-center mb-12 md:mb-16">
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold ${theme.titleColor} mb-4 drop-shadow-lg transition-colors duration-700`}>
            {theme.title1}
          </h1>
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold ${theme.subtitleColor} mb-6 drop-shadow-lg transition-colors duration-700`}>
            {theme.title2}
          </h1>
          <p className="text-xl md:text-2xl font-bold text-foreground max-w-2xl mx-auto">
            {theme.subtitle}
          </p>
        </header>

        {/* Routine Sections */}
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          <RoutineSection
            title="MORNING MISSION!"
            icon={theme.morningIcon}
            tasks={morningTasks}
            accentColor="yellow"
            defaultOpen={defaultOpenSection === 'morning'}
            kidId={selectedKid}
          />

          <RoutineSection
            title="AFTERNOON DUTIES!"
            icon={theme.afternoonIcon}
            tasks={afternoonTasks}
            accentColor="red"
            defaultOpen={defaultOpenSection === 'afternoon'}
            kidId={selectedKid}
          />

          <RoutineSection
            title="EVENING ROUTINE!"
            icon={theme.eveningIcon}
            tasks={eveningTasks}
            accentColor="blue"
            defaultOpen={defaultOpenSection === 'evening'}
            kidId={selectedKid}
          />
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 pb-8">
          <p className="text-2xl md:text-3xl font-bold text-primary transition-all duration-700">
            {theme.footer}
          </p>
        </footer>
      </div>
    </div>
  );
}
