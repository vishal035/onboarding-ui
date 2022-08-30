import React from 'react';

const StepCount = () => {
  return (
    <div>
      <h2 className="sr-only">Steps</h2>

      <div className="relative after:inset-x-0 after:h-0.5 after:absolute after:top-1/2 after:-translate-y-1/2 after:block after:rounded-lg after:bg-gray-100">
        <ol className="relative z-10 flex justify-between text-base font-medium text-primary-black">
          <li className="flex items-center p-2 bg-white">
            <span className="w-8 h-8 text-base font-medium leading-8 bg-primary text-white border-[.5px] border-primary-gray-light text-center rounded-full">
              1
            </span>
          </li>

          <li className="flex items-center p-2 bg-white">
            <span className="w-8 h-8 text-base font-medium leading-8 text-center border-[.5px] border-primary-gray-light text-white bg-primary rounded-full">
              2
            </span>
          </li>

          <li className="flex items-center p-2 bg-white">
            <span className="w-8 h-8 text-base font-medium leading-8 text-center border-[.5px] border-primary-gray-light bg-gray-100 rounded-full">
              3
            </span>
          </li>

          <li className="flex items-center p-2 bg-white">
            <span className="w-8 h-8 text-base font-medium leading-8 text-center border-[.5px] border-primary-gray-light bg-gray-100 rounded-full">
              4
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default StepCount;
