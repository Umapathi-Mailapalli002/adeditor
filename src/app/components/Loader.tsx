import { motion } from "framer-motion"
import MediaQuery, { useMediaQuery } from "react-responsive"
export default function Loader() {
    const isSmallScreen = useMediaQuery({maxWidth :640})
    const isMdScreen = useMediaQuery({ maxWidth: 1023 })
    return (
        <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500">
            <div className="flex justify-center ">
            <div className="h-12 rounded-3xl w-9/12 border-2  my-96 sm:w-1/2 md:w-1/2 lg:w-1/4 bg-black">
            <div className="px-2 flex items-center h-12 overflow-clip rounded-3xl mx-auto w-[95%]">
            {(isSmallScreen || isMdScreen) && (<motion.div initial={{x:-200, delay:-10,}} animate={isSmallScreen ? {x: "70vw", scaleX:1} : isMdScreen ? {x:"50vw", scaleX:1} : {}} transition={{    
                      repeat: Infinity,
                      repeatType: "reverrse",
                      ease: "easeOut",
                      duration: 1.2, 
                    }}  className="bg-white rounded-3xl h-4 w-7/12 "></motion.div>)}
            {(!isSmallScreen && !isMdScreen) && (<motion.div initial={{x:-200, delay:-10,}} animate={{x:"25vw", scaleX:1}} transition={{    
                      repeat: Infinity,
                      repeatType: "reverrse",
                      ease: "easeOut",
                      duration: 1.2, 
                    }}  className="bg-white rounded-3xl h-4 w-7/12 "></motion.div>)}
            </div>
            <h1 className="text-2xl text-center font-bold">Loading...</h1>
            </div>
            </div>
        </div>
    )
}