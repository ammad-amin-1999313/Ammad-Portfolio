import React from "react";
import logo from "../../assets/images/portfolio-logo.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const SocialLink = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className="w-9 h-9 inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-gray-300 hover:text-white hover:border-[#C778DD]/60 hover:bg-white/[0.04] transition-colors duration-200"
  >
    {children}
  </a>
);

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 mt-12">
      <div className="size px-6 md:px-20 xl:px-0 py-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-6">
          {/* Brand + tagline */}
          <div className="flex items-center gap-3 min-w-0">
            <img src={logo} alt="" className="w-7 h-7 shrink-0" />
            <span className="text-white font-family uppercase tracking-wide text-sm">
              Ammad
            </span>
            <span className="text-gray-600 hidden sm:inline">·</span>
            <span className="text-gray-400 text-sm font-family hidden sm:inline truncate">
              Web designer & developer
            </span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-2">
            <SocialLink
              href="https://www.linkedin.com/in/ammad-amin-637378202/"
              label="LinkedIn"
            >
              <FaLinkedin className="text-base" />
            </SocialLink>
            <SocialLink
              href="https://github.com/ammad-amin-1999313"
              label="GitHub"
            >
              <FaGithub className="text-base" />
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/ammad_khan99/?igshid=MzMyNGUyNmU2YQ%3D%3D"
              label="Instagram"
            >
              <FaInstagramSquare className="text-base" />
            </SocialLink>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-xs font-family">
            © {year} Ammad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
