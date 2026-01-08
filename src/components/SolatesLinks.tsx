import { motion } from "framer-motion";
import { ExternalLink, Github, Twitter } from "lucide-react";
import type { JSX } from "react";
import solatesLogo from "../assets/logo-tr.png";

interface LinkItem {
  title: string;
  url: string;
  type: "demo" | "repo" | "social" | "prog";
  icon: JSX.Element;
}

const links: LinkItem[] = [
  // === LIVE LINKS ===
  {
    title: "Solates Main",
    url: "https://solates.vercel.app/",
    type: "demo",
    icon: <ExternalLink size={18} className="opacity-70" />,
  },
  {
    title: "Solates News Platform",
    url: "https://solates-news.vercel.app/",
    type: "demo",
    icon: <ExternalLink size={18} className="opacity-70" />,
  },
  /*{
    title: "GitHub – Main Repo",
    url: "https://github.com/bioxim/solates-proto",
    type: "repo",
    icon: <Github size={18} className="opacity-70" />,
  },
   {
    title: "Live Demo – Solates Platform",
    url: "https://solates-mining.vercel.app/",
    type: "demo",
    icon: <ExternalLink size={18} className="opacity-70" />,
  }, 
  {
    title: "GitHub – Platform Repo",
    url: "https://github.com/bioxim/solates-mining",
    type: "repo",
    icon: <Github size={18} className="opacity-70" />,
  },*/

  // === PROGRAMS ===
  /*{
    title: "Solates Programs",
    url: "https://github.com/bioxim/solates-contracts/",
    type: "prog",
    icon: <Github size={18} className="opacity-70" />,
  },*/

  // === TODO: Documentation removed for now ===
  // {
  //   title: "Economic Circuit with $OLA",
  //   url: "/docs/Solates_Economic_Circuit.pdf",
  //   type: "doc",
  //   icon: <FileText size={18} className="opacity-70" />,
  // },

  // === SOCIALS ===
  {
    title: "Twitter / X",
    url: "https://x.com/SolatesDefi",
    type: "social",
    icon: <Twitter size={18} className="opacity-70" />,
  },
  {
    title: "YouTube Channel",
    url: "https://www.youtube.com/@SolatesDefi",
    type: "social",
    icon: <ExternalLink size={18} className="opacity-70" />,
  },
  {
    title: "Github Profile",
    url: "https://github.com/bioxim/",
    type: "social",
    icon: <Github size={18} className="opacity-70" />,
  },
];

const SectionTitle = ({ text }: { text: string }) => (
  <motion.h2
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="text-lg font-semibold text-center mt-10 mb-3 
               bg-gradient-to-r from-violet-400 via-fuchsia-500 to-purple-300 
               bg-clip-text text-transparent"
  >
    {text}
  </motion.h2>
);

export default function SolatesLinks() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start 
                    bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 
                    text-white px-8 py-16">

      {/* === Header === */}
      <motion.div
        className="flex flex-col items-center mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <img
            src={solatesLogo}
            alt="Solates Logo"
            className="w-12 h-12 rounded-full shadow-md"
          />
          <h1 className="text-4xl font-bold tracking-wide">Solates</h1>
        </div>

        <p className="text-base text-slate-400 text-center">
          Learn. Earn. Level Up. Powered by Solana.
        </p>
      </motion.div>

      {/* === Status line === */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-sm text-violet-300/80 italic text-center mb-10"
      >
        🚀 Development Phase 2 — follow updates on{" "}
        <a
          href="https://x.com/SolatesDefi"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-dotted hover:text-violet-200 transition"
        >
          X
        </a>
      </motion.p>

      <div className="w-full max-w-4xl space-y-4">

        {/* === LIVE DEMOS & REPOS === */}
        <SectionTitle text="Main Links" />
        {links
          .filter((l) => l.type === "demo" || l.type === "repo")
          .map((link, i) => <LinkCard key={i} {...link} />)}

        {/* === PROGRAMS === */}
        {/* <SectionTitle text="Programs" />
        {links
          .filter((l) => l.type === "prog")
          .map((link, i) => <LinkCard key={i} {...link} />)} */}

        {/* === SOCIALS === */}
        <SectionTitle text="Socials" />
        {links
          .filter((l) => l.type === "social")
          .map((link, i) => <LinkCard key={i} {...link} />)}
      </div>

      <p className="text-xs text-slate-600 mt-12">
        © {new Date().getFullYear()} Solates. Built on Solana.
      </p>
    </div>
  );
}

// === Link Card ===
function LinkCard(link: LinkItem) {
  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      className="flex items-center justify-between 
                 bg-slate-800/40 border border-slate-700 
                 hover:border-violet-500 rounded-2xl py-3 px-6 
                 transition-colors"
    >
      <span className="flex items-center gap-3">
        {link.icon}
        <span className="text-base font-medium">{link.title}</span>
      </span>
      <ExternalLink size={16} className="opacity-40" />
    </motion.a>
  );
}
