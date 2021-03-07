import { BiRightArrowCircle } from "react-icons/bi";
export const Projets = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-5 py-px mb-4 text-4xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400 pt-2 pb-2">
            Projets
          </p>
        </div>
        <h2 className="text-base text-gray-700 md:text-lg">
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
          ca marche just avec le premier
        </h2>
      </div>
      <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <a className="cursor-pointer" href="/">
              <BiRightArrowCircle size="55" />
            </a>
          </div>
          <h6 className="mb-2 font-semibold leading-5">TIM - 2020</h6>
          <img
            src={"./images/images_projets/timwebsite1.jpg"}
            alt={"projet 1"}
          />
          <p className="text-sm text-gray-900">
            pourquoi les texts que jecirs ca depasse le bordu mais celui de
            lautre? adjawldlakwdjwalkdjwalkdjawkldj ajwdlkjawldkjawlk
            awjlkdjawlkdjawd
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <a className="cursor-pointer" href="/">
              <BiRightArrowCircle size="55" />
            </a>
          </div>
          <h6 className="mb-2 font-semibold leading-5">That is the true!</h6>
          <img
            src={"./images/images_projets/timwebsite1.jpg"}
            alt={"projet 1"}
          />
          <p className="text-sm text-gray-900">
            We meet at one of those defining moments - a moment when our nation
            is at war, our economy is in turmoil, and the American promise has
            been threatened once more.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <a className="cursor-pointer" href="/">
              <BiRightArrowCircle size="55" />
            </a>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Those options</h6>
          <img
            src={"./images/images_projets/timwebsite1.jpg"}
            alt={"projet 1"}
          />
          <p className="text-sm text-gray-900">
            Strategic high-level 30,000 ft view. Drill down re-inventing the
            wheel at the end of the day but curate imagineer, or to be inspired
            is to become creative.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <a className="cursor-pointer" href="/">
              <BiRightArrowCircle size="55" />
            </a>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Swearem ipsum</h6>
          <img
            src={"./images/images_projets/timwebsite1.jpg"}
            alt={"projet 1"}
          />
          <p className="text-sm text-gray-900">
            Aliquam scelerisque accumsan nisl, a mattis eros vestibulum et.
            Vestibulum placerat purus ut nibh aliquam fringilla. Aenean et
            tortor diam, id tempor elit.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <a className="cursor-pointer" href="/">
              <BiRightArrowCircle size="55" />
            </a>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Webtwo ipsum</h6>
          <img
            src={"./images/images_projets/timwebsite1.jpg"}
            alt={"projet 1"}
          />
          <p className="text-sm text-gray-900">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut
            perspiciatis unde omnis.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <a className="cursor-pointer" href="/">
              <BiRightArrowCircle size="55" />
            </a>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Lookout flogging</h6>
          <img
            src={"./images/images_projets/timwebsite1.jpg"}
            alt={"projet 1"}
          />
          <p className="text-sm text-gray-900">
            Flatland! Hypatia. Galaxies Orion's sword globular star cluster?
            Light years quasar as a patch of light gathered by gravity Vangelis
            radio telescope.
          </p>
        </div>
      </div>
      <div className="text-center">
        <a
          href="/"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
          En savoir plus
        </a>
      </div>
    </div>
  );
};
