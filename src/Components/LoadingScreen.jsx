import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const logs = [
    'Initializing portfolio modules...',
    'Loading custom brutalist components...',
    'Compiling responsive layouts...',
    'Configuring active section tracking...',
    'Injecting interactive custom cursor...',
    'Optimizing neon design aesthetics...',
    'System ready. Launching portfolio.',
  ];

  useEffect(() => {
    // Fast loading progress logic
    const duration = 1800; // 1.8 seconds total loader display
    const intervalTime = 30;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  // Sync log message index with loading progress
  useEffect(() => {
    const logStep = 100 / logs.length;
    const currentLogIdx = Math.min(
      Math.floor(progress / logStep),
      logs.length - 1
    );
    setLogIndex(currentLogIdx);

    if (progress === 100) {
      const exitTimer = setTimeout(() => {
        setIsFadingOut(true);
        const completeTimer = setTimeout(() => {
          if (onComplete) onComplete();
        }, 500); // matches transition duration
        return () => clearTimeout(completeTimer);
      }, 400); // hold at 100% briefly for visual feedback
      return () => clearTimeout(exitTimer);
    }
  }, [progress, onComplete]);

  // Determine progress bar blocks (retro console layout: 12 blocks total)
  const totalBlocks = 12;
  const activeBlocks = Math.floor((progress / 100) * totalBlocks);

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-[#DBE2E9] transition-all duration-500 ease-in-out ${
        isFadingOut ? 'translate-y-[-100%] opacity-0' : 'translate-y-0 opacity-100'
      }`}
    >
      {/* Brutalist diagonal background pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(45deg,#000,#000_15px,transparent_15px,transparent_30px)] pointer-events-none" />

      {/* Main retro window card */}
      <div className="w-[90%] max-w-md bg-white border-4 border-black text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-none overflow-hidden transition-colors duration-300">
        
        {/* Retro Header Bar */}
        <div className="bg-black text-white px-3 py-2 flex items-center justify-between border-b-4 border-black">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 bg-cv-pink border border-white rounded-none"></span>
            <span className="w-3 h-3 bg-cv-yellow border border-white rounded-none"></span>
            <span className="w-3 h-3 bg-cv-cyan border border-white rounded-none"></span>
          </div>
          <span className="font-mono font-black text-xs uppercase tracking-widest text-[#FFDE4D]">
            SYSTEM_LOADER.EXE
          </span>
          <Terminal className="w-4 h-4 text-[#A3E635]" />
        </div>

        {/* Loader Body */}
        <div className="p-6 flex flex-col items-center text-center space-y-6">
          {/* Brand Logo inside Loader */}
          <div className="space-y-1">
            <h1 className="text-3xl font-black font-display tracking-tight uppercase select-none">
              HAR<span>ı</span>HARAN
            </h1>
            <p className="text-[10px] font-mono font-bold tracking-widest uppercase text-zinc-500">
              PORTFOLIO INITIALIZATION
            </p>
          </div>

          {/* Retro Progress Bar Container */}
          <div className="w-full max-w-xs space-y-2">
            {/* The actual progress bar */}
            <div className="w-full h-8 border-3 border-black bg-zinc-100 flex items-center justify-between px-2 font-mono font-black text-sm relative shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              {/* Retro Block progress markers */}
              <div className="flex gap-1 flex-1 pr-4">
                {Array.from({ length: totalBlocks }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-4 w-3 border border-black/20 ${
                      i < activeBlocks
                        ? 'bg-cv-yellow'
                        : 'bg-transparent'
                    }`}
                  />
                ))}
              </div>
              <span className="text-black shrink-0 select-none">
                {Math.round(progress)}%
              </span>
            </div>
          </div>

          {/* Dynamic Status Log Terminal */}
          <div className="w-full bg-zinc-100 text-zinc-900 font-mono text-[11px] p-4 text-left border-3 border-black h-28 flex flex-col justify-between shadow-[inset_1px_1px_3px_rgba(0,0,0,0.15)] overflow-hidden">
            <div className="space-y-1 select-none overflow-hidden">
              {/* Prev log, current log */}
              {logIndex > 0 && (
                <div className="opacity-50 line-clamp-1">
                  &gt; {logs[logIndex - 1]}... OK
                </div>
              )}
              <div className="font-bold animate-pulse line-clamp-2">
                &gt; {logs[logIndex]}
                {progress < 100 ? '...' : ' [DONE]'}
              </div>
            </div>
            
            <div className="border-t border-zinc-300 pt-1.5 flex items-center justify-between text-[9px] text-zinc-500 uppercase font-black">
              <span>Status: Loading</span>
              <span>v1.0.0</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default LoadingScreen;
