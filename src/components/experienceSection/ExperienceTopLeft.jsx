import ExperienceInfo from "./ExperienceInfo"

const ExperienceTopLeft = () => {
    return (
        <div className="flex flex-col gap-6 w-[300px]">
            <p className="text-orange font-bold uppercase text-3xl font-special text-center ">
                Since 2024
            </p>
            <div className="flex justify-center items-center gap-10">
                <ExperienceInfo number="2+" text="Years" />
                <p className="font-bold text-6xl text-lightBrown">-</p>
                <ExperienceInfo number="3" text="Companies" />
            </div>
            <p className="text-center text-lightGrey text-sm">
                2+ years of experience building scalable web applications
                across telecom, AI, and HR domains.
            </p>
        </div>
    )
}

export default ExperienceTopLeft;
