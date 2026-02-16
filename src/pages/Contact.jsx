import React, { useMemo, useState } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail, MdContentCopy } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import icons from "../assets/images/project-icon.png";

const Contact = () => {
  const [toast, setToast] = useState(null);
  const [sending, setSending] = useState(false);

  // ✅ Paste your Formspree endpoint here (it emails you without backend)
  const FORMSPREE_URL = "https://formspree.io/f/xdalzazg";

  const CONTACT = useMemo(
    () => ({
      email: "sardarammad6@gmail.com",
      linkedInLabel: "Ammad Amin",
      twitterLabel: "_AmmadAmin",
      githubLabel: "ammad amin",
      timezone: "PKT (UTC+5)",
      responseTime: "Usually within 24 hours",
      availability: "Open for freelance • Remote / Part-time",
    }),
    []
  );

  const copyToClipboard = async (text, label = "Copied") => {
    try {
      await navigator.clipboard.writeText(text);
      setToast(`${label}: ${text}`);
      setTimeout(() => setToast(null), 1500);
    } catch (err) {
      console.error("Failed to copy: ", err);
      alert("Copy failed. Please copy manually.");
    }
  };

  // ✅ Real send handler (Formspree)
 const handleSubmit = async (e) => {
  e.preventDefault();
  if (sending) return;

  setSending(true);
  setToast(null);

  const form = e.currentTarget;
  const formData = new FormData(form);

  // Grab values for fallback mailto
  const name = formData.get("name")?.toString() || "";
  const email = formData.get("email")?.toString() || "";
  const subject = formData.get("subject")?.toString() || "";
  const message = formData.get("message")?.toString() || "";

  try {
    const res = await fetch(FORMSPREE_URL, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    });

    if (!res.ok) throw new Error("Formspree rejected");

    form.reset();
    setToast("Message sent ✅");
  } catch (err) {
    console.error(err);

    // ✅ User-friendly message (no “error” vibe)
    setToast("Thanks! Your message is ready — if you don’t hear back, email me directly ✅");

    // ✅ Fallback: open email client with prefilled message
    const mailtoSubject = encodeURIComponent(subject || "Project inquiry");
    const mailtoBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.open(
      `mailto:${CONTACT.email}?subject=${mailtoSubject}&body=${mailtoBody}`,
      "_blank"
    );

    // Optional: also copy your email so they can paste anywhere
    // await navigator.clipboard.writeText(CONTACT.email);
  } finally {
    setSending(false);
    setTimeout(() => setToast(null), 2200);
  }
};


  const Chip = ({ children }) => (
    <span className="text-xs text-gray-300 border border-white/15 px-3 py-1 rounded-full">
      {children}
    </span>
  );

  const Card = ({ title, children }) => (
    <div className="border border-white/15 rounded-xl p-4 md:p-5 transition-all duration-300 hover:border-[#C778DD]/60 hover:bg-white/5">
      <h4 className="text-white font-family font-medium">{title}</h4>
      <div className="mt-3">{children}</div>
    </div>
  );

  const LinkButton = ({ icon, label, onClick }) => (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between gap-3 border border-white/15 rounded-lg px-4 py-3 text-left text-gray-300 hover:text-white hover:border-[#C778DD]/70 hover:bg-white/5 transition"
      type="button"
    >
      <span className="flex items-center gap-2">
        <span className="text-gray-400">{icon}</span>
        <span className="font-family">{label}</span>
      </span>
      <MdContentCopy className="opacity-70" />
    </button>
  );

  return (
    <div className="relative">
      {/* right decorative icon */}
      <div className="absolute hidden xl:block top-40 right-0 opacity-80">
        <img src={icons} alt="" />
      </div>

      {/* toast */}
      {toast && (
        <div className="fixed top-5 right-5 z-[60] bg-black/70 border border-white/15 text-white px-4 py-2 rounded-lg backdrop-blur">
          <span className="text-sm">{toast}</span>
        </div>
      )}

      <div className="size">
        {/* Header */}
        <div className="pt-10 px-6 md:px-20 xl:px-0">
          <div className="text-[32px] flex font-medium text-white">
            <span className="text-[#C778DD]">/</span>{" "}
            <h1 className="font-family">contact-me</h1>
          </div>

          <p className="text-gray-300 pt-2 font-family max-w-2xl">
            Want to build something clean, fast, and modern? Send a message — I’m open
            to freelance work and collaborations.
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            <Chip>{CONTACT.availability}</Chip>
            <Chip>{CONTACT.timezone}</Chip>
            <Chip>{CONTACT.responseTime}</Chip>
          </div>
        </div>

        {/* Main Grid */}
        <div className="px-6 md:px-20 xl:px-0 py-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left column */}
          <div className="lg:col-span-7 space-y-6">
            <Card title="What I can help you with">
              <div className="flex flex-wrap gap-2">
                <Chip>React / Next.js</Chip>
                <Chip>Landing Pages</Chip>
                <Chip>Dashboards</Chip>
                <Chip>API Integration</Chip>
                <Chip>UI Polish</Chip>
                <Chip>Performance</Chip>
              </div>

              <p className="text-gray-300 font-family mt-4 leading-relaxed">
                I focus on building responsive, modern interfaces with clean structure.
                If you already have a design, I can implement it. If you don’t, I can
                help shape the UI so it looks professional.
              </p>
            </Card>

            <Card title="Quick FAQ">
              <div className="space-y-4 text-gray-300 font-family">
                <div>
                  <p className="text-white">How do we start?</p>
                  <p className="text-sm mt-1">
                    Send your idea, goals, and any reference links. I’ll reply with a clear plan.
                  </p>
                </div>
                <div>
                  <p className="text-white">What do you need from me?</p>
                  <p className="text-sm mt-1">
                    Scope + deadline + any design (Figma/screenshots). If no design, tell me your style.
                  </p>
                </div>
                <div>
                  <p className="text-white">Do you do maintenance?</p>
                  <p className="text-sm mt-1">
                    Yes — bug fixes, enhancements, refactors, and UI upgrades.
                  </p>
                </div>
              </div>
            </Card>

            {/* ✅ Form (real email send via Formspree) */}
            <Card title="Send a message">
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
                  className="bg-transparent border border-white/15 rounded-lg px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#C778DD]/70 md:col-span-2 min-h-[120px]"
                  placeholder="Tell me about your project..."
                  required
                />

                {/* Honeypot anti-spam */}
                <input name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                {/* Optional: nice inbox subject */}
                <input type="hidden" name="_subject" value="New message from portfolio" />

                <div className="md:col-span-2 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mt-2">
                  <p className="text-xs text-gray-400 font-family">
                    Tip: add links (Figma, GitHub, screenshots) for a faster response.
                  </p>
                  <button
                    type="submit"
                    disabled={sending}
                    className="bg-[#C778DD] text-black font-medium rounded-lg px-5 py-2 hover:opacity-90 transition font-family disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </Card>
          </div>

          {/* Right column */}
          <div className="lg:col-span-5 space-y-6">
            <Card title="Message me here">
              <div className="space-y-3">
                <LinkButton
                  icon={<MdEmail />}
                  label={CONTACT.email}
                  onClick={() => copyToClipboard(CONTACT.email, "Email copied")}
                />
                <LinkButton
                  icon={<FaLinkedin />}
                  label={CONTACT.linkedInLabel}
                  onClick={() => copyToClipboard(CONTACT.linkedInLabel, "LinkedIn name copied")}
                />
              </div>

              <div className="mt-4 text-sm text-gray-400 font-family space-y-1">
                <p>📍 Timezone: {CONTACT.timezone}</p>
                <p>⏱ {CONTACT.responseTime}</p>
              </div>
            </Card>

            <Card title="All media">
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => copyToClipboard(CONTACT.twitterLabel, "Twitter handle copied")}
                  className="w-full flex items-center justify-between gap-3 border border-white/15 rounded-lg px-4 py-3 text-gray-300 hover:text-white hover:border-[#C778DD]/70 hover:bg-white/5 transition"
                >
                  <span className="flex items-center gap-2">
                    <BsTwitter className="text-gray-400" />
                    <span className="font-family">{CONTACT.twitterLabel}</span>
                  </span>
                  <MdContentCopy className="opacity-70" />
                </button>

                <button
                  type="button"
                  onClick={() => copyToClipboard(CONTACT.githubLabel, "GitHub copied")}
                  className="w-full flex items-center justify-between gap-3 border border-white/15 rounded-lg px-4 py-3 text-gray-300 hover:text-white hover:border-[#C778DD]/70 hover:bg-white/5 transition"
                >
                  <span className="flex items-center gap-2">
                    <FaGithub className="text-gray-400" />
                    <span className="font-family">{CONTACT.githubLabel}</span>
                  </span>
                  <MdContentCopy className="opacity-70" />
                </button>
              </div>
            </Card>

            <Card title="What you’ll get">
              <ul className="text-gray-300 font-family text-sm space-y-2">
                <li>• Clean UI + responsive layout</li>
                <li>• Organized code structure</li>
                <li>• Fast performance + best practices</li>
                <li>• Clear progress updates</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pb-10 px-6 md:px-20 xl:px-0">
          <div className="text-[32px] flex font-medium text-white">
            <span className="font-family text-[#C778DD]">#</span>{" "}
            <h2 className="font-family">let’s-build</h2>
          </div>
          <p className="text-gray-300 font-family pt-2 max-w-2xl">
            If you have a project idea, send a short message with your goal and deadline —
            I’ll reply with next steps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
