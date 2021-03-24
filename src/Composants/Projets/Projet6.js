import { BiLeftArrowCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
export const Projet6 = () => {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="pb-10">
          <Link className="cursor-pointer" to="/projets">
            <BiLeftArrowCircle size="65" />
          </Link>
        </div>
        <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Site Web rechercher
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
              <p className="text-base text-gray-700 md:text-lg">
                Ceci est un projet que j'ai fait avec mon équipe Shreact avec
                React... blablabla
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
                <h6 className="mb-1 font-semibold leading-5 lg:text-base text-xs ">
                  Next.js
                </h6>
              </div>
              <div>
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                  <img src={"../images/reactIcon.png"} alt={"Icon React"} />
                </div>
                <h6 className="mb-1 font-semibold leading-5 lg:text-base text-xs ">
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
                <h6 className="mb-1 font-semibold leading-5 lg:text-base text-xs ">
                  GraphQl
                </h6>
              </div>
              <div>
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                  <img
                    className=" w-11 h-11"
                    src={"../images/contentfulIcon.png"}
                    alt={"Icon Contentful"}
                  />
                </div>
                <h6
                  className="mb-1 font-semibold leading-5 lg:text-base text-xs"
                  style={{ paddingBottom: "1.2%" }}
                >
                  Contentful
                </h6>
              </div>
            </div>
          </div>
          <div>
            <img
              src={"../images/images_projets/tim-2020.jpg"}
              alt={"projet 6"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
