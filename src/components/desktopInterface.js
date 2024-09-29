import React from 'react';
import FishTestingForm from './FishTestingForm';
import './desktopInterface.css';

function DesktopInterface() {
  return (

    <div className="row mb-4 mx-4 contentRowDI">
      <div className="col-md-6 p-4 d-flex align-items-center">
        <h1 className="my-8 display-3 fw-bold px-5">
              Fish Processing System <br />
              <span className="text-primary">for your business</span>
        </h1>
      </div>
      <div className="col-md-6 py-5 coloumnID">
        <div className="mt-3 bg-light shadow rounded p-5">
          <h2 className="text-center fw-bold text-primary-emphasis">Fish Testing</h2>
          
          <FishTestingForm />
        </div>
      </div>
    </div>
   
  );
}

export default DesktopInterface;



 
