export const Contact = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="lg:pr-10">
          <a
            href="/"
            aria-label="Go Home"
            title="Logo"
            className="inline-block mb-5"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
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
          </a>
          <h5 className="mb-4 text-2xl font-extrabold leading-none">
            Téléphone: 514-298-3238
          </h5>
          <h5 className="mb-4 text-2xl font-extrabold leading-none">
            Email: haoyangchen1618@gmail.com
          </h5>
          <h5 className="mb-4 text-2xl font-extrabold leading-none">
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
            <a
              href="/"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6">
                <path d="M23.8,7.2c0,0-0.2-1.7-1-2.4c-0.9-1-1.9-1-2.4-1C17,3.6,12,3.6,12,3.6h0c0,0-5,0-8.4,0.2 c-0.5,0.1-1.5,0.1-2.4,1c-0.7,0.7-1,2.4-1,2.4S0,9.1,0,11.1v1.8c0,1.9,0.2,3.9,0.2,3.9s0.2,1.7,1,2.4c0.9,1,2.1,0.9,2.6,1 c1.9,0.2,8.2,0.2,8.2,0.2s5,0,8.4-0.3c0.5-0.1,1.5-0.1,2.4-1c0.7-0.7,1-2.4,1-2.4s0.2-1.9,0.2-3.9v-1.8C24,9.1,23.8,7.2,23.8,7.2z M9.5,15.1l0-6.7l6.5,3.4L9.5,15.1z" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="./images/Chen_Haoyang.png"
            alt="Photo de Haoyang"
          />
        </div>
      </div>
    </div>
  );
};
