import React, { useContext } from 'react';
import Logo from './components/Header/Logo/Logo';
import StepCount from './components/Header/Navigation/StepCount';
import FirstStepForm from './components/Form/FirstStepForm';
import SecondStepForm from './components/Form/SecondStepForm';
import ThirdStepForm from './components/Form/ThirdStepForm';
import ForthStepForm from './components/Form/ForthStepForm';
import OnboardContext from './store/onboard';

function App() {
  /** using Context Hook */
  const ctx = useContext(OnboardContext);

  return (
    <div className="font-sans w-screen bg-white flex flex-col items-center justify-center">
      <Logo />
      <div className="w-96 mt-4">
        <StepCount />
      </div>
      <div className="">
        {ctx.onStep === 1 && <FirstStepForm />}
        {ctx.onStep === 2 && <SecondStepForm />}
        {ctx.onStep === 3 && <ThirdStepForm />}
        {ctx.onStep === 4 && <ForthStepForm />}
      </div>
    </div>
  );
}

export default App;
