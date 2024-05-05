import { motion } from "framer-motion"


function Outline() {


    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 180, scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
        />
    )

}


export default Outline