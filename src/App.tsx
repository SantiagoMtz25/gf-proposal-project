import { useState } from "react"
import { motion } from "motion/react"
import CustomButton from "./components/custom-button"
import FlowerSides from "./components/flower-sides"
import "./App.css"

const App = () => {
  const prompts = [
    "Conocerte fue lo mejor del 2025.",
    "La primera vez que te vi supe que eras especial.",
    "Te veías aún más hermosa de lo que imaginaba.",
    "Tienes una sonrisa divina.",
    "Me encanta tu forma de ser.",
    "Eres una persona increíblemente inteligente.",
    "Tierna, cariñosa, divertida, y hermosa.",
    "Conocerte ha sido un regalo muy especial.",
    "Estar contigo se siente seguro.",
    "Y estos últimos meses no puedo pensar en otra cosa que no seas tú.",
    "En que quiero estar a tu lado.",
    "Por todas estas razones y muchas más,",
    "Quiero que sepas que te quiero muchísimo.",
    "Finalmente, tengo algo muy importante que preguntarte...",
  ];

  const [view, setView] = useState<"landing" | "prompts">("landing");
  const [promptIndex, setPromptIndex] = useState(0);

  const goNext = () => {
    setPromptIndex((current) => 
      current === prompts.length - 1 ? current = current : current = (current + 1)
    );
  }

  const goPrev = () => {
    setPromptIndex((current) =>
      current === 0 ? current = 0 : current - 1
    );
  }

  const resetToLanding = () => {
    setView("landing");
    setPromptIndex(0);
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-linear-to-br from-rose-50 via-amber-50 to-orange-100 relative overflow-hidden">
      <FlowerSides />
      {view === "landing" ? (
        <div className="flex flex-col gap-6 justify-center items-center text-center space-y-6 px-6">
          <motion.h1
            className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Con mucho cariño para Fer
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg text-slate-600 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2}}
          >
            De corazón espero que este pequeño detalle te gusté y recuerdes siempre lo
            especial e increíble que eres.
          </motion.p>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 3 }}
          >
            <CustomButton onClick={() => setView("prompts")}>
              Comenzar
            </CustomButton>
          </motion.div>
        </div>
      ) : (
        <div className="w-full max-w-xl px-6 text-center space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Prompt {promptIndex + 1} de {prompts.length}
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-800">
            {prompts[promptIndex]}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              className="rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-400 hover:text-slate-800"
              type="button"
              onClick={goPrev}
            >
              Anterior
            </button>
            <button
              className="rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-400 hover:text-slate-800"
              type="button"
              onClick={goNext}
            >
              Siguiente
            </button>
            <button
              className="rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
              type="button"
              onClick={resetToLanding}
            >
              Volver
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
