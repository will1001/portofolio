import { LandingPageLayout } from "@/components/LandingPageLayout";
import { Navbar } from "@/components/Navbar";
import { SkillSet } from "@/components/SkillSet";

export default function Home() {
  return (
    <>
      <Navbar />
      <LandingPageLayout />
      <SkillSet />
    </>
  );
}
