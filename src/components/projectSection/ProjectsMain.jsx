
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaGithub } from "react-icons/fa";

const projects=[
    {
        name:"LabourX",
        year:"2025",
        align:"right",
        image:'/images/img2.png',
        link:'https://www.labourx.app/'
    },
    {
        name:"SisolConnex",
        year:"2025",
        align:"left",
        image:'/images/img1.png',
        link:'https://www.sisolconnex.com/'
    },
    {
        name:"Textbook Trader Web Application",
        year:"Jun2025",
        align:"right",
        image:'/images/textbook.png',
        link:'https://www.linkedin.com/feed/update/urn:li:activity:7360219911060619264/'
    },
    {
        name:"AI Mood DJ",
        year:"Jul2025",
        align:"left",
        image:'/images/AIDJ.png',
        link:'https://www.linkedin.com/feed/update/urn:li:activity:7360247363614969856/'
    },
    {
        name:"ISP SpeedTest Pro",
        year:"Aug2025",
        align:"right",
        image:'/images/speedTest.png',
        link:'https://www.linkedin.com/feed/update/urn:li:activity:7364728634764410882/'
    },
    {
        name:"Lumora",
        year:"Jun2025",
        align:"left",
        image:'/images/lumora.jfif',
        link:'https://www.linkedin.com/in/nhlangano-mhangwana-4418612a4/details/projects/'
    },
    {
        name:"Radio Veritas",
        year:"Aug2024",
        align:"right",
        image:'/images/rv.png',
        link:'https://radioveritas.co.za/'
    },
    {
        name:"Maid4u",
        year:"Jun2024",
        align:"left",
        image:'/images/maid4u.png',
        link:'https://www.maid4u.co.za/'
    },
    {
        name:"Barber Shop Web Application",
        year:"Jun2024",
        align:"right",
        image:'/images/project1.png',
        link:'https://github.com/cherlton/Barber-web-App-final-project-'
    },
    {
        name:"Clothing Design Web Application",
        year:"Jun2024",
        align:"left",
        image:'/images/project2.png',
        link:'https://github.com/cherlton/Clothing-Design-Web-App'
    },
    {
        name:"TUT Demo Web App",
        year:"Aug2024",
        align:"right",
        image:'/images/project3.png',
        link:'https://cherlton.github.io/TUT-DEMO-WEB/contact.html'
    },
]

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{once:false, amount: 0.7}}
      >
        <ProjectsText/>
      </motion.div>

      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
            return(
                <SingleProject
                  key={index}
                  name={project.name}
                  year={project.year}
                  align={project.align}
                  image={project.image}
                  link={project.link}
                />
            )
        })}
      </div>

      {/* GitHub CTA */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{once:false, amount: 0.5}}
        className="flex justify-center mt-16 mb-8"
      >
        <a
          href="https://github.com/cherlton"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-cyan text-cyan text-lg font-semibold rounded-full hover:bg-cyan hover:text-darkGrey transition-all duration-500 hover:scale-105 transform"
        >
          <FaGithub className="text-2xl" />
          View More on GitHub
        </a>
      </motion.div>
    </div>
  )
}

export default ProjectsMain
