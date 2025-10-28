import { motion } from "framer-motion";
import { ExternalLink, Github, FileText, Twitter } from "lucide-react";
import type { JSX } from "react";
import solatesLogo from "../assets/logo-tr.png"; // 🪩 Asegurate de tener tu logo aquí

interface LinkItem {
  title: string;
  url: string;
  type: "demo" | "repo" | "doc" | "social";
  icon: JSX.Element;
}

const links: LinkItem[] = [
  {
    title: "Live Demo – Solates App",
    url: "https://solates.vercel.app/",
    type: "demo",
    icon: <ExternalLink size={18} className="opacity-70" />,
  },
  {
    title: "GitHub – Solates App Repo",
    url: "https://github.com/bioxim/solates-proto",
    type: "repo",
    icon: <Github size={18} className="opacity-70" />,
  },
  {
    title: "Live Demo – Solates Mining Room",
    url: "https://solates-mining.vercel.app/",
    type: "demo",
    icon: <ExternalLink size={18} className="opacity-70" />,
  },
  {
    title: "GitHub – Solates Mining Room Repo",
    url: "https://github.com/bioxim/solates-mining",
    type: "repo",
    icon: <Github size={18} className="opacity-70" />,
  },
  {
    title: "Economic Circuit with $OLA",
    url: "/docs/Solates_Economic_Circuit.pdf",
    type: "doc",
    icon: <FileText size={18} className="opacity-70" />,
  },
  {
    title: "Roadmap & Sustainability Model",
    url: "/docs/Solates_Roadmap_Economic_Sustainability_Model.pdf",
    type: "doc",
    icon: <FileText size={18} className="opacity-70" />,
  },
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
    className="text-lg font-semibold text-center mt-10 mb-3 bg-gradient-to-r from-violet-400 via-fuchsia-500 to-amber-300 bg-clip-text text-transparent animate-pulse"
  >
    {text}
  </motion.h2>
);

export default function SolatesLinks() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white px-8 py-16">
      {/* === Video Pitch === */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl mb-12 rounded-2xl overflow-hidden shadow-lg border border-slate-700"
      >
        <div className="aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/pWQQOrLlQIE" // ⚠️ Reemplazá con el ID de tu video
            title="Solates Pitch Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>

      {/* === Header === */}
      <motion.div
        className="flex items-center gap-3 mb-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <img src={solatesLogo} alt="Solates Logo" className="w-12 h-12 rounded-full shadow-md" />
        <h1 className="text-5xl font-bold tracking-wide">Solates</h1>
      </motion.div>

      <p className="text-base text-slate-400 mb-10 text-center">
        DeFi Education & Incentive Platform built on Solana
      </p>

      <div className="w-full max-w-4xl space-y-4">
        <SectionTitle text="Live Demos & Repositories" />
        {links
          .filter((l) => l.type === "demo" || l.type === "repo")
          .map((link, i) => (
            <LinkCard key={i} {...link} />
          ))}

        <SectionTitle text="Documentation" />
        {links
          .filter((l) => l.type === "doc")
          .map((link, i) => (
            <LinkCard key={i} {...link} />
          ))}

        <SectionTitle text="Socials" />
        {links
          .filter((l) => l.type === "social")
          .map((link, i) => (
            <LinkCard key={i} {...link} />
          ))}
      </div>

      <p className="text-xs text-slate-500 mt-12">
        © {new Date().getFullYear()} Solates. Built with integrity on Solana.
      </p>
    </div>
  );
}

// === Subcomponent ===
function LinkCard(link: LinkItem) {
  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      className="flex items-center justify-between bg-slate-800/60 border border-slate-700 hover:border-violet-500 rounded-2xl py-3 px-6 transition-colors"
    >
      <span className="flex items-center gap-3">
        {link.icon}
        <span className="text-base font-medium">{link.title}</span>
      </span>
      <ExternalLink size={16} className="opacity-40" />
    </motion.a>
  );
}
