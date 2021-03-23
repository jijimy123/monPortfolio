export const Contact = () => {
  return (
    <div className="px-2 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-5 py-px mb-4 text-4xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400 pt-2 pb-2">
            Contact
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
        </h2>
      </div>
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="lg:pr-10">
          <div className="flex items-center justify-center w-12 h-12 mb-5 sm:mt-1 lg:mt-20 rounded-full bg-indigo-50">
            <img
              style={{ width: 30, height: 30, marginLeft: -5 }}
              src={"./images/envoyer.webp"}
              alt={"Icon envoyer"}
            />
          </div>

          <h5 className="mb-4 text-xl md:text-2xl font-extrabold leading-none">
            Email: haoyangchen1618@gmail.com
          </h5>
          <h5 className="mb-4 text-xl md:text-2xl font-extrabold leading-none">
            Wechat: jijimy123
          </h5>
          <hr className="mb-5 border-gray-300" />
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/jijimy123"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <img
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-10"
                src={"./images/githubIcon.png"}
                alt={"Icon GitHub"}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/chen-haoyang-638b631b6/"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <img
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-10"
                src={"./images/linkedinIcon.png"}
                alt={"Icon Linkedin"}
              />
            </a>
          </div>
        </div>
        <div>
          <img
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ width: 360, height: 480 }}
            src={"./images/Chen_Haoyang.png"}
            alt={"Icon GitHub"}
          />
        </div>
      </div>
    </div>
  );
};
