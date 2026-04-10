import TechStack from "../components/TechStack";
import TopNav from "../components/TopNav";
import projectsData from "../data/projects.json";

export default function HomePage() {
  const projects = projectsData;

  return (
    <div className="relative min-h-screen bg-slate-950 text-[#f5f3ff]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(157,78,221,0.5),_transparent_55%)] blur-3xl opacity-80" />

      <div className="fixed inset-0 -z-20 bg-black/80 backdrop-blur-xl" />

      <header className="fixed top-0 left-0 w-full z-50">
        <TopNav />
      </header>

      <main className="animate-slide-in h-screen pt-28 md:pt-32 overflow-y-scroll snap-y snap-mandatory">
        <section
          id="hero"
          className="h-screen snap-start flex flex-col items-center justify-center px-4"
        >
          <h1 className="mt-32 text-3xl md:text-4xl font-bold text-[#ede9fe] text-center mb-8 tracking-wider">
            Développeur Web Full-Stack
          </h1>

          <div className="w-full max-w-6xl h-[55vh]">
            <img
              src="./IMG_0174.jpg"
              alt="Développeur 4K"
              className="w-full h-full rounded-2xl object-cover border border-white/10 shadow-2xl"
            />
          </div>
        </section>

        <section
          id="presentation"
          className=" animate-slide-in h-screen snap-start flex flex-col items-center justify-center px-4"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#ede9fe] text-center mb-6 tracking-wider">
            Présentation
          </h1>
          <p className="max-w-4xl text-center text-xs md:text-base text-slate-100 tracking-wider">
            Développeur web Full‑Stack en reconversion professionnelle et agé de
            29 ans, je suis actuellement en formation DWWM au sein de l’école
            forEach Academy, où je consolide mes compétences en front‑end,
            back‑end, création d’API et gestion de bases de données. <br /> Fort
            d’une expérience significative dans la relation client et le
            pilotage d’activités digitales, je mets à profit mon sens de
            l’écoute et mon aisance relationnelle pour concevoir des interfaces
            efficaces et centrées utilisateur. <br />
            Curieux, rigoureux et autonome, j’apprécie particulièrement les
            environnements collaboratifs qui favorisent l’échange et la qualité
            du produit final. <br /> À la recherche d’opportunités, notamment d'une alternance, je vous invite à découvrir mon portfolio pour explorer mes
            projets et ma progression technique.
          </p>
        </section>

        <section
          id="projects"
          className="animate-slide-in snap-start flex flex-col gap-6 pt-32 max-w-4xl mx-auto "
        >
          <h1 className="text-3xl md:text-4xl h-full font-bold text-[#ede9fe] text-center mb-3">
            Projets Réalisés
          </h1>

          <div className="grid  sm:grid-cols-2 gap-2  w-full ">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col w-full rounded-2xl bg-slate-900/70 border border-white/10 shadow-xl"
              >
                <div className="flex snap-x snap-mandatory overflow-x-auto w-full h-52 rounded-t-2xl">
                {project.image.map((imgPath) => (
                  <img
                    key={imgPath}
                    src={imgPath}
                    alt={project.title}
                    className="snap-center shrink-0 w-full h-full object-cover rounded-t-2xl"
                  />
                ))}
                </div>
                
                  <div className="p-3 bg-slate-900/70 rounded-b-2xl">
                    <p className="text-sm font-semibold text-[#ede9fe]">
                      {project.title}
                    </p>
                    <p className="text-xs text-slate-300 mt-1">
                      {project.description}
                    </p>
                  </div>
                  
              </div>
            ))}
          </div>
        </section>
        <section
          id="technos"
          className="animate-slide-in h-screen snap-start flex flex-col items-center justify-center px-4"
        >
          <h1 className="mt-12 text-2xl md:text-3xl font-bold text-[#ede9fe] text-center mb-6 tracking-wider">
            Technos utilisées
          </h1>
          <section className="flex whitespace-nowrap animate-slide-in w-full">
            <TechStack />
          </section>
        </section>

        <section
          id="contact"
          className="animate-slide-in h-screen snap-start flex flex-col items-center justify-center px-4"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#ede9fe] text-center mb-6">
            Contact
          </h1>
          <p className="text-sm md:text-base text-slate-200 mb-4 text-center">
            Une idée de projet, une collaboration, une question ?
          </p>
          <a
            href="mailto:bafode.toure.pro59@gmail.com"
            className="rounded-full bg-white text-black px-6 py-2 text-sm font-medium"
          >
            M'écrire
          </a>
        </section>
      </main>
    </div>
  );
}
