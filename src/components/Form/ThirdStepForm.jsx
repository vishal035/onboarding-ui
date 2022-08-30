import React from 'react';

const ThirdStepForm = () => {
  return (
    <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto text-center">
        <h1 className="text-2xl font-bold sm:text-3xl text-primary-black">
          How are you planing to use Eden?
        </h1>

        <p className="mt-4 text-primary-gray">
          We'll streamline your setup experience accordingly.
        </p>
      </div>

      <form action="" className="max-w-md mx-auto mt-8 mb-0 space-y-4">
        <ul class="grid gap-6 w-full md:grid-cols-2">
          <li>
            <input
              type="radio"
              id="hosting-small"
              name="hosting"
              value="hosting-small"
              className="hidden peer"
              required
            />
            <label
              for="hosting-small"
              className="inline-flex justify-between items-center p-5 w-full text-primary-gray bg-white rounded-lg border-2 border-primary-gray cursor-pointer dark:border-primary-gray-light peer-checked:border-primary dark:hover:border-primary-black"
            >
              <div className="block">
                <div className="relative w-7 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    // width="1em"
                    // height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2S7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"
                    />
                  </svg>
                </div>
                <div className="w-full text-lg font-semibold">For myself</div>
                <div className="w-full">
                  Write better, Think more clearly. Stay organized.
                </div>
              </div>
              {/* <svg
                aria-hidden="true"
                className="ml-3 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg> */}
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="hosting-big"
              name="hosting"
              value="hosting-big"
              className="hidden peer"
            />
            <label
              for="hosting-big"
              className="inline-flex justify-between items-center p-5 w-full text-primary-gray bg-white rounded-lg border-2 border-primary-gray cursor-pointer dark:border-primary-gray-light peer-checked:border-primary dark:hover:border-primary-black"
            >
              <div className="block">
                <div className="relative w-7 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    // width="1em"
                    // height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 11a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5zm-6.712 3.006a6.983 6.983 0 0 0-.28 1.65L5 16v6H2v-4.5a3.5 3.5 0 0 1 3.119-3.48l.17-.014zm13.424 0A3.501 3.501 0 0 1 22 17.5V22h-3v-6c0-.693-.1-1.362-.288-1.994zM5.5 8a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5zm13 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5zM12 2a4 4 0 1 1 0 8a4 4 0 0 1 0-8z"
                    />
                  </svg>
                </div>
                <div className="w-full text-lg font-semibold">With my team</div>
                <div className="w-full">
                  Wikis, docs, tasks & projects, all in one place.
                </div>
              </div>
              {/* <svg
                aria-hidden="true"
                className="ml-3 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg> */}
            </label>
          </li>
        </ul>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="inline-block w-full px-5 py-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
          >
            Create Workspace
          </button>
        </div>
      </form>
    </div>
  );
};

export default ThirdStepForm;
