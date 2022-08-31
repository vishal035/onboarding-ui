import React, { useContext, useState } from 'react';
import OnboardContext from '../../store/onboard';

/**
 * Third STep Onboard UI Component
 */
const ThirdStepForm = () => {
  // console.log('On 3 Step');
  const [workspaceFor, setWorfspaceFor] = useState('workspace-myselfy');

  /** using Context Hook */
  const ctx = useContext(OnboardContext);

  /** Listening to Radio Input onChange */
  // const workspaceSeletctHandler = (event) => {
  //   setWorfspaceFor(event.target.value);
  // };

  /** FORM Sumit Handler */
  const formSubmitHandler = (event) => {
    event.preventDefault();

    ctx.addUser({
      WorkspaceFor: workspaceFor,
    });

    ctx.nextStep();
  };

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

      <form
        onSubmit={formSubmitHandler}
        className="max-w-md mx-auto mt-8 mb-0 space-y-4"
      >
        <ul className="grid gap-6 w-full md:grid-cols-2">
          <li>
            <input
              type="radio"
              id="workspace-myselfy"
              name="workspace"
              value="workspace-myselfy"
              className="hidden peer"
              onChange={(event) => setWorfspaceFor(event.target.value)}
              defaultChecked="true"
              required
            />
            <label
              htmlFor="workspace-myselfy"
              className="inline-flex justify-between items-center p-5 w-full text-primary-gray bg-white rounded-lg border-2 border-primary-gray cursor-pointer dark:border-primary-gray-light peer-checked:border-primary dark:hover:border-primary-black"
            >
              <div className="block">
                <div className="relative w-7 mb-2">
                  <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path
                      fill={`${
                        workspaceFor === 'workspace-myselfy'
                          ? '#654DE4'
                          : 'currentColor'
                      }`}
                      d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2S7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"
                    />
                  </svg>
                </div>
                <div className="w-full text-lg font-semibold">For myself</div>
                <div className="w-full">
                  Write better, Think more clearly. Stay organized.
                </div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="workspace-team"
              name="workspace"
              value="workspace-team"
              className="hidden peer"
              onChange={(event) => setWorfspaceFor(event.target.value)}
            />
            <label
              htmlFor="workspace-team"
              className="inline-flex justify-between items-center p-5 w-full text-primary-gray bg-white rounded-lg border-2 border-primary-gray cursor-pointer dark:border-primary-gray-light peer-checked:border-primary dark:hover:border-primary-black"
            >
              <div className="block">
                <div className="relative w-7 mb-2">
                  <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path
                      fill={`${
                        workspaceFor === 'workspace-team'
                          ? '#654DE4'
                          : 'currentColor'
                      }`}
                      d="M12 11a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5zm-6.712 3.006a6.983 6.983 0 0 0-.28 1.65L5 16v6H2v-4.5a3.5 3.5 0 0 1 3.119-3.48l.17-.014zm13.424 0A3.501 3.501 0 0 1 22 17.5V22h-3v-6c0-.693-.1-1.362-.288-1.994zM5.5 8a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5zm13 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5zM12 2a4 4 0 1 1 0 8a4 4 0 0 1 0-8z"
                    />
                  </svg>
                </div>
                <div className="w-full text-lg font-semibold">With my team</div>
                <div className="w-full">
                  Wikis, docs, tasks & projects, all in one place.
                </div>
              </div>
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
