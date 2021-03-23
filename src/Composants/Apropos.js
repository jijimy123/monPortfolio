export const Apropos = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-5 py-px mb-4 text-4xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400 pt-2 pb-2">
            À propos
          </p>
        </div>
        <span className="relative inline-block">
          <svg
            viewBox="0 0 52 24"
            fill="currentColor"
            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
          >
            <defs>
              <pattern
                id="d9d7687a-355f-4502-8ec4-7945db034688"
                x="0"
                y="0"
                width=".135"
                height=".30"
              >
                <circle cx="1" cy="1" r=".7" />
              </pattern>
            </defs>
            <rect
              fill="url(#d9d7687a-355f-4502-8ec4-7945db034688)"
              width="52"
              height="24"
            />
          </svg>
        </span>{" "}
      </div>
      <h2 className="inline-block px-3 py-1 mb-7 text-1xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-200 pt-2 pb-2">
        Mes Compétences
      </h2>

      <div className="grid grid-cols-2 gap-5 row-gap-6 mb-10 sm:grid-cols-3 lg:grid-cols-6">
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <img src={"./images/htmlIcon.png"} alt={"Icon HTML"} />
          </div>
          <h6 className="mb-2 font-semibold leading-5">HTML/CSS</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <img src={"./images/javascriptIcon.png"} alt={"Icon Javascript"} />
          </div>
          <h6 className="mb-2 font-semibold leading-5">Javascript</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <img src={"./images/reactIcon.png"} alt={"Icon React"} />
          </div>
          <h6 className="mb-2 font-semibold leading-5">React/Vuejs</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <img src={"./images/phpIcon.webp"} alt={"Icon PHP"} />
          </div>
          <h6 className="mb-2 font-semibold leading-5">PHP</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <img src={"./images/jsonIcon.png"} alt={"Icon Json"} />
          </div>
          <h6 className="mb-2 font-semibold leading-5">JSON/MySQL</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <img src={"./images/githubIcon2.png"} alt={"Icon GitHub"} />
          </div>
          <h6 className="mb-5 font-semibold leading-5">GitHub/Git/Trello</h6>
        </div>
      </div>
      <div className="max-w-xl mb-10 lg:max-w-2xl md:mb-12">
        <h2 className="inline-block px-3 py-1 mb-7 text-1xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-200 pt-2 pb-2">
          Qui-suis je
        </h2>
        <p className="pl-10">
          Je suis un étudiant en Techniques d'Intégration Multimédia avec un
          intérêt en programmation front-end, j'aime apprendre des nouvelles
          technologies.
        </p>
      </div>
    </div>
  );
};
