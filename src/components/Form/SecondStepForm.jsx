import React from 'react';

const SecondStepForm = () => {
  return (
    <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto text-center">
        <h1 className="text-2xl font-bold sm:text-3xl text-primary-black">
          Let's set up a home for all your work
        </h1>

        <p className="mt-4 text-primary-gray">
          You can always create another workspace later.
        </p>
      </div>

      <form action="" className="max-w-md mx-auto mt-8 mb-0 space-y-4">
        <div>
          <label htmlFor="FullName">Workspace Name</label>

          <div className="relative">
            <input
              type="text"
              className="w-full mt-2 p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Eden"
            />
          </div>
        </div>

        <div>
          <label htmlFor="website-url" className="">
            Workspace URL{' '}
            <span className="text-primary-gray-light">(optional)</span>
          </label>
          <div className="relative mt-2">
            <div className="flex items-center text-gray-400 border rounded-lg ">
              <div className="px-3 py-2.5  rounded-l-md bg-gray-50 border-r">
                www.eden.com/
              </div>
              <input
                type="text"
                placeholder="Example"
                id="website-url"
                className="w-full p-2.5 ml-2 text-sm rounded-lg outline-none border-none shadow-sm"
              />
            </div>

            {/* <div className="px-3 py-2.5 rounded-l-md bg-gray-50 border-r">
              https://
            </div>
            <input
              type="text"
              className="w-full mt-2 p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Steve"
            /> */}
          </div>
        </div>

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

export default SecondStepForm;