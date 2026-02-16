import React, { useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/XXXXX"; 

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setToast(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!res.ok) throw new Error("Failed");

      form.reset();
      setToast("Message sent ✅");
    } catch (err) {
      setToast("Failed to send ❌ Try again");
    } finally {
      setLoading(false);
      setTimeout(() => setToast(null), 1800);
    }
  }

  return (
    <div>
      {toast && (
        <div className="mb-4 text-sm text-white border border-white/15 bg-black/40 px-3 py-2 rounded-lg">
          {toast}
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="name"
          className="bg-transparent border border-white/15 rounded-lg px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#C778DD]/70"
          type="text"
          placeholder="Name"
          required
        />
        <input
          name="email"
          className="bg-transparent border border-white/15 rounded-lg px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#C778DD]/70"
          type="email"
          placeholder="Email"
          required
        />
        <input
          name="subject"
          className="bg-transparent border border-white/15 rounded-lg px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#C778DD]/70 md:col-span-2"
          type="text"
          placeholder="Subject"
          required
        />
        <textarea
          name="message"
          className="bg-transparent border border-white/15 rounded-lg px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#C778DD]/70 md:col-span-2 min-h-[130px]"
          placeholder="Message..."
          required
        />

        {/* Honeypot (simple spam protection) */}
        <input
          name="_gotcha"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <button
          disabled={loading}
          type="submit"
          className="md:col-span-2 bg-[#C778DD] text-black font-medium rounded-lg px-5 py-2 hover:opacity-90 transition disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
