//import logo from './logo.svg';
import './App.css';
import './style.css';
import './bootstrap.css';
import { useState, useEffect } from 'react';
//import image1 from './imgs/mexico.jpeg'
//import image2 from './imgs/japan.jpeg'
//import image3 from './imgs/usa.jpeg'
import LinearApp from './components/LinearApp';

// import fetch from "node-fetch";


const App = () => {

  const [message, setMessage] = useState('') // this is the input string being sent to chatGPT API
  const [displayedMessage, setDisplayedMessage] = useState('')

  const [selectedImage, setSelectedImage] = useState(''); //selected image means related text
  const [image, setImage] = useState('');
  let result = false;
  const [perspective, setPerspective] = useState(null);

  const handleImageSelect = (imagetext, image) => {
    // This function will be passed down to Parent
    // and then to Child
    setSelectedImage(imagetext);
    setImage(image);
    console.log(`image received is: ${image}`)
    console.log(`image text received is: ${imagetext}`)
  };
  const options = {
    method: "POST",
    body: JSON.stringify({
      message: message
    }),
    headers:{ 
      "Content-Type": "application/json"
    }
  }
  const handleFormSubmit = (result) => {
    // This function will be passed down to Parent
    // and then to Child
    console.log(`we are back in app.js with the perspective as ${result.support}, ${result.politicalOrientation}, ${result.globalRegion}`)
    if (result.support !== '')
    {
      console.log(`rewriting from ${result.support} view`)
      setPerspective(result.support)
      setMessage(`Rewrite this text from a ${result.support} perspective and keep it within 200 words under all circumstances: ${selectedImage}`)
    }
    else if (result.politicalOrientation !== '')
    {
      console.log(`rewriting from ${result.politicalOrientation} and ${result.globalRegion} view`)
      setPerspective(result.politicalOrientation + "and" + result.globalRegion)
      setMessage(`Rewrite this text from a ${result.politicalOrientation} and ${result.globalRegion} perspective and keep in within 200 words under all circumstances: ${selectedImage}`)

    }
  }
  
  const inputHandler = async () => {
    try{
      console.log(`prompt added is: ${message}`)
      const response = await fetch('http://localhost:8000/completions', options)
      const data = await response.json()
      setDisplayedMessage(data.choices[0].message.content)
      result = true;
      //console.log(data.choices[0].message)
      //console.log(data['message']) // this only prints the resulting message that is received form the backend
      
    }catch(error){
      console.error(error)
    }
  }
  
  useEffect(()=> {
    if(perspective && message !== '' && (result.politicalOrientation || result.globalRegion || result.support !== '')){
      setDisplayedMessage("I am the result you have been searching for")
      //inputHandler(); //uncomment this when fetch is working and to make requests to backend
    }
  }, [perspective, message, result]) //remove this later if necessary
  
  
  return (
    <div className="App">
      <LinearApp onImageSelect={handleImageSelect} onFormSubmit={handleFormSubmit} displayedMessage={displayedMessage} selectedImage={selectedImage} image={image}/>
      
      {/* <div>
      <p>{displayedMessage}</p>
      </div> */}
    </div>
  );
}
export default App;