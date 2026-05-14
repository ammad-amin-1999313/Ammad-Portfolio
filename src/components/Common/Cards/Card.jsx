import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projectsData } from "../../../utils/projectsData";

const Card = ({ onpage, layout = "large", data, clamp = false }) => {
  const displayedProjects = data
    ? data
    : onpage === "home"
    ? projectsData.slice(0, 3)
    : projectsData;

  const isProjectsPage = onpage === "projects";

  // Projects page always shows 3 per row on large screens for a cleaner grid.
  // Home keeps its layout-driven sizing.
  const widthClass = isProjectsPage
    ? "lg:w-[calc((100%-3rem)/3)]"
    : layout === "small"
    ? "lg:w-[32%]"
    : "lg:w-[48%]";

  const clampDesc = isProjectsPage
    ? "line-clamp-2"
    : onpage === "home"
    ? "line-clamp-2"
    : clamp
    ? "line-clamp-3"
    : "";

  return (
    <div className="flex flex-col md:flex-row md:flex-wrap pt-8 gap-6 justify-start text-white">
      {displayedProjects.map((project) => (
        <article
          key={project.id}
          className={`group flex flex-col w-full md:w-[calc(50%-12px)] ${widthClass} rounded-xl overflow-hidden border border-white/10 bg-white/[0.02] transition-all duration-300 ease-out hover:border-[#C778DD]/60 hover:bg-white/[0.04] hover:-translate-y-1 hover:shadow-[0_12px_30px_-12px_rgba(199,120,221,0.35)]`}
        >
          {/* Image */}
          <div className="relative w-full aspect-[16/10] overflow-hidden bg-black/30">
            <img
              src={project.image}
              alt={project.name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Tools (chips) */}
          <div className="flex flex-wrap gap-1.5 px-4 pt-4">
            {project.tools.map((t) => (
              <span
                key={t}
                className="text-[11px] tracking-wide text-gray-300 border border-white/10 bg-white/[0.03] rounded-full px-2.5 py-0.5"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Content */}
          <div className="flex flex-col flex-grow px-4 pt-3">
            <h3 className="text-[17px] font-medium text-white leading-snug pb-2">
              {project.name}
            </h3>

            <p className={`text-gray-400 text-sm leading-relaxed ${clampDesc}`}>
              {project.about}
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 px-4 pb-4 pt-4 mt-auto">
            <button
              type="button"
              aria-label={`Open live site for ${project.name}`}
              onClick={() => project.link && window.open(project.link, "_blank")}
              className="cursor-pointer inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-md text-white bg-[#C778DD]/15 border border-[#C778DD]/50 hover:bg-[#C778DD]/25 hover:border-[#C778DD] focus:outline-none focus:ring-2 focus:ring-[#C778DD]/40 transition-colors duration-200"
            >
              Live
              <FiExternalLink className="text-sm" />
            </button>

            <button
              type="button"
              aria-label={
                project.code
                  ? `Open GitHub repository for ${project.name}`
                  : `GitHub repository not available for ${project.name}`
              }
              onClick={() => project.code && window.open(project.code, "_blank")}
              disabled={!project.code}
              className={`inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-md border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/20 ${
                project.code
                  ? "cursor-pointer text-gray-200 border-white/15 hover:border-white/40 hover:bg-white/[0.04]"
                  : "cursor-not-allowed text-gray-500 border-white/10"
              }`}
            >
              <FiGithub className="text-sm" />
              GitHub
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Card;
