"use client";

import { motion } from "framer-motion";

interface QuoteCardProps {
  quote: string;
  character: string;
  anime: string;
  lastUpdated?: string;
  onRefresh: () => void;
}

export default function QuoteCard({
  quote,
  character,
  anime,
  lastUpdated,
  onRefresh,
}: QuoteCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative backdrop-blur-lg bg-black/30 border border-purple-500/20 rounded-xl p-8 max-w-2xl w-full mx-auto shadow-2xl hover:shadow-purple-500/10 transition-all"
    >
      <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-purple-500/50" />
      <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-purple-500/50" />

      <div className="flex justify-between items-start mb-6">
        <h2 className="text-purple-300 font-mono text-sm">
          System::AnimeQuote
        </h2>
        {lastUpdated && (
          <span className="text-xs text-purple-400/60 font-mono">
            {lastUpdated}
          </span>
        )}
      </div>

      <p className="text-2xl font-medium mb-6 text-white/90 leading-relaxed">
        {quote}
      </p>

      <div className="space-y-2">
        <p className="text-purple-300 font-bold font-mono">~ {character}</p>
        <p className="text-purple-400/70 text-sm font-mono">{anime}</p>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onRefresh}
        className="mt-8 px-8 py-3 bg-purple-600/20 border border-purple-500/30 text-purple-300 
        rounded-lg hover:bg-purple-600/30 transition-all font-mono text-sm
        flex items-center gap-2 group"
      >
        <span>Generate Quote</span>
        <svg
          className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      </motion.button>
    </motion.div>
  );
}
