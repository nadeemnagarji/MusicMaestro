"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
const content = [
  {
    title: "Expert Instructors",
    description:
      "Learn from the best in the industry. Our instructors are professional musicians with years of experience and a passion for teaching. They are dedicated to helping you master your instrument and achieve your musical goals.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Expert Instructors
      </div>
    ),
  },
  {
    title: "Interactive Lessons",
    description:
      "Engage in interactive lessons that are designed to keep you motivated and improve your skills. Our platform offers real-time feedback and interactive exercises to ensure you’re always learning and growing.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/interactive-lessons.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="interactive lessons demo"
        />
      </div>
    ),
  },
  {
    title: "Flexible Scheduling",
    description:
      "Our flexible scheduling options allow you to learn at your own pace and on your own time. Whether you're a beginner or an advanced musician, our courses are designed to fit into your busy lifestyle.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Flexible Scheduling
      </div>
    ),
  },
  {
    title: "Comprehensive Curriculum",
    description:
      "Our comprehensive curriculum covers a wide range of topics and skills. From basic music theory to advanced techniques, we provide everything you need to become a proficient musician.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Comprehensive Curriculum
      </div>
    ),
  },
  {
    title: "Community Support",
    description:
      "Join a community of fellow music enthusiasts. Our platform offers forums, group classes, and events where you can connect, share your progress, and learn from others.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] flex items-center justify-center text-white">
        Community Support
      </div>
    ),
  },
  {
    title: "Affordable Pricing",
    description:
      "Get access to high-quality music lessons at an affordable price. We offer various pricing plans and packages to suit your budget and learning needs, making top-notch music education accessible to everyone.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--orange-500))] flex items-center justify-center text-white">
        Affordable Pricing
      </div>
    ),
  },
];

function WhyChooseUs() {
  return (
    <div className=" scrollbar-hide">
      <StickyScroll content={content} />
    </div>
  );
}

export default WhyChooseUs;
