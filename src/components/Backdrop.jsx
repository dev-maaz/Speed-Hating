
import { motion } from "framer-motion";
import React from "react";

const Backdrop = ({children, onClick}) => {

 return (
    <motion.div
        className="absolute top-0 left-0 h-full w-full bg-black/70 flex justify-center items-center"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        onClick={onClick}
    >
        {children}

    </motion.div>
        );
}

export default Backdrop;