// components/TrainingSection/content.ts

import { StaticImageData } from "next/image";
import training1 from "../../assets/6.jpg";
import training2 from "../../assets/4.jpg";
import training3 from "../../assets/3.jpg";

export interface TrainingItem {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  features: string[];
}

export const TRAINING_DATA: TrainingItem[] = [
  {
    id: "corporate",
    title: "Corporate Trainings",
    description:
      "Empower your team with our customized Corporate Training programs designed to address the unique needs and objectives of your organization.",
    image: training1,
    features: [
      "Leadership Training",
      "Strategic Planning",
      "Project Management",
      "Sustainability Training",
      "Customized Training",
    ],
  },
  {
    id: "individual",
    title: "Personalised Individual Training",
    description:
      "Begin a journey of lifelong learning and professional development with Tobams Group’s diverse range of training programs.",
    image: training2,
    features: [
      "Leadership Development",
      "Soft Skills Development",
      "Industry Specific Knowledge",
      "Technical Skills Enhancement",
      "Time Management",
      "Career Development",
    ],
  },
  {
    id: "capacity",
    title: "Capacity Development",
    description:
      "We empower individuals and organizations through tailored training programs, expert-led workshops, and mentorship.",
    image: training3,
    features: [
      "Tailored Training Programs",
      "Expert-Led Workshops",
      "Personalized Mentorship",
      "Technical Skills Enhancement",
      "Collaborative Learning",
      "Ongoing Support",
    ],
  },
];