import React, { useState } from 'react';

/** Init OnboardContext */
const OnboardContext = React.createContext({
  onStep: null,
  userOnboard: {
    FullName: '',
    DisplayName: '',
    WorkspaceName: '',
    WorkspaceURL: '',
    WorkspaceFor: '',
  },
  addUser: (data) => {},
  nextStep: () => {},
});

/** Defing methods and Properties */
export const OnboardContextProvider = (props) => {
  const [onStep, setOnStep] = useState(1);

  /** For Demo All Data will be Console Logged */
  const addUserHandler = (data) => {
    console.log(data);
  };

  /** Reseting the Step from 4 ===> 1 */
  const resetSteps = () => {
    if (onStep === 4) setOnStep(1);
  };

  /** Moving Formward from Current Step to next Step: 1(default) ==> 2(increment by +1) */
  const nextStepHandler = () => {
    if (onStep < 4) setOnStep((val) => val + 1);
    if (onStep === 4) resetSteps();
  };

  /** Returning the OnboardContext Hook with data and methods */
  return (
    <OnboardContext.Provider
      value={{
        onStep,
        nextStep: nextStepHandler,
        addUser: addUserHandler,
        reset: resetSteps,
      }}
    >
      {props.children}
    </OnboardContext.Provider>
  );
};

export default OnboardContext;
