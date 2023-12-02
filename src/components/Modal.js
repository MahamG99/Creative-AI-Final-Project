import React, { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
    
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        {/* Add your content here */}
        <h2>More Information</h2>
        <p>
News can be manipulated to serve many interests. When creating your post you saw what can happen when we give the news a _ (left or right) tilt, to speak to the interests of _ (global north or south),  _ (and chose to sensationalize) events. 

It is up to us to be critical of what we consume, and to be responsible agents in the world. What we consume and share has real effects. Showing responsibility for what we consume has helped shape our futures to be more sustainable, healthier and accountable. Through our consumption we put pressure on businesses to do better. 
</p>
      </div>
    </div>
  );
};

export default Modal;
