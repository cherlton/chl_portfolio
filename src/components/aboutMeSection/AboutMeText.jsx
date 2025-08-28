import {Link} from "react-scroll"
const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start smitems-center md:text-left sm:text-center">
        <h2 className="text-6xl text-cyan  mb-10" >About Me</h2>
        <p>
        Full-Stack Developer with 0-1 year of experience skilled in Python (Flask), Java (Spring Boot), TypeScript, React.js, and 
        MySQL. Experienced in delivering production-ready web and mobile apps from UI to database, with proven expertise in 
        REST API integrations, scalable backend services, and responsive frontends. Ready to start immediately.
        </p>

        <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
        spy={true}
        smooth={true}
        duration={500}
        offset={-120}
        to="projects"
        className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
        My Projects
        </Link>
        </button>
      
    </div>
  )
}

export default AboutMeText
