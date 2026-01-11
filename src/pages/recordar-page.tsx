import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/custom-button";

const RecordarPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-lg text-center flex flex-col gap-6 px-6">
      <motion.h2
        className="text-3xl sm:text-4xl font-semibold text-slate-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Recordar
      </motion.h2>

      <motion.p
        className="text-base sm:text-lg text-slate-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        Aquí puedes poner tu mensaje final, una foto, un carrusel, o lo que quieras.
      </motion.p>

      <motion.div
        className="flex flex-col gap-4 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.8 }}
      >
        <CustomButton onClick={() => window.open("https://www.instagram.com/santiagomartinezvallejo/", "_blank")}>
          Abrir Instagram
        </CustomButton>

        <button
          className="rounded-2xl border border-slate-400 px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-500 hover:text-slate-900"
          onClick={() => navigate("/")}
        >
          Volver al inicio
        </button>
      </motion.div>
    </div>
  );
};

export default RecordarPage;
