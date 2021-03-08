import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <lottie-player
            src="https://assets9.lottiefiles.com/packages/lf20_DX2n72.json"
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-600 lg:w-600"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl z-10">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-s font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              BONJOUR!
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none">
              Bienvenu dans mon portfolio!
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              Je suis un étudiant en Techniques d'Intégration Multimédia avec un
              intérêt en programmation front-end, j'aime apprendre des nouvelles
              technologies...
            </p>
            <div className="flex items-center">
              <Link
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                to="/apropos"
              >
                En savoir plus 🧐
              </Link>
            </div>
            <div className="flex items-center mt-5 underline">
              Note Important : Le site n'est pas 100% FINI! J'ai encore beaucoup
              de modifications à faire, par exemple: au lieu de avec un fond
              blanc, je vais faire plus tot en drak mode. Les projets sont juste
              des exemples, c'est seulement le 1er qui marche... ETC... Merci
              beaucoup votre visite et j'attend votre beaux petites commentaires
              ❤ (❁´◡`❁)
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
