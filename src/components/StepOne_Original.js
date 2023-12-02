// StepOne.js, StepTwo.js, StepThree.js

import React from 'react';
import { useState} from 'react';
import image1 from '../imgs/mexico.jpeg'
import image2 from '../imgs/japan.jpeg'
import image3 from '../imgs/usa.jpeg'

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
    console.log('onImageSelect prop in Child:', onImageSelect);
    let storyText = '';
    switch (image) {
      case 'image1':
        storyText = `**Headline: "Mexico City's Enchanted Bookstore Elicits Wonder: Mysterious Event Captivates Visitors"**
        "El Rincón de los Libros," a storied bookstore, mesmerized onlookers with an ethereal glow and whispers of incantations. Lucia, an intrigued visitor, stumbled upon a luminous, cryptic tome, unleashing a surge of mystical energy. Lights flickered, objects levitated, and a dazzling burst of radiance illuminated the night sky. Swiftly, the enchantment faded, leaving the bookstore in quietude. Speculations abound—some dismiss it as a hoax, others muse on hidden enchantments. The event piqued curiosity, drawing crowds to ponder the bookstore's mystical allure, hinting at a world beyond ordinary comprehension within Mexico City's ancient walls.`
        break;
      case 'image2':
        storyText = `**Headline: "Kyoto's Ancient Shrine Shrouded in Mystery: Breathtaking Display Astounds Spectators"**

        Kyoto's revered shrine became a spectacle as an eerie glow and mysterious chants echoed through its grounds. Witness Haruki uncovered an enigmatic artifact, triggering a surge of mystical energy. Lights danced, enchanting the onlookers, but the mystical aura swiftly dissipated, leaving the shrine in a haunting stillness. The incident ignited debates, sparking curiosity among visitors drawn to the shrine's mystical allure. Speculations range from supernatural forces to elaborate illusions, yet the shrine remains an enigmatic testament to Kyoto's mystical heritage, prompting contemplation about hidden dimensions within its ancient confines.`

        break;
      case 'image3':
        storyText = `**Headline: "New York City's Mysterious Light Show Sparks Intrigue: Unexplained Event Baffles Onlookers"**

        In a perplexing turn of events, Manhattan witnessed an enigmatic display as vibrant lights illuminated the skyline. Spectators marveled at the sudden luminous show, accompanied by peculiar shapes dancing across the sky. Rumors swirled—ranging from extraterrestrial encounters to clandestine experiments—as witnesses struggled to explain the inexplicable phenomenon. Abruptly, the lights vanished, leaving experts and citizens baffled and engrossed in fervent speculation. This unexplained occurrence ignited curiosity and debates, prompting New Yorkers to ponder the mysteries that might lie hidden within their city's vibrant expanse.`
        break;
      default:
        storyText = "No story available";
    }
    setSelectedImage(storyText);
    onImageSelect(storyText);
  }
  
  return (
    <div>
        <h1>Welcome!</h1>
      <h1>Choose an Image:</h1>
      <div>
        <img
          src={image1}
          alt=""
          onClick={() => imageClickHandler('image1')}
        />
        <img
          src={image2}
          alt=""
          onClick={() => imageClickHandler('image2')}
        />
        <img
          src={image3}
          alt=""
          onClick={() => imageClickHandler('image3')}
        />
      </div>
      {selectedImage && <p>{selectedImage}</p>}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default StepOne;

