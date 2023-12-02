// StepOne.js, StepTwo.js, StepThree.js

import React from 'react';
import { useState, useEffect} from 'react';
// StepOne.js
const StepTwo = ({ nextStep , prevStep, onFormSubmit, image}) => {
  const [selectedOptions, setSelectedOptions] = useState({ politicalOrientation: '', globalRegion: '' , support: ''});
  const [showTwoOptions, setShowTwoOptions] = useState(false);

  

  useEffect(() => {
    // Calculate the showTwoOptions value based on the image prop
    if (image === 'image1' || image === 'image2') {
      console.log('going to show 2 radio buttons: cultural and political');
      setShowTwoOptions(true);
    } else if (image === 'image3' || image === 'image4') {
      console.log('going to show favour/not in favour radio button');
      setShowTwoOptions(false);
    }
  }, [image]);

  useEffect(() => {
    onFormSubmit(selectedOptions)
  }, [selectedOptions])
 

  const handleOptionChange = (category, value) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [category]: value,
    }));
  };

  const handleNext = () => {
  // Any logic for StepOne
  nextStep();
  };

  const handlePrev = () => {
    // Any logic for StepOne
    prevStep();
  };

  return (
    <div>

      <h2>Choose a perspective</h2>
      
      {showTwoOptions ? (
        <>
        <h3>Select Global Region:</h3>
        <label>
          <input
            type="radio"
            value="Global South"
            checked={selectedOptions.globalRegion === 'Global South'}
            onChange={() => handleOptionChange('globalRegion', 'Global South')}
          />
        Global South
        </label>

        <label>
          <input
            type="radio"
            value="Global North"
            checked={selectedOptions.globalRegion === 'Global North'}
            onChange={() => handleOptionChange('globalRegion', 'Global North')}
          />
          Global North
        </label>
        <br></br>
        {selectedOptions.globalRegion === 'Global South' && <span> This is what Global South meansLorem ipsum dolor sit amet consectetur. Suspendisse molestie quam eu dictum varius. Proin dolor hac a tortor fusce ultricies nam aliquet. Mattis bibendum proin bibendum arcu turpis non posuere tempor. Platea maecenas a sed integer senectus nam nisl metus et. Purus lectus consectetur in sagittis integer tortor porta odio. Ornare sed lorem dolor sit maecenas sed in rutrum. Donec morbi vitae sed </span>}

        {selectedOptions.globalRegion === 'Global North' && <span> This is what Global North meansLorem ipsum dolor sit amet consectetur. Suspendisse molestie quam eu dictum varius. Proin dolor hac a tortor fusce ultricies nam aliquet. Mattis bibendum proin bibendum arcu turpis non posuere tempor. Platea maecenas a sed integer senectus nam nisl metus et. Purus lectus consectetur in sagittis integer tortor porta odio. Ornare sed lorem dolor sit maecenas sed in rutrum. Donec morbi vitae sed </span>}


        <h3>Select Political Orientation:</h3>
        <label>
          <input
            type="radio"
            value="Far Left"
            checked={selectedOptions.politicalOrientation === 'Far Left'}
            onChange={() => handleOptionChange('politicalOrientation', 'Far Left')}
          />
          Far Left
        </label>
        <label>
          <input
            type="radio"
            value="Left Leaning"
            checked={selectedOptions.politicalOrientation === 'Left Leaning'}
            onChange={() => handleOptionChange('politicalOrientation', 'Left Leaning')}
          />
          Left-leaning
        </label>

        <label>
          <input
            type="radio"
            value="Moderate"
            checked={selectedOptions.politicalOrientation === 'Moderate'}
            onChange={() => handleOptionChange('politicalOrientation', 'Moderate')}
          />
          Moderate
        </label>

        <label>
          <input
            type="radio"
            value="Right Leaning"
            checked={selectedOptions.politicalOrientation === 'Right Leaning'}
            onChange={() => handleOptionChange('politicalOrientation', 'Right Leaning')}
          />
          Right-leaning
        </label>

        <label>
          <input
            type="radio"
            value="Far Right"
            checked={selectedOptions.politicalOrientation === 'Far Right'}
            onChange={() => handleOptionChange('politicalOrientation', 'Far Right')}
          />
          Far Right
        </label>
        <br></br>
        {selectedOptions.politicalOrientation === 'Far Left' && <span> This is what far left meansLorem ipsum dolor sit amet consectetur. Suspendisse molestie quam eu dictum varius. Proin dolor hac a tortor fusce ultricies nam aliquet. Mattis bibendum proin bibendum arcu turpis non posuere tempor. Platea maecenas a sed integer senectus nam nisl metus et. Purus lectus consectetur in sagittis integer tortor porta odio. Ornare sed lorem dolor sit maecenas sed in rutrum. Donec morbi vitae sed </span>}
        {selectedOptions.politicalOrientation === 'Left Leaning' && <span> This is what left leaning meansLorem ipsum dolor sit amet consectetur. Suspendisse molestie quam eu dictum varius. Proin dolor hac a tortor fusce ultricies nam aliquet. Mattis bibendum proin bibendum arcu turpis non posuere tempor. Platea maecenas a sed integer senectus nam nisl metus et. Purus lectus consectetur in sagittis integer tortor porta odio. Ornare sed lorem dolor sit maecenas sed in rutrum. Donec morbi vitae sed </span>}
        {selectedOptions.politicalOrientation === 'Moderate' && <span> This is what moderate meansLorem ipsum dolor sit amet consectetur. Suspendisse molestie quam eu dictum varius. Proin dolor hac a tortor fusce ultricies nam aliquet. Mattis bibendum proin bibendum arcu turpis non posuere tempor. Platea maecenas a sed integer senectus nam nisl metus et. Purus lectus consectetur in sagittis integer tortor porta odio. Ornare sed lorem dolor sit maecenas sed in rutrum. Donec morbi vitae sed </span>}
        {selectedOptions.politicalOrientation === 'Right Leaning' && <span> This is what right leaning meansLorem ipsum dolor sit amet consectetur. Suspendisse molestie quam eu dictum varius. Proin dolor hac a tortor fusce ultricies nam aliquet. Mattis bibendum proin bibendum arcu turpis non posuere tempor. Platea maecenas a sed integer senectus nam nisl metus et. Purus lectus consectetur in sagittis integer tortor porta odio. Ornare sed lorem dolor sit maecenas sed in rutrum. Donec morbi vitae sed </span>}
        {selectedOptions.politicalOrientation === 'Far Right' && <span> This is what far right meansLorem ipsum dolor sit amet consectetur. Suspendisse molestie quam eu dictum varius. Proin dolor hac a tortor fusce ultricies nam aliquet. Mattis bibendum proin bibendum arcu turpis non posuere tempor. Platea maecenas a sed integer senectus nam nisl metus et. Purus lectus consectetur in sagittis integer tortor porta odio. Ornare sed lorem dolor sit maecenas sed in rutrum. Donec morbi vitae sed </span>}

        </>
        ) : (
        <>
          <h3>Choose Support:</h3>
          <label>
            <input
              type="radio"
              value="Supportive"
              checked={selectedOptions.support === 'Supportive'}
              onChange={() => handleOptionChange('support', 'Supportive')}
            />
            Supportive
          </label>

          <label>
            <input
              type="radio"
              value="Undermining"
              checked={selectedOptions.support === 'Undermining'}
              onChange={() => handleOptionChange('support', 'Undermining')}
            />
            Undermining
          </label>
          <br></br>
          {selectedOptions.support === 'Supportive' && <span> This is what Supportive meansLorem ipsum dolor sit amet consectetur. Suspendisse molestie quam eu dictum varius. Proin dolor hac a tortor fusce ultricies nam aliquet. Mattis bibendum proin bibendum arcu turpis non posuere tempor. Platea maecenas a sed integer senectus nam nisl metus et. Purus lectus consectetur in sagittis integer tortor porta odio. Ornare sed lorem dolor sit maecenas sed in rutrum. Donec morbi vitae sed </span>}
          {selectedOptions.support === 'Undermining' && <span> This is what Undermining meansLorem ipsum dolor sit amet consectetur. Suspendisse molestie quam eu dictum varius. Proin dolor hac a tortor fusce ultricies nam aliquet. Mattis bibendum proin bibendum arcu turpis non posuere tempor. Platea maecenas a sed integer senectus nam nisl metus et. Purus lectus consectetur in sagittis integer tortor porta odio. Ornare sed lorem dolor sit maecenas sed in rutrum. Donec morbi vitae sed </span>}

        </>
      )}
      <br></br>
     <button onClick={handlePrev}>Back</button>
    <button onClick={handleNext}>Next</button>
      
    </div>
  );
};

export default StepTwo;

