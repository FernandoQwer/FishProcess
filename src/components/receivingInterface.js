import React from 'react';
import FishTrackForm from './FishTrackForm';
// import OnScreenNumberPad from './OnScreenNumberPad';



function ReceivingInterface() {

  return (
    
    <div className="container mt-5 bg-light shadow bg-body-tertiary rounded p-5">
      <h1 className="mb-4 text-center fw-bold text-primary-emphasis">Fish Track</h1>

      <FishTrackForm />

      {/* <OnScreenNumberPad /> */}
    </div>
  );

  
}



export default ReceivingInterface;
