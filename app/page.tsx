
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import LMSSection from "./components/LMSSection/LMSSection";
import TrainingSection from "./components/TrainingSection/TrainingSection";
import ManagementProgram from "./components/ManagementProgram/ManagementProgram";
import TransformationHub from './components/TransformationHub';
import ConsultantTraining from "./components/ConsultantTraining";
import CallToAction from "./components/CallToAction/CallToActionfield";
import TestimonialSlider from "./components/Testimonials/TestimonialSlider";
import CTASection  from "./components/CTASection/CTASection";
import Footer from "./components/Foooter/Footer";

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
      <CallToAction />
      <TestimonialSlider />
      <CTASection />  
      <Footer />
    </div>
  );
}
