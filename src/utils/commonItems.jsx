 export const navItems = [
  {
    name: "home",
    link: "/",
  },
  {
    name: "works",
    link: "/project",
  },
  {
    name: "about-me",
    link: "/about",
  },
  {
    name: "contacts",
    link: "/contact",
  },
];

export const funFact = [
  { fun: "I like winter more than summer" },
  { fun: "I often bike with my friends" },
  { fun: "I like pizza and pasta" },
  { fun: " Exploring  is my favorite activity" },
  { fun: "My favorite movie is The Green Mile" },
  { fun: "I am still in school" },
  { fun: "I have a cat name Tasu" }
];


export const FooterCopyright = () => {
  return (
    <p className="text-white text-center pb-8 text-sm md:text-base font-family">
      © Copyright {new Date().getFullYear()}. Made by Ammad
    </p>
  );
}

export default FooterCopyright;