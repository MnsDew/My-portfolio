import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import summerPhotoroom from "../assets/summerPhotoroom.jpg";  
 
const Hero = () => {
  return (
       <section className={`relative w-full h-screen mx-auto`}>
    <div
      className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
    >
        <div className='flex items-center gap-4'>  
      
        <div className="flex flex-col justify-center items-start mt-1">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-60 h-32 position: ml-2 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I'm <span className="text-[#915eff]">Mansoor</span>
          </h1>
          {/* <p className={`${styles.heroSubText} text-white-100 mt-1 `}> */}
          <p
          // className= {`${text-lg} sm:text-sm md:text-base lg:text-sm  text-white-100}`}
          >

            Aspiring software engineer with knowledge in JavaScript,{" "}
            <br className="sm: block-hidden" />I develop websites and apps. I am
            keen on expanding my expertise in full-stack & MERN-stack
            development, and AI.
            
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={summerPhotoroom}
            alt="summerPhotoroom"
            className=" rounded-full  sm? w-50 h-70 : w-[450px] h- [280px] object-cover border-3 border-black" // Increase size for a better circular look
          />
        </div>
      </div>
    </div>
     
      <ComputersCanvas />

      <div
        className=" absolute xs:bottom-10 bottom-32
       w-full flex justify-center
      items-center"
      >
        <a href="#about">
          <div
            className="w-[35px] h-[64px]
          rounded-3xl border-4 border-secondary 
          flex justfi-center items-start p-2
          "
          >
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary
          mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};


 
export default Hero;
