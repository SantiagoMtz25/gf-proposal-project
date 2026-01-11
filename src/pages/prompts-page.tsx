import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import carousel from "../contents/carousel.json";
import MagicalFlowers from "../components/moving-flowers";

const PromptsPage = () => {
  const navigate = useNavigate();
  const prompts = carousel.carousel;

  const [promptIndex, setPromptIndex] = useState(0);
  const [hideButtons, setHideButtons] = useState<boolean>(false);

  const isLastMessage = promptIndex === prompts.length - 1;

  const goNext = () => {
    if (promptIndex === prompts.length - 1) {
      setHideButtons(true);
    }

    setPromptIndex((current) =>
      current === prompts.length - 1
        ? (current = current)
        : (current = current + 1)
    );
  };

  const goPrev = () => {
    setPromptIndex((current) => (current === 0 ? (current = 0) : current - 1));
  };

  const goBackHome = () => {
    setPromptIndex(0);
    navigate("/");
  };

  return (
    <div className="w-full max-w-lg text-center min-h-100 grid grid-rows-[1fr_3fr_1fr] items-center justify-items-center gap-5 border border-red-500">
      <AnimatePresence>
        {!hideButtons && (
          <motion.p
            key="counter"
            className="text-sm uppercase tracking-[0.3em] text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3, delay: 0 } }}
          >
            {promptIndex + 1} / {prompts.length}
          </motion.p>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!hideButtons && (
          <motion.p
            key="prompt"
            className="text-3xl sm:text-4xl font-semibold text-slate-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
            exit={{ opacity: 0, transition: { duration: 0.3, delay: 0 } }}
          >
            {prompts[promptIndex]}
          </motion.p>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!hideButtons && (
          <motion.div
            key="buttons"
            className="flex flex-wrap justify-center gap-5 text-slate-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 3 }}
            exit={{ opacity: 0, transition: { duration: 0.3, delay: 0 } }}
          >
            <button
              className="rounded-2xl border border-slate-400 px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-500 hover:text-slate-900"
              onClick={goPrev}
            >
              Anterior
            </button>

            <button
              className="rounded-2xl border border-slate-400 px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-500 hover:text-slate-900"
              onClick={goNext}
            >
              Siguiente
            </button>

            <button
              className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
              type="button"
              onClick={goBackHome}
            >
              Volver
            </button>
          </motion.div>
        )}
      </AnimatePresence>

        {isLastMessage && !hideButtons && (
            <div>
            
            </div>
        )}
    </div>
  );
};

export default PromptsPage;
