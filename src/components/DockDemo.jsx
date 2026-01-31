import { HomeIcon, Github, Linkedin, Mail, X } from "lucide-react";



export default function DockDemo() {
 
  
  const DATA = {
    navbar: [
      { name : "Accueil", href: "", icon: HomeIcon, label: "Home" },
    ],
    social: [
      { name: "GitHub", url: "https://github.com/bafodev", icon: Github },
      { name: "LinkedIn", url: "https://linkedin.com/in/bafode-toure", icon: Linkedin },
          {
      name: "Email",
      url: "mailto:bafode.toure.pro59@gmail.com",
      icon: Mail,
    },
    ],
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-7 rounded-full bg-slate-900/60 px-8 py-4 shadow-lg backdrop-blur-xs border border-white/5">

        {DATA.navbar.map((item) => (
          <a
            key={item.label}
            href={item.href}
            aria-label={item.label}
            className="flex h-10 w-10 flex-col items-center justify-center rounded-full text-slate-100 hover:bg-slate-700/80 transition"
          >
            <item.icon className="h-6 w-6" />
          <span className="text-xs mt-1">{item.name}</span>
          </a>
        ))}


        <span className="h-6 w-px bg-white/20" />


        {DATA.social.map((item) => (
          <a
            key={item.name}
            href={item.url}
            aria-label={item.name}
            className="flex h-10 w-10 flex-col items-center justify-center rounded-full text-slate-100 hover:bg-slate-700/80 transition"
            >
            <item.icon className="h-6 w-6" />
            <span className="text-xs mt-1">{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
