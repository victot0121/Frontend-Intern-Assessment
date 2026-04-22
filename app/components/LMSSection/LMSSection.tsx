import Image from "next/image";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import lmsimage from "../../assets/1.jpg";

const COURSES = [
  "Business Analysis",
  "Design Thinking",
  "Effective Communication",
  "Entrepreneurship",
  "Career Development",
  "Business Model",
];

export default function LMSSection() {
  return (
    <section className="w-full bg-[#EAE3E9] py-16 px-6 md:px-12 lg:px-24 mt-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Container - Circular Crop */}
        <div className="order-1 lg:order-1 flex flex-col md:flex-row justify-center">
             <h2 className="block text-2xl md:hidden font-light text-[#4A154B] py-6">
              Learning Management System
            </h2>
          <div className="relative w-full aspect-square max-w-[500px] overflow-hidden rounded-full border-8 border-white/20 shadow-xl">
            <Image
              src={lmsimage}
              alt="Tech Talents"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="order-2 lg:order-2 flex flex-col gap-6">
          <h2 className="hidden text-3xl md:block md:text-4xl font-bold text-[#4A154B]">
            Learning Management System
          </h2>

          <div className="bg-[#D9CED8] p-8 rounded-2xl shadow-sm">
            <p className="text-gray-700 leading-relaxed mb-6">
              TG Academy is a hub of knowledge and skill-building resources
              designed to empower tech talents on their learning journey. From
              technical courses covering the latest programming languages and
              development frameworks to soft skills training in leadership,
              effective communication and project management, TG Academy offers
              a wide range of courses to cater to diverse learning needs. With
              accessible and interactive learning materials, individuals can
              enhance their skills and stay ahead in today&apos;s competitive
              tech landscape.
            </p>

            <h3 className="text-[#4A154B] font-bold mb-4">
              Some of our courses include:
            </h3>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 list-disc list-inside text-gray-700">
              {COURSES.map((course) => (
                <li key={course} className="text-sm md:text-base">
                  {course}
                </li>
              ))}
            </ul>
          </div>

          <button className="flex items-center justify-center gap-2 w-fit bg-[#5C164E] text-white px-8 py-3 rounded-md hover:bg-[#4A154B] transition-colors group">
            Learn More
            <HiOutlineArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
