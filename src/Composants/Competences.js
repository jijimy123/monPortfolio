export const Competences = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-5 py-px mb-4 text-4xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400 pt-2 pb-2">
            À props
          </p>
        </div>
        <h2 className="text-base text-blue-700 md:text-lg underline font-extrablod">
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
          Mes Compétences
        </h2>
      </div>
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
            <svg
              className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">GitHub/Git/Trello</h6>
        </div>
      </div>
      <div className="text-center">
        <a
          href="/"
          className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
          En savoir plus
          <span className="ml-1 -mr-2">
            <svg
              className="w-8 h-8 text-white"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
};