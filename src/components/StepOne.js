// StepOne.js, StepTwo.js, StepThree.js

import React from 'react';
import { useState} from 'react';
import image1 from '../imgs/un.jpg'
import image2 from '../imgs/russia.jpg'
import image3 from '../imgs/humane.jpg'
import image4 from '../imgs/michael.jpg'


// StepOne.js
const StepOne = ({ nextStep , onImageSelect}) => {
  
  const handleNext = () => {
    // Any logic for StepOne
    nextStep();
  };

  const [selectedImage, setSelectedImage] = useState('');

  const imageClickHandler = async (image) => {
    // You can add logic here to load the text related to the selected image
    // For simplicity, using placeholders
    
    //console.log('onImageSelect prop in Child:', onImageSelect);
    let storyText = '';
    switch (image) {
      case 'image1':
        storyText = `Adaptation finance needs are 10–18 times as great as current international public adaptation finance flows – at least 50 per cent higher than previously estimated. This is the main conclusion of a comprehensive assessment of the literature and new analyses to provide updated estimates of the costs and needs of adaptation in developing countries, as well as the international finance flows required to address these needs.

        In view of ever-increasing weather extremes such as a multi-year drought in East Africa, flooding in China and Europe, and extreme heat and wildfires in the United States of America and Canada, among others, narrowing the adaptation finance gap is of particular importance because of the high benefits that investments in adaptation can offer in terms of reducing climate risks and improving equity and climate justice. Left unchecked however, increasing climate risks will inevitably lead to more climate-related losses and damages. Therefore, the Adaptation Gap Report 2023 (AGR 2023) also focuses on loss and damage to support Parties in the negotiations to establish a loss and damage fund and funding arrangements for vulnerable developing countries.
        `
        break;
      case 'image2':
        storyText = `On 24 February 2022, Russia invaded Ukraine in an escalation of the Russo-Ukrainian War that started in 2014. The invasion was the largest attack on a European country since World War II. It is estimated to have caused tens of thousands of Ukrainian civilian casualties and hundreds of thousands of military casualties. By June 2022, Russian troops occupied about 20% of Ukrainian territory. About 8 million Ukrainians had been internally displaced and more than 8.2 million had fled the country by April 2023, creating Europe's largest refugee crisis since World War II. Extensive environmental damage caused by the war, widely described as an ecocide, contributed to food crises worldwide.`

        break;
      case 'image3':
        storyText = `Today, the wondering about Humane’s gadget is over. The company is opening up about its high-tech device designed to be fastened to a shirt or blouse—a fit that Humane hopes can become as accepted among people who aren’t sworn officers as sporting wireless earbuds or smartwatches.
        Humane’s device, called the Ai Pin, can take photos and send texts, uses a laser to project a visual interface onto a person’s palm, and comes with a virtual assistant that can be as sharp as ChatGPT. By always being ready to search the web and communicate, it is supposed to quash dependency on smartphones.
        It’s also too early to tell whether Humane’s hope that the Pin can help people to live more in the moment will prove true, or whether it will simply provide a new way to be unhealthily obsessed with technology.
        .`
        break;
        case 'image4':
        storyText = `Known as the “King of Pop,” Michael Jackson was a best-selling American singer, songwriter, and dancer. As a child, Jackson became the lead singer of his family’s popular Motown group, the Jackson 5. He went on to a solo career of astonishing worldwide success, delivering No. 1 hits from the albums Off the Wall, Thriller, and Bad. Thriller remains one of the best-selling albums in history. In his later years, Jackson was dogged by allegations of child molestation. The 13-time Grammy Award winner died in 2009 at age 50 of a drug overdose just before launching a comeback tour.
        `
        break;
        
      default:
        storyText = "No story available";
    }
    setSelectedImage(storyText);
    onImageSelect(storyText, image);
  }
  
  return (
    <div>
         
        <div className="container-fluid">
        <div className="row full-height">
            <div className="col-6 bg-green">
                <div>

                    <div className="thiccy-container">
                        <div className="row">
                            <div className="col-12 mt-5">
                                <h2 className="text-white mb-4">Pick an Event to Begin</h2>
                            </div>
                            <div className="col-6 mb-5">
                            <a onClick={()=>imageClickHandler('image1')}>
                                    <div class="card float-end w-75">
                                        <img src={image1} className="card-img-top"/>
                                        <div class="card-body bg-yellow">
                                            <p class="card-text">UN Climate Report</p>
                                        </div>
                                    </div>
                                </a>

                            </div>
                            <div className="col-6 mb-5">
                            <a onClick={()=>imageClickHandler('image2')}>
                                    <div class="card float-end w-75">
                                        <img src={image2} className="card-img-top"/>
                                        <div class="card-body bg-yellow">
                                            <p class="card-text">Russia-Ukraine Conflict</p>
                                        </div>
                                    </div>
                                </a>

                            </div>
                            <div className="col-6 mb-5">
                            <a onClick={()=>imageClickHandler('image3')}>
                                    <div class="card float-end w-75">
                                        <img src={image3} className="card-img-top"/>
                                        <div class="card-body bg-yellow">
                                            <p class="card-text">Humane AI Pin</p>
                                        </div>
                                    </div>
                                </a>

                            </div>
                            <div className="col-6 mb-5">
                            <a onClick={()=>imageClickHandler('image4')}>
                                    <div class="card float-end w-75">
                                        <img src={image4} className="card-img-top"/>
                                        <div class="card-body bg-yellow">
                                            <p class="card-text">Michael Jackson</p>
                                        </div>
                                    </div>
                                </a>

                            </div>
                        </div>
                    </div>


                </div>

            </div>
            <div className="col-6">
                <div className="thiccy-container">
                    <div className="row">
                        <div className="col-12 mt-5">
                            <h2 className="mb-4">Here's What Happened!</h2>
                        </div>
                        <div className="col-12">
                            <div className="gray-card">
                               {selectedImage}
                            </div>
                            <div className="float-end btn-group btn-lg dropend mt-3">
                                <button onClick={handleNext} type="button" className="btn btn-warning bg-yellow">
                                    Let's Begin
                                </button>
                                <button type="button"
                                    className="btn btn-success bg-green dropdown-toggle dropdown-toggle-split"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="visually-hidden">Next</span>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </div>
  );
};

export default StepOne;

