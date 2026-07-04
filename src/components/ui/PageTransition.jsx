import { motion } from "framer-motion";

function PageTransition({ children }) {

    return (

        <motion.div

            initial={{
                opacity:0,
                y:40
            }}

            whileInView={{
                opacity:1,
                y:0
            }}

            viewport={{
                once:true,
                amount:.2
            }}

            transition={{
                duration:.8,
                ease:"easeOut"
            }}

        >

            {children}

        </motion.div>

    );

}

export default PageTransition;