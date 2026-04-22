import Image from "next/image";
import Link from "next/link";
// Importing specific icons from React Icons
import { FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { IoMailOutline, IoCallOutline } from "react-icons/io5";
import logo from "../../assets/9.png";

const footerLinks = {
  whatWeDo: [
    "Sustainability Services",
    "Strategy Planning and Implementation",
    "Tech Talent Solutions",
    "Training and Development",
    "IT Consulting Services",
    "Social Impact",
    "Talent Recruitment",
  ],
  company: [
    "About",
    "Jobs",
    "Projects",
    "Our Founder",
    "Business Model",
    "The Team",
    "Contact Us",
    "Blog",
    "FAQs",
    "Testimonials",
  ],
  solution: [
    "Tobams Group Academy",
    "Help a Tech Talent",
    "Campus Ambassadors Program",
    "Join Our Platform",
    "Pricing",
    "Book a Consultation",
    "Join Our Slack Community",
  ],
};

const Footer = () => {
  return (
    <footer className="w-full bg-[#0d010e] text-white pt-16 pb-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="relative w-36 h-10">
              {/* Replace with your actual logo path */}
              <div className="text-xl font-bold text-red-500 flex items-center gap-2 pb-6">
                <Image src={logo} alt="Tobams Group Logo" width={150} height={150} />
              </div>
            </div>
            <p className="text-gray-400 text-[13px] leading-relaxed max-w-sm">
              Tobams Group is an innovative consultancy firm reshaping the
              future of tech talent development in Africa, specializing in
              talent acquisition, internships, and skill development with a
              global perspective.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<FaLinkedinIn size={18} />} />
              <SocialIcon icon={<FaInstagram size={18} />} />
              <SocialIcon icon={<FaXTwitter size={18} />} />
            </div>
          </div>

          <LinkCol title="What We Do" links={footerLinks.whatWeDo} />
          <LinkCol title="Company" links={footerLinks.company} />
          <LinkCol title="Solution" links={footerLinks.solution} />
        </div>

        {/* Middle Section: Contact Card */}
        <div className="bg-[#1a0b1c] rounded-2xl p-8 md:p-10 mb-12 border border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:divide-x lg:divide-gray-800">
            {/* Registered Offices */}
            <div className="lg:col-span-8">
              <h4 className="text-lg font-semibold mb-6">Registered Offices</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <OfficeInfo
                  country="United Kingdom"
                  reg="07451196 (Registered by Company House)"
                  address="Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA"
                />
                <OfficeInfo
                  country="Nigeria"
                  reg="RC 1048722 (Registered by the Corporate Affairs Commission)"
                  address="4, Muaz Close, Angwar-Rimi"
                />
              </div>
            </div>

            {/* Contact Details */}
            <div className="lg:col-span-4 lg:pl-8 flex flex-col justify-center space-y-5">
              <h4 className="text-lg font-semibold">Contact Information</h4>
              <div className="space-y-4">
                <ContactItem
                  icon={<IoMailOutline className="text-red-500" size={20} />}
                  text="theteam@tobamsgroup.com"
                />
                <ContactItem
                  icon={<IoCallOutline className="text-red-500" size={20} />}
                  text="+447886600748"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Legal & Copyright */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-gray-500">
            Copyright © Tobams Group, 2024. All rights reserved.
          </p>
          <div className="flex gap-8 text-[11px] text-gray-400">
            <Link
              href="#"
              className="hover:text-white underline underline-offset-4"
            >
              Terms and Conditions
            </Link>
            <Link
              href="#"
              className="hover:text-white underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="hover:text-white underline underline-offset-4"
            >
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* --- Helper Components for Cleaner Architecture --- */

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <Link
    href="#"
    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-all transform hover:-translate-y-1"
  >
    {icon}
  </Link>
);

const LinkCol = ({ title, links }: { title: string; links: string[] }) => (
  <div className="space-y-4">
    <h3 className="font-bold text-base tracking-tight">{title}</h3>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link}>
          <Link
            href="#"
            className="text-gray-400 text-[13px] hover:text-white transition-colors"
          >
            {link}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const OfficeInfo = ({
  country,
  reg,
  address,
}: {
  country: string;
  reg: string;
  address: string;
}) => (
  <div className="space-y-1">
    <h5 className="text-red-600 text-[14px] font-medium">{country}</h5>
    <p className="text-gray-400 text-[11px] leading-tight">{reg}</p>
    <p className="text-gray-300 text-[12px] mt-2 leading-snug">{address}</p>
  </div>
);

const ContactItem = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => (
  <div className="flex items-center gap-4 text-gray-300 text-[13px]">
    <div className="flex-shrink-0">{icon}</div>
    <span>{text}</span>
  </div>
);

export default Footer;
