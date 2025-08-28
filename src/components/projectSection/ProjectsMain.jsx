
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";


const projects=[
    {
        name:"Textbook Trader Web Application ",
        year:"Jun2025",
        align:"right",
        image:'/images/textbook.png',
        link:'https://www.linkedin.com/feed/update/urn:li:activity:7360219911060619264/'

    },
    {
        name:"AI mood DJ ",
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
        name:"Lumora ",
        year:"Jun2025",
        align:"left",
        image:'/images/lumora.jfif',
        link:'https://www.linkedin.com/in/nhlangano-mhangwana-4418612a4/details/projects/'

    },
    {
        name:"Radio Veritas ",
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
        name:"Barber Shop Web Application ",
        year:"Jun2024",
        align:"right",
        image:'/images/project1.png',
        link:'https://github.com/cherlton/Barber-web-App-final-project-'

    },
    {
        name:"Clothing Design Web Application ",
        year:"Jun2024",
        align:"left",
        image:'/images/project2.png',
        link:'https://github.com/cherlton/Clothing-Design-Web-App'

    },
    {
        name:"TUT DEMO WEB APP ",
        year:"Aug2024",
        align:"right",
        image:'/images/project3.png',
        link:'https://cherlton.github.io/TUT-DEMO-WEB/contact.html'

    },
]
const ProjectsMain = () => {
  return (
    <div 
    id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{once:false,amount: 0.7}}
      >
        <ProjectsText/>
      </motion.div>

      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index)=>{
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
    </div>
  )
}

export default ProjectsMain
