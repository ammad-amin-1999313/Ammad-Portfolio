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
        className={`text-xs px-4 py-1 rounded-full border transition flex items-center gap-2
          ${
            tech !== "All" && items.includes(tech)
              ? "border-[#C778DD] text-white bg-white/5"
              : "border-white/15 text-gray-300 hover:border-[#C778DD]/60 hover:bg-white/5"
          }`}
      >
        {label}
        <span className={`transition ${open ? "rotate-180" : ""}`}>▾</span>
      </button>

      {/* Menu */}
      {open && (
        <div className="absolute right-0 z-50 mt-2 min-w-[190px] rounded-xl border border-white/15 bg-[#1f232b] shadow-xl overflow-hidden">
          {items.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => {
                setTech(t);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm transition
                ${
                  tech === t
                    ? "bg-[#C778DD]/20 text-white"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
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
      <div className="absolute hidden xl:block top-20 right-0">
        <img src={icon} alt="" />
      </div>

      <div className="size font-family pt-10 pb-24">
        {/* Header */}
        <div className="flex flex-col gap-6">
          <div>
            <div className="text-[32px] flex font-medium text-white">
              <span className="text-[#C778DD]">/</span>{" "}
              <h1 className="font-[font-family]">projects</h1>
            </div>
            <p className="text-gray-300">List of my projects</p>
          </div>

          {/* Controls */}
          <div className="flex flex-col lg:flex-row gap-3 lg:items-center lg:justify-between">
            {/* Search */}
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects (name, tools, description)..."
              className="bg-transparent border border-white/15 rounded-lg px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#C778DD]/70 w-full lg:max-w-[420px]"
            />

            {/* Tech chips + improved dropdown */}
            <div className="flex gap-2 flex-wrap items-center">
              {visibleTech.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTech(t)}
                  className={`text-xs px-3 py-1 rounded-full border transition
                    ${
                      tech === t
                        ? "border-[#C778DD] text-white bg-white/5"
                        : "border-white/15 text-gray-300 hover:border-[#C778DD]/60 hover:bg-white/5"
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
        </div>

        {/* Cards */}
        <div className="mt-2">
          {/* Card accepts data if your Card component supports it.
              If not yet, either add `data` support to Card OR just map here. */}
          <Card onpage="projects" layout={width} data={filtered} />
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <p className="text-gray-400 mt-6">
            No projects found. Try a different keyword or filter.
          </p>
        )}
      </div>
    </div>
  );
};

export default Project;
