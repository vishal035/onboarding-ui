import React, { useContext } from 'react';
import OnboardContext from '../../store/onboard';

const ForthStepForm = () => {
  // console.log('On 4 Step');
  const ctx = useContext(OnboardContext);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    ctx.nextStep();
  };

  return (
    <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto flex flex-col justify-center items-center text-center">
        <div className="relative w-16 h-16 mb-8 items-center rounded-full bg-primary text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 15 15"
          >
            <path fill="none" stroke="currentColor" d="M4 7.5L7 10l4-5" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold sm:text-3xl text-primary-black">
          Congratulations, Eren!
        </h1>

        <p className="mt-4 text-primary-gray">
          You have completed onboarding, you can start using the Eden!
        </p>
      </div>

      <form
        onSubmit={formSubmitHandler}
        className="max-w-md mx-auto mt-8 mb-0 space-y-4"
      >
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="inline-block w-full px-5 py-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
          >
            Launch Eden
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForthStepForm;
