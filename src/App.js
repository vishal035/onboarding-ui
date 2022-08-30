import './App.css';
import Logo from './components/Header/Logo/Logo';
import StepCount from './components/Header/Navigation/StepCount';
import FirstStepForm from './components/Form/FirstStepForm';
import SecondStepForm from './components/Form/SecondStepForm';
import ThirdStepForm from './components/Form/ThirdStepForm';
import ForthStepForm from './components/Form/ForthStepForm';

function App() {
  return (
    <div className="font-sans w-screen bg-white flex flex-col items-center justify-center">
      <Logo />
      <div className="w-96 mt-4">
        <StepCount />
      </div>
      <div className="">
        <FirstStepForm />
        {/* <SecondStepForm /> */}
        {/* <ThirdStepForm /> */}
        {/* <ForthStepForm /> */}
      </div>
    </div>
  );
}

export default App;
