import SingleSkill from "./SingleSkill";

import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiFlask, SiSpringboot, SiTailwindcss, SiFastapi, SiMysql } from "react-icons/si";

import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "Java",
    icon: FaJava,
  },
  {
    skill: "Python",
    icon: FaPython,
  },
  {
    skill: "React",
    icon: FaReact,
  },
  {
    skill: "TypeScript",
    icon: BiLogoTypescript,
  },
  {
    skill: "PostgreSQL",
    icon: BiLogoPostgresql,
  },
  {
    skill: "Flask",
    icon: SiFlask,
  },
  {
    skill: "Spring Boot",
    icon: SiSpringboot,
  },
  {
    skill: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    skill: "FastAPI",
    icon: SiFastapi,
  },
  {
    skill: "MySQL",
    icon: SiMysql,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
