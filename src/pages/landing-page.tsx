import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/custom-button";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative z-30 flex flex-col gap-6 justify-center items-center text-center space-y-6 px-6">
      <motion.h1
        className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        Con todo mi cariño para Fer
      </motion.h1>

      <motion.p
        className="sm:text-lg text-slate-600 max-w-lg mx-auto text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        De corazón espero que este pequeño detalle te gusté y recuerdes siempre lo
        especial e increíble que eres
      </motion.p>

      <motion.div
        className="flex flex-col justify-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 3 }}
      >
        <CustomButton onClick={() => navigate("/prompts")}>
          Comenzar
        </CustomButton>

        {Date.now() >= new Date("2026-01-18T00:00:00").getTime() && (
          <CustomButton onClick={() => navigate("/recordar")}>
            Fer ❤️
          </CustomButton>
        )}
      </motion.div>
    </div>
  );
};

export default LandingPage;
