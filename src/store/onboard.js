import React, { useState } from 'react';

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

export const OnboardContextProvider = (props) => {
  const [onStep, setOnStep] = useState(1);

  const addUserHandler = (data) => {
    console.log(data);
  };

  const resetSteps = () => {
    if (onStep === 4) setOnStep(1);
  };

  const nextStepHandler = () => {
    if (onStep < 4) setOnStep((val) => val + 1);
    if (onStep === 4) resetSteps();
  };

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
