import { motion } from "framer-motion";

export default function Main() {
    return (
        <>
            <section id="inicio" className='custom mainBg'>
                <div className='text-white maxWidth flex flex-col items-center justify-center h-full'>
                    <motion.p className="text-white text-xl uppercase mb-4 text-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}>Uma clínica projetada para cuidar</motion.p>

                    <motion.h1 className="text-Rosa font-bold text-4xl uppercase text-center lg:text-7xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}>Centro Avançado em saúde integrada </motion.h1>

                    <motion.a className="border py-2 px-4 rounded-md mt-8 uppercase hover:bg-BlueP" target="_blank" href=""
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2, delay: 1 }}>Agende uma sessão</motion.a>
                </div>
            </section>
        </>
    );
}