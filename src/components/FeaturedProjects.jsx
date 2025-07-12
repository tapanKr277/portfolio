
import ProjectCard from './ProjectCard'

const projects=[
    {
        h1:"OpenChat – Speak Your Mind, Unfiltered & Free!",
        p:"OpenChat is a judgment-free space where anyone can express their thoughts freely. No filters, no restrictions—just raw, unfiltered conversations with a community that values true expression.",
        year:"2023",
        role:"Developer",
        livelink:"https://vite-chatapp.vercel.app/",
        gitlink:"https://github.com/sirdroj/vite_chatapp",
        img:"./chatapp.png"
    },
    {
        h1:"Interviewer bot",
        p:"I developed a Voice-to-Voice Interview Bot using Python and Streamlit, integrating Groq APIs for LLM operations. The bot leverages DeepSeek for language understanding, Whisper for speech-to-text, and PlayAI-TTS for text-to-speech conversion. This real-time system enables seamless, natural conversations, showcasing advanced AI integration and user-friendly voice interaction capabilities.",
        year:"2025",
        role:"Developer",
        // livelink:"https://aboutrepl-oggtwskbcc3kiegbgdfswu.streamlit.app/",
        gitlink:"https://github.com/sirdroj/interview_bot",
        img:"./interviewBot.png"
    },

]

const FeaturedProjects = () => {
    return (

        <div className='w-full pt-10' id='work'>
            <h1 className=' text-[42px] lg:text-7xl text-LightBlue my-2'>Featured Projects</h1>
            <p className=' lg:text-lg text-base  text-secondary font-manrope mb-5 w-full'>Here are some of the selected projects that showcase my passion for front-end development.</p>
            {/* <ProjectCard /> */}
            {projects.map((item,idx)=>(
                <ProjectCard data={item} key={idx} />
            ))}
        </div>

    )
}

export default FeaturedProjects