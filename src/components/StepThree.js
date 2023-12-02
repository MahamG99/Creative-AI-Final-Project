// StepOne.js, StepTwo.js, StepThree.js

import React, { useRef }  from 'react';
import { useState} from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Modal from './Modal';

// StepOne.js
const StepThree = ({ nextStep, prevStep , displayedMessage, selectedImage}) => {
    
    const combinedContent = `Original Text: ${displayedMessage}\n\n Altered Text: ${selectedImage}`;
    const captureRef = useRef(null);
    const [modalOpen, setModalOpen] = useState(false);


    const handleNext = () => {
        // Any logic for StepOne
        nextStep();
      };
    const handlePrev = () => {
    // Any logic for StepOne
    prevStep();
  };
  const captureScreenshot = () => {
    // Capture the screenshot of the component (or any HTML element)
    html2canvas(captureRef.current, { width: 1800, height: 1200 }).then((canvas) => {
      // Create a PDF document
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      // Add the screenshot as an image to the PDF
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 250, 300);

      // Save the PDF
      pdf.save('properganda.pdf');
    });
  };
  const infoHandler = () => {
    setModalOpen(true);
  }
  const closeModal = () => {
    // Close the modal
    setModalOpen(false);
  };
    
return (
    <div ref={captureRef}>
        <div class="container-fluid">
        <div class="row full-height">
            <div class="col-6 border-end">
                <div class="thiccy-container">
                    <div class="row">
                        <div class="col-12 mt-5">
                            <h2 class="mb-4">Here's The Original Story</h2>
                        </div>
                        <div class="col-12">
                            <div class="gray-card">
                                <p>{selectedImage}</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div class="col-6">
                <div class="thiccy-container">
                    <div class="row">
                        <div class="col-12 mt-5">
                            <h2 class="mb-4">Here's Your Biased News!</h2>
                        </div>
                        <div class="col-12">
                            <div class="gray-card">
                                <p>
                                    {displayedMessage}
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div class="thiccy-container">
                <div class="mt-4 col-12 d-flex justify-content-between">
                    <div class="d-inline btn-group btn-lg dropstart mt-3">
                        <button type="button" class="btn btn-success bg-green dropdown-toggle dropdown-toggle-split"
                            data-bs-toggle="dropdown" aria-expanded="false">
                        
                        </button>
                        <button type="button" class="btn btn-warning bg-yellow" onClick={handlePrev}>
                            Back
                        </button>
                    </div>
                    <div class="d-inline">
                        <button class="btn btn-success bg-green" onClick={infoHandler}>More Information</button>
                    </div>
                    <Modal isOpen={modalOpen} onClose={closeModal} />
                    <div class="d-inline">
                        <button class="btn btn-warning bg-yellow" onClick={captureScreenshot}>
                            Save as PDF
                        </button>

                    </div>
                </div>
            </div>

        </div>
    </div>
    </div>
  );
};

export default StepThree;

