import { FaArrowRightLong } from "react-icons/fa6";
import SingleExperience from "./SingleExperience";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
const experiences=[
    {
        job:"Academic Mentor",
        company:"Tshwane University of Technology (TUT)",
        date:"2022-2024",
        responsibilities:[
            "Guiding students in programming and problem-solving.",
            "Conducting Studythons to help students prepare for exams .",
            "Facilitating varsity orientations for new students .",
            
            
        ],
    
    },
    {
        job: "IT Support Consultant",
        company: "Afrihost",
        date: "2024",
        responsibilities: [
          "Provided technical support for internet connectivity, hosting, and account-related queries.",
          "Assisted clients with troubleshooting network and service-related issues.",
          "Resolved email hosting and domain-related concerns for businesses.",
         
        ]
      },
      {
        job: "Software Engineer Intern",
        company: "FluidIntellect",
        date: "2025 - Present",
        responsibilities: [
          "Developing and maintaining web applications using Python Flask, Reactjs, and TailwindCSS.",
          "Integrating front-end and back-end technologies for seamless user experiences.",
       
        ]
      }
      
      
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