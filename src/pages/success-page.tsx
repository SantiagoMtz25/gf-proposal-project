import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import finalImage from "../assets/snoopy.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const SuccessPage = () => {
  const navigate = useNavigate();
  const { width, height } = useWindowSize();

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Fullscreen image */}
      <img
        src={finalImage}
        alt="Success"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Confetti (force on top) */}
      <Confetti
        width={width}
        height={height}
        recycle={true}
        numberOfPieces={300}
        gravity={0.25}
        style={{ position: "fixed", inset: 0, zIndex: 50 }}
      />

      <motion.div
        className="absolute inset-0 flex flex-col justify-end items-center z-60 p-6 gap-6 pb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <div className="bg-black/25 backdrop-blur-md rounded-3xl px-4 py-2 text-center">
          <h1 className="text-white text-3xl sm:text-4xl font-semibold">
            Te quiero mucho Fer, gracias por ser tan increíble. ❤️
          </h1>
        </div>

        <button
          className="rounded-2xl bg-slate-900 px-6 py-3 text-2xl font-medium text-white transition hover:bg-slate-800"
          type="button"
          onClick={() => navigate("/")}
        >
          Volver
        </button>
      </motion.div>
    </div>
  );
};

export default SuccessPage;
