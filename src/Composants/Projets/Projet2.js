import { BiLeftArrowCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
export const Projet2 = () => {
  return (
    <>
      <div className="px-4 py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="pb-10">
          <Link className="cursor-pointer" to="/projets">
            <BiLeftArrowCircle size="65" className="bg-white rounded-xl" />
          </Link>
        </div>
        <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl sm:leading-none">
                Arbracine
              </h2>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://arbracine.netlify.app"
              >
                <span className="text-2xl font-bold inline-block text-deep-purple-accent-400">
                  https://arbracine.netlify.app
                </span>
              </a>
              <p className="text-base text-gray-200 md:text-lg">
                Ceci est un projet que j'ai fait avec mon equipe Arbracine avec
                HTML... pour environnement blabla
              </p>
            </div>
            <span className="text-3xl font-bold inline-block text-deep-purple-accent-400 pb-3">
              Technologies utilisées
            </span>
            <div className="grid gap-8 row-gap-8 sm:grid-cols-2 lg: grid-cols-6">
              <div>
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                  <img src={"../images/htmlIcon.png"} alt={"Icon HTML"} />
                </div>
                <h6 className="mb-1 font-semibold leading-5 lg:text-base text-xs text-gray-200">
                  HTML
                </h6>
              </div>
              <div>
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                  <img
                    src={"../images/cssIcon.png"}
                    style={{ width: 30, height: 40 }}
                    alt={"Icon CSS"}
                  />
                </div>
                <h6 className="mb-1 font-semibold leading-5 lg:text-base text-xs text-gray-200">
                  {" "}
                  CSS
                </h6>
              </div>
              <div>
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                  <img
                    src={"../images/javascriptIcon.png"}
                    alt={"Icon JavaScript"}
                  />
                </div>
                <h6
                  className="mb-1 font-semibold leading-5 lg:text-base text-xs text-gray-200"
                  style={{ paddingBottom: "2.8%" }}
                >
                  JavaScript
                </h6>
              </div>
            </div>
          </div>
          <div className="border-gray-100 border-2 h-80">
            <img
              src={"../images/images_projets/arbracine.jpg"}
              alt={"projet 2"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
