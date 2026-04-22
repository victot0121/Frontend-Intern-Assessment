
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import LMSSection from "./components/LMSSection/LMSSection";
import TrainingSection from "./components/TrainingSection/TrainingSection";
import ManagementProgram from "./components/ManagementProgram/ManagementProgram";
import TransformationHub from './components/TransformationHub';
import ConsultantTraining from "./components/ConsultantTraining";
import CallToAction from "./components/CallToAction/CallToAction";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LMSSection />
      <TrainingSection />
      <ManagementProgram />
      <TransformationHub />
      <ConsultantTraining />
      <CallToAction 
        title="Want to accelerate professional growth and development at your organisation?"
        subtitle="See how we can help."
        buttonText="Book a Consultation"
        href="/contact"
        variant="banner"
      />
    </div>
  );
}
