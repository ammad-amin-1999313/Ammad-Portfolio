import React, { useEffect, useState } from "react";

// Delay rendering so the loader doesn't flash on instant/cached navigations.
// If Suspense resolves before `delay` ms, the loader never paints.
const Loader = ({ delay = 150 }) => {
  const [show, setShow] = useState(delay === 0);

  useEffect(() => {
    if (delay === 0) return undefined;
    const t = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-white/30 border-t-[#C778DD] rounded-full animate-spin" />
        <p className="text-[#C778DD] text-sm tracking-widest uppercase">Loading</p>
      </div>
    </div>
  );
};

export default Loader;
