
import React from 'react';
import { useState} from 'react';



// StepOne.js
const StepZero = ({ nextStep}) => {
  
  const handleNext = () => {
    // Any logic for StepOne
    nextStep();
  };
  return (
    <div class="bg-img">
        <div class="container">
            <div class="row full-height">
                <div class="col-4 d-flex align-items-center">
                    <div>
                        <h4 >Propaganda Machine</h4>
                            <h1 class="mt-5 w-75">Make Believe Bulletin</h1>
                            <div class="btn-group btn-lg dropend mt-3">
                                <button type="button" class="btn btn-warning bg-yellow" onClick={handleNext}>
                                  Let's Begin
                                </button>
                                <button type="button" class="btn btn-success bg-green dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                  <span class="visually-hidden">Toggle Dropright</span>
                                </button>
                                
                            </div>
                    </div>
                </div>
                <div class="col-4">
                    
                </div>
            </div>
        </div>
    </div>
    );
  }
  export default StepZero;