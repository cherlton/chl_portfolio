import { FaArrowRightLong } from "react-icons/fa6";
import SingleExperience from "./SingleExperience";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
const experiences = [

  {
    job: "IT Support Consultant",
    company: "Afrihost",
    date: "Aug 2024-Jan 2025",
    responsibilities: [
      "Internet Connectivity Support",
      "Network Troubleshooting Assistance",
      "Email & Domain Resolution",
    ]
  },
  {
    job: "Junior Software Engineer",
    company: "FluidIntellect",
    date: "2025 - Aug2025",
    responsibilities: [
      "Built responsive UIs with React.js, TypeScript & Tailwind, improving load speed by 30%.",
      "Developed secure Flask REST APIs, serving 1,000+ users and reducing response time by 25%."
    ]
  },
  {
    job: "Frontend Developer",
    company: "Sisol Labour Project",
    date: "Sept 2025 –Jun 2026(Ended)",
    responsibilities: [
      "React & .NET Integration",
      "Automated HR Documentation",
      "Responsive Dashboard Delivery",
      "POPIA & B-BBEE Compliance",
      "Audit-Ready Interface Design",
    ],
  },


];
const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;