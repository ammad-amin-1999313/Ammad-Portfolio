import React, { useMemo, useState, useEffect, useRef } from "react";
import Card from "../components/Common/Cards/Card";
import icon from "../assets/images/project-icon.png";
import { projectsData } from "../utils/projectsData";

const MAX_CHIPS = 7;

// ✅ Custom dropdown (chip-style)
const TechDropdown = ({ tech, setTech, items }) => {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  // close on outside click
  useEffect(() => {
    const onDocClick = (e) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const label = tech === "All" ? "More" : tech;

  return (
    <div ref={wrapRef} className="relative">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`cursor-pointer text-xs px-3 py-1.5 rounded-full border transition-colors duration-200 flex items-center gap-2
          ${
            tech !== "All" && items.includes(tech)
              ? "border-[#C778DD] text-white bg-[#C778DD]/15"
              : "border-white/10 text-gray-300 hover:border-[#C778DD]/60 hover:bg-white/[0.04]"
          }`}
      >
        {label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Menu */}
      {open && (
        <div
          role="listbox"
          className="absolute right-0 z-50 mt-2 min-w-[200px] max-h-72 overflow-y-auto rounded-xl border border-white/10 bg-[#1f232b]/95 backdrop-blur-md shadow-[0_12px_32px_-12px_rgba(0,0,0,0.6)] py-1"
        >
          {items.map((t) => (
            <button
              key={t}
              type="button"
              role="option"
              aria-selected={tech === t}
              onClick={() => {
                setTech(t);
                setOpen(false);
              }}
              className={`cursor-pointer w-full text-left px-4 py-2 text-sm transition-colors duration-150
                ${
                  tech === t
                    ? "bg-[#C778DD]/15 text-white"
                    : "text-gray-300 hover:bg-white/[0.05] hover:text-white"
                }`}
            >
              {t}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Project = ({ width }) => {
  const [query, setQuery] = useState("");
  const [tech, setTech] = useState("All");

  // Build tech list from data
  const allTech = useMemo(() => {
    const set = new Set();
    projectsData.forEach((p) => p.tools.forEach((t) => set.add(t)));
    return ["All", ...Array.from(set)];
  }, []);

  const visibleTech = useMemo(() => allTech.slice(0, MAX_CHIPS), [allTech]);
  const overflowTech = useMemo(() => allTech.slice(MAX_CHIPS), [allTech]);

  // ✅ Filter + Search + Sort-by-id when All selected
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    let list = projectsData.filter((p) => {
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.about.toLowerCase().includes(q) ||
        p.tools.join(" ").toLowerCase().includes(q);

      const matchesTech = tech === "All" || p.tools.includes(tech);
      return matchesQuery && matchesTech;
    });

    // When "All" is selected, enforce ID order 1,2,3...
    if (tech === "All") {
      list = [...list].sort((a, b) => Number(a.id) - Number(b.id));
    }

    return list;
  }, [query, tech]);

  return (
    <div className="relative px-6 md:px-20 xl:px-0">
      <div className="absolute hidden xl:block top-20 right-0 opacity-80">
        <img src={icon} alt="" />
      </div>

      <div className="size font-family pt-12 pb-24">
        {/* Header */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="text-[32px] flex items-center font-medium text-white">
              <span className="text-[#C778DD]">/</span>
              <h1 className="font-[font-family] ml-1">projects</h1>
            </div>
            <p className="text-gray-400 text-sm">
              A curated selection of work across SaaS, e-commerce, and
              design-led builds.
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative w-full lg:max-w-[420px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects, tools, or keywords"
                aria-label="Search projects"
                className="w-full bg-white/[0.02] border border-white/10 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#C778DD]/60 focus:bg-white/[0.04] transition-colors duration-200"
              />
            </div>

            {/* Tech chips + dropdown */}
            <div className="flex gap-2 flex-wrap items-center">
              {visibleTech.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTech(t)}
                  className={`cursor-pointer text-xs px-3 py-1.5 rounded-full border transition-colors duration-200
                    ${
                      tech === t
                        ? "border-[#C778DD] text-white bg-[#C778DD]/15"
                        : "border-white/10 text-gray-300 hover:border-[#C778DD]/60 hover:bg-white/[0.04]"
                    }`}
                >
                  {t}
                </button>
              ))}

              {overflowTech.length > 0 && (
                <TechDropdown tech={tech} setTech={setTech} items={overflowTech} />
              )}
            </div>
          </div>

          {/* Result count */}
          <p className="text-xs text-gray-500 -mt-2">
            {filtered.length} {filtered.length === 1 ? "project" : "projects"}
            {tech !== "All" ? ` in ${tech}` : ""}
            {query ? ` matching "${query}"` : ""}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-2">
          <Card onpage="projects" layout={width} data={filtered} />
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="mt-12 flex flex-col items-center text-center gap-2">
            <p className="text-gray-300 text-sm">No projects found.</p>
            <p className="text-gray-500 text-xs">
              Try a different keyword or clear the filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setTech("All");
              }}
              className="cursor-pointer mt-2 text-xs px-3.5 py-1.5 rounded-md border border-[#C778DD]/50 text-white bg-[#C778DD]/15 hover:bg-[#C778DD]/25 hover:border-[#C778DD] transition-colors duration-200"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
