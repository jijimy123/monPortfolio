export const Apropos = () => {
  return (
    <div className="px-4 py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
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

      <div className="grid grid-cols-2 gap-5 row-gap-6 mb-10 sm:grid-cols-3 lg:grid-cols-4">
        {/* ============================================================================================================== */}

        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <img src={"./images/htmlIcon.png"} alt={"Icon HTML"} />
          </div>
          <h6 className="mb-2 font-bold leading-5 text-white">HTML</h6>
        </div>

        {/* ============================================================================================================== */}

        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <img
              src={"./images/cssIcon.png"}
              alt={"Icon CSS"}
              className="w-11 h-16 lg:w-16 lg:h-20"
            />
          </div>
          <h6 className="mb-2 font-bold leading-5 text-white">CSS</h6>
        </div>

        {/* ============================================================================================================== */}

        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <img src={"./images/javascriptIcon.png"} alt={"Icon Javascript"} />
          </div>
          <h6 className="mb-2 font-bold leading-5 text-white">Javascript</h6>
        </div>

        {/* ============================================================================================================== */}

        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <img
              src={"./images/vuejsIcon.png"}
              alt={"Icon Vuejs"}
              className="w-11 h-14 mt-2 lg:w-16 lg:h-16"
            />
          </div>
          <h6 className="mb-2 font-bold leading-5 text-white">Vuejs</h6>
        </div>

        {/* ============================================================================================================== */}

        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <img src={"./images/reactIcon.png"} alt={"Icon React"} />
          </div>
          <h6 className="mb-2 font-bold leading-5 text-white">React</h6>
        </div>

        {/* ============================================================================================================== */}

        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <img src={"./images/phpIcon.webp"} alt={"Icon PHP"} />
          </div>
          <h6 className="mb-2 font-bold leading-5 text-white">PHP</h6>
        </div>

        {/* ============================================================================================================== */}

        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <img src={"./images/jsonIcon.png"} alt={"Icon Json"} />
          </div>
          <h6 className="mb-2 font-bold leading-5 text-white">JSON/MySQL</h6>
        </div>

        {/* ============================================================================================================== */}

        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <img
              src={"./images/contentfulIcon.png"}
              alt={"Icon Contentful"}
              className="w-14 h-14 mr-1 lg:w-20 lg:h-24"
            />
          </div>
          <h6 className="mb-2 font-bold leading-5 text-white">Contentful</h6>
        </div>

        {/* ============================================================================================================== */}

        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <img src={"./images/githubblueIcon.png"} alt={"Icon GitHub"} />
          </div>
          <h6 className="mb-5 font-bold leading-5 text-white">
            GitHub/Git/Trello
          </h6>
        </div>

        {/* ============================================================================================================== */}
      </div>

      {/* ============================================================================================================== */}

      <div className="max-w-xl mb-10 lg:max-w-7xl md:mb-14">
        <h2 className="inline-block px-3 py-5 mb-7 text-1xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-200 pt-2 pb-2">
          Qui-suis je
        </h2>
        <p className="font-body text-xl font-bold px-5 py-2 text-gray-200 bg-gray-900 rounded-xl mb-3">
          Développeur web avec 3 ans expérience de web en Technique
          d'intégration Multimédia. Je suis un développeur full-stack, mais je
          suis plus passioné par le front-end. Je passe souvent du temps à
          regarder des nouvelles technologies et essayer de comprendre et de
          l'apprendre. J'aime travailler dans une équipe avec une belle
          ambiance.
        </p>
      </div>
    </div>
  );
};
