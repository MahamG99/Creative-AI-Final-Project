// LinearApp.js

import React, { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepZero from './StepZero';

const LinearApp = ({onImageSelect, onFormSubmit, displayedMessage, selectedImage, image}) => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div>
      {step === 0 && <StepZero nextStep={nextStep}/>}
      {step === 1 && <StepOne nextStep={nextStep} onImageSelect={onImageSelect}/>}
      {step === 2 && <StepTwo nextStep={nextStep} prevStep={prevStep} image={image} onFormSubmit={onFormSubmit}/>}
      {step === 3 && <StepThree prevStep={prevStep} displayedMessage={displayedMessage} selectedImage={selectedImage}/>}
    </div>
  );
};

export default LinearApp;
