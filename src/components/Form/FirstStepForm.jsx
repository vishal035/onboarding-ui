import React from 'react';

const FirstStepForm = () => {
  return (
    <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto text-center">
        <h1 className="text-2xl font-bold sm:text-3xl text-primary-black">
          Welcome! First thing first...
        </h1>

        <p className="mt-4 text-primary-gray">
          You can always change them later.
        </p>
      </div>

      <form action="" className="max-w-md mx-auto mt-8 mb-0 space-y-4">
        <div>
          <label htmlFor="FullName">Full Name</label>

          <div className="relative">
            <input
              type="text"
              className="w-full mt-2 p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Steve Jobs"
            />
          </div>
        </div>

        <div>
          <label htmlFor="displayName" className="">
            Display Name
          </label>
          <div className="relative">
            <input
              type="text"
              className="w-full mt-2 p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Steve"
            />
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

export default FirstStepForm;
