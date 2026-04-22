import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import LMSSection from "./components/LMSSection/LMSSection";
import TrainingSection from "./components/TrainingSection/TrainingSection";
import ManagementProgram from "./components/ManagementProgram/ManagementProgram";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LMSSection />
      <TrainingSection />
      <ManagementProgram />
    </div>
  );
}
