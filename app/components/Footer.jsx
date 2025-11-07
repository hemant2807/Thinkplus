import { Facebook, Instagram, Youtube, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#05010f] py-24 text-gray-300 relative overflow-hidden">
      <div className="absolute left-0 top-0 w-[350px] h-[350px] bg-purple-900/10 blur-[180px] rounded-full"></div>
      <div className="absolute right-0 bottom-0 w-[350px] h-[350px] bg-blue-700/10 blur-[180px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-20 relative">
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Think<span className="text-orange-400">Plus</span>
          </h2>

          <p className="text-gray-400 text-[17px] leading-relaxed max-w-xs">
            A modern learning platform built to help students crack competitive
            exams with structured preparation.
          </p>

          <div className="flex gap-5 mt-6">
            <Facebook className="w-7 h-7 hover:text-white transition cursor-pointer" />
            <Instagram className="w-7 h-7 hover:text-white transition cursor-pointer" />
            <Youtube className="w-7 h-7 hover:text-white transition cursor-pointer" />
            <Mail className="w-7 h-7 hover:text-white transition cursor-pointer" />
          </div>
        </div>

        <div>
          <h3 className="text-[20px] font-semibold mb-5">Quick Links</h3>
          <ul className="space-y-3 text-[17px]">
            <li className="hover:text-white transition cursor-pointer">Home</li>
            <li className="hover:text-white transition cursor-pointer">
              About
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Courses
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[20px] font-semibold mb-5">Courses</h3>
          <ul className="space-y-3 text-[17px]">
            <li className="hover:text-white transition cursor-pointer">
              Banking
            </li>
            <li className="hover:text-white transition cursor-pointer">SSC</li>
            <li className="hover:text-white transition cursor-pointer">CAT</li>
            <li className="hover:text-white transition cursor-pointer">CUET</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[20px] font-semibold mb-5">Contact</h3>
          <p className="text-[17px] text-gray-400 mb-2">
            Email: support@thinkplus.com
          </p>
          <p className="text-[17px] text-gray-400 mb-2">
            Phone: +91-9876543210
          </p>
          <p className="text-[17px] text-gray-400">Location: Delhi, India</p>
        </div>
      </div>

      <div className="mt-20 border-t border-white/10"></div>

      <div className="text-center text-gray-500 text-[16px] mt-6">
        © {new Date().getFullYear()} ThinkPlus Education. All rights reserved.
      </div>
    </footer>
  );
}
