"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import QuoteCard from "@/components/QuoteCard";
import { motion, AnimatePresence } from "framer-motion";

interface AnimeQuote {
  quote: string;
  character: string;
  anime: string;
}

export default function Home() {
  const [quote, setQuote] = useState<AnimeQuote | null>(null);
  const [loading, setLoading] = useState(false);
  const [showLanding, setShowLanding] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<string>("");

  const fetchQuote = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/bot");
      if (response.data.success && response.data.data) {
        setQuote(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote(null);
    } finally {
      setLoading(false);
    }
  };

  // Poll for new quotes every 30 seconds
  useEffect(() => {
    if (!showLanding) {
      const interval = setInterval(async () => {
        const response = await axios.get("/api/bot");
        if (response.data.lastUpdate !== lastUpdate) {
          setQuote(response.data.data);
          setLastUpdate(response.data.lastUpdate);
        }
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [showLanding, lastUpdate]);

  const startApp = async () => {
    setShowLanding(false);
    await fetchQuote();
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4 cyberpunk-grid">
      <div className="fixed inset-0 bg-purple-900/5 pointer-events-none" />
      <AnimatePresence>
        {showLanding ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center"
          >
            <motion.h1
              className="text-5xl font-bold text-purple-300 mb-6 font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              AnimeQuote.AI
            </motion.h1>
            <motion.p
              className="text-purple-400/70 mb-12 max-w-md font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Experience the wisdom of anime through our advanced quote
              generation system.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <button
                onClick={startApp}
                className="px-8 py-3 bg-purple-600/20 border border-purple-500/30 text-purple-300 
                rounded-lg hover:bg-purple-600/30 transition-all font-mono text-sm
                flex items-center gap-2 mx-auto group"
              >
                <span>Initialize System</span>
                <svg
                  className="w-4 h-4 group-hover:rotate-90 transition-transform duration-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full"
          >
            {loading ? (
              <div className="text-purple-300 font-mono text-xl flex items-center justify-center gap-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-cyber-pulse" />
                Loading Quote
              </div>
            ) : quote ? (
              <QuoteCard
                quote={quote.quote}
                character={quote.character}
                anime={quote.anime}
                onRefresh={fetchQuote}
              />
            ) : (
              <div className="text-red-400 font-mono text-center">
                System Error: Quote Not Found
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
