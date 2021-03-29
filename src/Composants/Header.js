import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="relative flex flex-col-reverse py-5 lg:flex-col font-body">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:ml-3 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <lottie-player
            src="https://assets9.lottiefiles.com/packages/lf20_DX2n72.json"
            className="object-cover w-full h-52 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 py-9 ml-auto mr-96 md:px-0 lg:px-8 lg:max-w-screen-xl z-10">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-6 py-2 mb-4 text-3xl font-bold tracking-wider text-black uppercase rounded-full bg-teal-accent-400">
              BONJOUR!
            </p>
            <div className="mb-3 w-11/12 mr-20">
              <p className="mb-6 pl-2 text-base font-bold text-gray-200 md:text-2xl">
                Je suis un étudiant en Techniques d'Intégration Multimédia avec
                un intérêt en programmation front-end, j'aime apprendre des
                nouvelles technologies.
              </p>
            </div>

            <div className="flex items-center">
              <Link
                className="text-xl inline-flex items-center justify-center h-14 px-6 mr-6 font-medium tracking-wide text-indigo-100 transition duration-200 rounded shadow-md bg-indigo-900 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
                to="/apropos"
              >
                En savoir plus 🧐
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
