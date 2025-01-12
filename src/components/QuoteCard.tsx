"use client";

import { motion } from "framer-motion";

interface QuoteCardProps {
  quote: string;
  character: string;
  anime: string;
  lastUpdated?: string;
  setShowLanding: (show: boolean) => void;
}

export default function QuoteCard({
  quote,
  character,
  anime,
  lastUpdated,
  setShowLanding,
}: QuoteCardProps) {
  const handleReturn = () => {
    setShowLanding(true);
  };

  return (
    <div className="relative py-16 px-4">
      {/* Return to Base Button */}
      <motion.div
        onClick={handleReturn}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute top-0 left-4 flex items-center gap-2 text-cyan-400/80 hover:text-cyan-300 transition-colors group/btn cursor-pointer"
      >
        <div className="relative">
          <div className="w-6 h-6 border-2 border-current rounded-full flex items-center justify-center overflow-hidden">
            <div className="w-2 h-2 bg-current rounded-full group-hover/btn:scale-[2] transition-transform duration-500" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-current rounded-full opacity-0 group-hover/btn:opacity-100 group-hover/btn:scale-150 transition-all duration-500" />
        </div>
        <span className="font-mono text-sm tracking-wider relative">
          Return to Base
          <span className="absolute bottom-0 left-0 w-0 h-px bg-current group-hover/btn:w-full transition-all duration-300" />
        </span>
      </motion.div>

      {/* Close Button */}
      <motion.button
        onClick={handleReturn}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute top-0 right-4 flex items-center gap-2 text-cyan-400/80 hover:text-cyan-300 transition-colors group/close cursor-pointer"
      >
        <span className="font-mono text-sm tracking-wider relative mr-2">
          Close Terminal
          <span className="absolute bottom-0 left-0 w-0 h-px bg-current group-hover/close:w-full transition-all duration-300" />
        </span>
        <div className="relative w-6 h-6">
          <div className="absolute inset-0 border-2 border-current rounded-md rotate-0 group-hover/close:rotate-90 transition-transform duration-500 flex items-center justify-center">
            <div className="w-3 h-0.5 bg-current absolute rotate-45" />
            <div className="w-3 h-0.5 bg-current absolute -rotate-45" />
          </div>
          <div className="absolute inset-0 border border-current rounded-md opacity-0 group-hover/close:opacity-100 group-hover/close:scale-150 transition-all duration-500" />
        </div>
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="relative backdrop-blur-lg bg-gradient-to-br from-black/80 via-black/50 to-blue-950/30 border-2 border-blue-500/30 rounded-xl p-8 max-w-2xl w-full mx-auto shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_50px_rgba(59,130,246,0.4)] transition-all group mt-8"
      >
        {/* Cyber glow effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 animate-[pulse_4s_ease-in-out_infinite] pointer-events-none" />

        {/* Digital circuit lines */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden opacity-30 group-hover:opacity-50 transition-all duration-500">
          <div className="absolute top-4 right-4 w-px h-8 bg-cyan-400/50" />
          <div className="absolute top-4 right-4 w-8 h-px bg-cyan-400/50" />
        </div>
        <div className="absolute bottom-0 left-0 w-16 h-16 overflow-hidden opacity-30 group-hover:opacity-50 transition-all duration-500">
          <div className="absolute bottom-4 left-4 w-px h-8 bg-cyan-400/50" />
          <div className="absolute bottom-4 left-4 w-8 h-px bg-cyan-400/50" />
        </div>

        {/* Solo Leveling style corners with animations */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 32, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute -top-3 -left-3 w-8 h-8 border-t-[3px] border-l-[3px] border-blue-400/70 group-hover:border-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.4)] transition-all duration-500"
        />
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 32, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute -bottom-3 -right-3 w-8 h-8 border-b-[3px] border-r-[3px] border-blue-400/70 group-hover:border-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.4)] transition-all duration-500"
        />
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 32, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="absolute -top-3 -right-3 w-8 h-8 border-t-[3px] border-r-[3px] border-blue-400/30 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition-all duration-500"
        />
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 32, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute -bottom-3 -left-3 w-8 h-8 border-b-[3px] border-l-[3px] border-blue-400/30 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition-all duration-500"
        />

        {/* Header with enhanced system style */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-[pulse_1.5s_ease-in-out_infinite] shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-cyan-300 font-mono text-sm tracking-wider uppercase relative group-hover:text-cyan-200"
            >
              System Notice
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-500" />
            </motion.h2>
          </div>
          {lastUpdated && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xs text-cyan-400/60 font-mono group-hover:text-cyan-400/80 relative"
            >
              {lastUpdated}
              <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-cyan-400/0 via-cyan-400/50 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </motion.span>
          )}
        </div>

        {/* Quote with enhanced styling and animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <motion.p className="text-2xl font-medium mb-6 text-white/90 leading-relaxed border-l-4 border-cyan-500/30 pl-4 group-hover:border-cyan-500/50 transition-all duration-500 [text-shadow:0_0_30px_rgba(34,211,238,0.1)]">
            {quote}
          </motion.p>
          <div className="absolute -left-2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 group-hover:via-cyan-400/70 shadow-[0_0_8px_rgba(34,211,238,0.4)]" />
        </motion.div>

        {/* Attribution with enhanced Solo Leveling style */}
        <div className="space-y-2 relative">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-cyan-300 font-bold font-mono tracking-wide group-hover:text-cyan-200 transition-colors duration-500"
          >
            ⟨ {character} ⟩
            <span className="absolute -left-4 top-1/2 w-2 h-2 bg-cyan-400/30 rounded-full -translate-y-1/2 group-hover:bg-cyan-400/50 transition-all duration-300" />
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-cyan-400/70 text-sm font-mono tracking-wider group-hover:text-cyan-300/70 transition-colors duration-500"
          >
            《 {anime} 》
            <span className="absolute -left-3 top-1/2 w-1.5 h-1.5 bg-cyan-400/20 rounded-full -translate-y-1/2 group-hover:bg-cyan-400/40 transition-all duration-300" />
          </motion.p>
        </div>

        {/* Enhanced decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 group-hover:via-cyan-400/70 transition-all duration-500 shadow-[0_0_10px_rgba(34,211,238,0.4)]" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 group-hover:via-cyan-400/70 transition-all duration-500 shadow-[0_0_10px_rgba(34,211,238,0.4)]" />

        {/* Cyber corner glows */}
        <div className="absolute -top-3 -left-3 w-6 h-6 bg-cyan-500/10 blur-lg group-hover:bg-cyan-400/30 transition-all duration-500" />
        <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-cyan-500/10 blur-lg group-hover:bg-cyan-400/30 transition-all duration-500" />
      </motion.div>
    </div>
  );
}
