import { motion } from "framer-motion";
import { ExternalLink, Github, FileText, Twitter, Linkedin, Globe } from "lucide-react";
import type { JSX } from "react";

interface LinkItem {
  title: string;
  url: string;
  type: "demo" | "repo" | "doc" | "social";
  icon: JSX.Element;
}

const links: LinkItem[] = [
  // === Live Demos & Repos ===
  {
    title: "Live Demo – Solates App",
    url: "https://solates.vercel.app/",
    type: "demo",
    icon: <ExternalLink size={18} className="opacity-70" />,
  },
  {
    title: "GitHub – Solates App Repo",
    url: "https://github.com/ximenacamino/solates-app",
    type: "repo",
    icon: <Github size={18} className="opacity-70" />,
  },
  {
    title: "Live Demo – Solates Docs",
    url: "https://solates-docs.vercel.app/",
    type: "demo",
    icon: <ExternalLink size={18} className="opacity-70" />,
  },
  {
    title: "GitHub – Solates Docs Repo",
    url: "https://github.com/ximenacamino/solates-docs",
    type: "repo",
    icon: <Github size={18} className="opacity-70" />,
  },

  // === Documentation ===
  {
    title: "Whitepaper – Economic Model",
    url: "https://solates-docs.vercel.app/whitepaper",
    type: "doc",
    icon: <FileText size={18} className="opacity-70" />,
  },
  {
    title: "Technical Overview – Architecture",
    url: "https://solates-docs.vercel.app/architecture",
    type: "doc",
    icon: <FileText size={18} className="opacity-70" />,
  },

  // === Socials ===
  {
    title: "Official Website",
    url: "https://solates.vercel.app/",
    type: "social",
    icon: <Globe size={18} className="opacity-70" />,
  },
  {
    title: "Twitter / X",
    url: "https://x.com/SolatesFi",
    type: "social",
    icon: <Twitter size={18} className="opacity-70" />,
  },
  {
    title: "LinkedIn",
    url: "https://linkedin.com/company/solatesfi",
    type: "social",
    icon: <Linkedin size={18} className="opacity-70" />,
  },
];

export default function SolatesLinks() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white px-4 py-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-2 tracking-wide text-center"
      >
        Solates
      </motion.h1>

      <p className="text-sm text-slate-400 mb-8 text-center">
        DeFi Education & Incentive Platform built on Solana
      </p>

      <div className="w-full max-w-md space-y-3">
        {links.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="flex items-center justify-between bg-slate-800/60 border border-slate-700 hover:border-slate-500 rounded-2xl py-3 px-5 transition-colors"
          >
            <span className="flex items-center gap-3">
              {link.icon}
              <span className="text-base font-medium">{link.title}</span>
            </span>
            <ExternalLink size={16} className="opacity-40" />
          </motion.a>
        ))}
      </div>

      <p className="text-xs text-slate-500 mt-10">
        © {new Date().getFullYear()} Solates. Built with integrity on Solana.
      </p>
    </div>
  );
}
