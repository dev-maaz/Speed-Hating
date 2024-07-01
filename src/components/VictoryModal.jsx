
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";

const dropIn = {

    hidden: {
        y:"-100px"
    },
    visible: {
        y:"0",
        opacity: 1,
        transtion: {
            duration: 0.1,
            type: "spring"
        }
    },
    exit: {
        y: "100px"
    }

}

function VictoryModal( {handleClose, text}) {

    return (
    
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e)=>{e.stopPropagation()}}
                className="py-4 rounded-xl flex flex-col items-center bg-red-400 p-8"
                variants={dropIn} 
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <p>{text}</p>
                <button onClick={handleClose}>Close</button>
            </motion.div>

        </Backdrop>
    );
}

export default VictoryModal;