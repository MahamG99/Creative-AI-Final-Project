// StepOne.js, StepTwo.js, StepThree.js

import React from 'react';
import { useState} from 'react';
import jsPDF from 'jspdf';

// StepOne.js
const StepThreeOriginal = ({ nextStep, prevStep , displayedMessage, selectedImage}) => {
    //const [displayedMessage, setDisplayedMessage] = useState('')
    const combinedContent = `${displayedMessage}\n\n${selectedImage}`;
    const handleNext = () => {
        // Any logic for StepOne
        nextStep();
      };
    const handlePrev = () => {
    // Any logic for StepOne
    prevStep();
  };
    const handleSaveAsPdf = () => {
      const pdf = new jsPDF();
      
      pdf.text(combinedContent, 10, 10);
      pdf.save('Properganda.pdf');
    };

    const handleShareEmail = () => {
          const mailtoLink = `mailto:?subject=${encodeURIComponent('ChatGPT Properganda')}&body=${encodeURIComponent(combinedContent)}`;
          window.location.href = mailtoLink;
        };
  
return (
    <div>

      <h1>Here's your news piece now!</h1>
      <p>Coutesy of ChatGPT</p>
      {/* StepOne content */}
      <h2>Original Text</h2>
      {selectedImage}
      <h2>New piece</h2>
      {displayedMessage}
      
      <button onClick={handlePrev}>Back</button>
      <button onClick={handleSaveAsPdf}>Save as PDF</button>
      <button onClick={handleShareEmail}>Share via Email</button>
    </div>
  );
};

export default StepThreeOriginal;

