import Image from "next/image";
import managementImg from "../../assets/5.jpg";

import BenefitItem from "./BenefitItem";
import { DEFAULT_BENEFITS, DEFAULT_DESCRIPTION } from "./data";
import { ManagementProgramProps } from "./types";

export default function ManagementProgram({
  title = "Management Development Program",
  description = DEFAULT_DESCRIPTION,
  benefits = DEFAULT_BENEFITS,
  image = managementImg,
}: ManagementProgramProps) {
  return (
    <section className="w-full py-12 px-4 md:px-8 lg:px-16 bg-white">
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto overflow-hidden rounded-[2.5rem] bg-[#2D0D26] text-white">
        {/* IMAGE (Desktop only - LEFT SIDE) */}
        <div className="hidden lg:block relative w-2/5 h-[600px] rounded-md  mx-auto mt-15">
          <Image
            src={image}
            alt="Management team collaborating"
            fill
            priority
            className="object-cover object-center rounded-md"
            sizes="50vw"
          />
        </div>

        {/* CONTENT */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <h2 className="text-2xl md:text-4xl font-light md:font-semibold mb-6 leading-tight">
            {title}
          </h2>

          {/* IMAGE (Mobile only - under title) */}
          <div className="block lg:hidden relative w-full h-[220px] mb-6 rounded-[2rem] overflow-hidden">
            <Image
              src={image}
              alt="Management team collaborating"
              fill
              priority
              className="object-cover object-center"
              sizes="50vw"
            />
          </div>

          <div className="space-y-4 text-gray-200 text-sm md:text-base leading-relaxed">
            {description.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>

          {/* Benefits */}
          <div className="mt-8 space-y-3">
            {benefits.map((benefit) => (
              <BenefitItem key={benefit.id} label={benefit.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
