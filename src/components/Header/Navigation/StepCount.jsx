import React, { useContext } from 'react';
import OnboardContext from '../../../store/onboard';

const StepCount = () => {
  /** using Context Hook */
  const ctx = useContext(OnboardContext);

  return (
    <div>
      <h2 className="sr-only">Steps</h2>

      <div className="relative after:inset-x-0 after:h-0.5 after:absolute after:top-1/2 after:-translate-y-1/2 after:block after:rounded-lg after:bg-gray-100">
        <ol className="relative z-10 flex justify-between text-base font-medium text-primary-black">
          <li className="flex items-center p-2 bg-white">
            <span
              className={`w-8 h-8 text-base font-medium leading-8 border-[.5px] border-primary-gray-light text-center rounded-full ${
                ctx.onStep >= 1
                  ? 'bg-primary text-white' // Changing the Background Color and Text Color By Current Step Number
                  : 'bg-gray-100 text-primary-black' // Fallback UI
              }`}
            >
              1
            </span>
          </li>

          <li className="flex items-center p-2 bg-white">
            <span
              className={`w-8 h-8 text-base font-medium leading-8 text-center border-[.5px] border-primary-gray-light rounded-full ${
                ctx.onStep >= 2
                  ? 'bg-primary text-white' // Changing the Background Color and Text Color By Current Step Number
                  : 'bg-gray-100 text-primary-black' // Fallback UI
              }`}
            >
              2
            </span>
          </li>

          <li className="flex items-center p-2 bg-white">
            <span
              className={`w-8 h-8 text-base font-medium leading-8 text-center border-[.5px] border-primary-gray-light rounded-full ${
                ctx.onStep >= 3
                  ? 'bg-primary text-white' // Changing the Background Color and Text Color By Current Step Number
                  : 'bg-gray-100 text-primary-black' // Fallback UI
              }`}
            >
              3
            </span>
          </li>

          <li className="flex items-center p-2 bg-white">
            <span
              className={`w-8 h-8 text-base font-medium leading-8 text-center border-[.5px] border-primary-gray-light rounded-full ${
                ctx.onStep >= 4
                  ? 'bg-primary text-white' // Changing the Background Color and Text Color By Current Step Number
                  : 'bg-gray-100 text-primary-black' // Fallback UI
              }`}
            >
              4
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default StepCount;
