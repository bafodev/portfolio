import { useState } from "react";
import { Menu, X } from "lucide-react";


const tabs = [
  { label: "Présentation", target: "#presentation" },
  { label: "Projets réalisés", target: "#projects" },
  { label: "Contact", target: "#contact" },
];

export default function TopNav() {
  const [open, setOpen] = useState(false);

  const scrollTo = (selector) => {
    const el = document.querySelector(selector);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const handleClick = () => {
    window.open(
      "./CV_TOURE_Bafode0202.pdf",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <header className="w-full flex justify-center py-5">
      <div className="w-full max-w-5xl rounded-2xl bg-[#3C096C]/40 px-4 md:px-4 py-3 md:py-5 flex items-center justify-between backdrop-blur-md shadow-2xl border border-white/5">
        <div className="text-white font-semibold text-sm md:text-base leading-tight">
        <p className="text-white font-semibold text-sm md:text-base leading-tigh">Bafodé <br/> TOURE</p>
        </div>


        <nav className="hidden md:flex relative rounded-full bg-black/50 px-1 py-1 items-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.target}
              onClick={() => scrollTo(tab.target)}
              className="px-5 py-2 text-sm rounded-full text-gray-300 transition-all hover:bg-white hover:text-black"
            >
              {tab.label}
            </button>
          ))}
        </nav>

  
        <button
          onClick={handleClick}
          className="hidden md:inline-flex rounded-full bg-white text-black px-6 py-2 text-sm font-medium"
        >
          Mon CV
        </button>


        <button
          className="md:hidden text-white"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Ouvrir le menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>


      <div
        className={`md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 h-full w-64 bg-[#240046] p-6 transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="flex flex-col gap-6 mt-10">
            {tabs.map((tab) => (
              <li key={tab.target}>
                <button
                  onClick={() => scrollTo(tab.target)}
                  className="w-full text-left text-lg rounded-full px-4 py-2 text-[#e0aaff] transition-all hover:bg-white hover:text-black"
                >
                  {tab.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <button
                onClick={() => {
                  setOpen(false);
                  handleClick();
                }}
                className="w-full rounded-full bg-white text-black px-4 py-2 text-base font-medium"
              >
                Mon CV
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

