import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import cuteMessages from "../contents/messages.json";

const START_DATE = new Date("2026-01-18T00:00:00");

const RecordarPage = () => {
  const navigate = useNavigate();
  const [elapsed, setElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [cuteMessage] = useState(() => {
    const randomIndex = Math.floor(Math.random() * cuteMessages.messages.length);
    return cuteMessages.messages[randomIndex];
  });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const diff = Math.max(0, now.getTime() - START_DATE.getTime());

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setElapsed({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-30 w-full max-w-lg text-center flex flex-col gap-6 px-6 mx-3 md:mx-0">
      <motion.p
        className="text-2xl text-slate-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        {cuteMessage}
      </motion.p>

      {/* TIMER */}
      <motion.div
        className="rounded-2xl border border-slate-300 px-6 py-4 text-slate-700 text-lg font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        {elapsed.days} días · {elapsed.hours}h {elapsed.minutes}m {elapsed.seconds}s
      </motion.div>

      <motion.div
        className="flex flex-col gap-4 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.8 }}
      >
        <button
          className="rounded-2xl bg-slate-500 px-6 py-3 text-2xl font-medium text-white transition hover:bg-slate-800"
          type="button"
          onClick={() => navigate("/")}
        >
          Volver
        </button>
      </motion.div>
    </div>
  );
};

export default RecordarPage;
