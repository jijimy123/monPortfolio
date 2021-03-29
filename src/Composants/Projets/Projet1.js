import { BiLeftArrowCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
export const Projet1 = () => {
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
                TIM - 2020
              </h2>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://tim-2020.vercel.app/"
              >
                <span className="text-2xl font-bold inline-block text-deep-purple-accent-400">
                  https://tim-2020.vercel.app/
                </span>
              </a>
              <p className="text-base text-gray-200 md:text-lg">
                &nbsp;&nbsp;Ceci est un projet que j'ai fait avec mon équipe
                Shreact avec React. On a utilisé plusieurs technologies pour ce
                projet, comme Teams pour la communication; Contenful pour la
                base de donnée; Figma pour les maquettes du site; Git pour la
                gestion de fichiers et code source,etc.
              </p>
              <br></br>
              <p className="text-base text-gray-200 md:text-lg">
                &nbsp;&nbsp;Je trouve que j'ai une belle optunité de travailler
                avec mon équipe avec React.Cela me donne une très belle
                expérience c'est quoi React, qu'est ce que je peux faire avec et
                c'est quoi la beauté de React.
              </p>
            </div>
            <span className="text-3xl font-bold inline-block text-deep-purple-accent-400 pb-3">
              Technologies utilisées
            </span>
            <div className="grid gap-8 row-gap-8 sm:grid-cols-2 lg: grid-cols-6">
              <div>
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                  <img src={"../images/nextjsIcon.png"} alt={"Icon Nextjs"} />
                </div>
                <h6 className="mb-1 font-semibold leading-5 lg:text-base text-xs text-gray-200">
                  Next.js
                </h6>
              </div>
              <div>
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                  <img src={"../images/reactIcon.png"} alt={"Icon React"} />
                </div>
                <h6 className="mb-1 font-semibold leading-5 lg:text-base text-xs text-gray-200">
                  React
                </h6>
              </div>
              <div>
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                  <img
                    src={"../images/graphqlIcon.webp"}
                    alt={"Icon GraphQl"}
                  />
                </div>
                <h6 className="mb-1 font-semibold leading-5 lg:text-base text-xs text-gray-200">
                  GraphQl
                </h6>
              </div>
              <div>
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                  <img
                    className=" w-10 h-11 mr-1"
                    src={"../images/contentfulIcon.png"}
                    alt={"Icon Contentful"}
                  />
                </div>
                <h6
                  className="mb-1 font-semibold leading-5 lg:text-base text-xs text-gray-200"
                  style={{ paddingBottom: "2.8%" }}
                >
                  Contentful
                </h6>
              </div>
            </div>
          </div>
          <div className="space-y-5">
            <img
              className="border-gray-100 border-2 h-80"
              src={"../images/images_projets/tim-2020.jpg"}
              alt={"projet tim-2020-1"}
            />
            <img
              className="border-gray-100 border-2 h-80"
              src={"../images/images_projets/tim-2020-2.png"}
              alt={"projet tim-2020-2"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
