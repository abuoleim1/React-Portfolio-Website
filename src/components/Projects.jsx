import {PROJECTS} from "../constants";
import {motion} from "framer-motion";
const Projects =() => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:0.5}}
            
            className="my-20 text-center text-4xl">
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Projects</span></motion.h1>
            <div>
                {PROJECTS.map((project,index)=>(
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div 
                        whileInView={{opacity:1,x:0}}
                        initial={{opacity:0,x:-100}}
                        transition={{duration:1}}
                        className="w-full lg:w-1/4">
                     <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <img 
                            src={project.image} 
                            width={150}
                            height={150}
                            alt={project.title}
                            className="mb-6 rounded"
                        />
                     </a>
                    </motion.div>
                    <motion.div 
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:100}}
                    transition={{duration:1}}
                    
                    className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">{project.title}</h6>
                        <p className="mb-4 text-neutral-400">{project.description}</p>
                        {project.technologies.map((tech,index)=>(
                            <span key={index} 
                            className="mr-2 rounded bg-pink-100 px-2 py-1 text-small font-medium text-neutral-900">

                            {tech}
                            </span>
                        ))}
                    </motion.div>
                    </div>
                ))}
                </div>
        </div>

    );
};
export default Projects;
