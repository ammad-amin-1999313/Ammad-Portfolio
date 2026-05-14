import React, { useEffect, useState } from "react";
import { FiCheck, FiX } from "react-icons/fi";

const Toast = ({ message, onClose, duration = 2200 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!message) {
      setVisible(false);
      return undefined;
    }
    const enter = requestAnimationFrame(() => setVisible(true));
    const exitTimer = setTimeout(() => setVisible(false), duration - 200);
    const closeTimer = setTimeout(() => onClose && onClose(), duration);
    return () => {
      cancelAnimationFrame(enter);
      clearTimeout(exitTimer);
      clearTimeout(closeTimer);
    };
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed top-5 right-5 z-[60] flex items-center gap-3 min-w-[240px] max-w-sm pl-3 pr-2 py-2.5 rounded-xl border border-white/10 bg-[#1f232b]/90 backdrop-blur-md shadow-[0_12px_30px_-12px_rgba(0,0,0,0.6)] text-white transition-all duration-200 ease-out ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#C778DD]/15 text-[#C778DD] shrink-0">
        <FiCheck className="text-base" />
      </span>
      <span className="text-sm leading-snug flex-1 break-words">{message}</span>
      <button
        type="button"
        aria-label="Dismiss notification"
        onClick={() => onClose && onClose()}
        className="cursor-pointer p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-white/5 transition-colors duration-150"
      >
        <FiX className="text-sm" />
      </button>
    </div>
  );
};

export default Toast;
