import {Link} from "react-scroll"
const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start smitems-center md:text-left sm:text-center">
        <h2 className="text-6xl text-cyan  mb-10" >About Me</h2>
        <p>
        I am, Cherlton Nhlangano Mhangwana, a Software Developer/Engineer intern at FluidIntellect, gaining hands-on experience in development.
        Previously, I worked at Afrihost for 6 months, where I built expertise in client services and hosting solutions.

        Beyond tech, I was a mentor and coordinator for university Studythons and orientations at TUT, helping students navigate academic challenges. Now, I am in the final stretch of my Computer Science diploma, set to graduate in 6 months.
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
