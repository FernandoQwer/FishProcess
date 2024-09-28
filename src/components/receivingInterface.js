import React, { useState } from 'react';


function ReceivingInterface() {
  const [fishType, setFishType] = useState('');
  const [fishSize, setFishSize] = useState('');
  const [fishGrade, setFishGrade] = useState('');
  const [weight, setWeight] = useState('');
  const [damageWeight, setDamageWeight] = useState('');

  return (
    
    <div className="container mt-5 bg-light shadow bg-body-tertiary rounded p-5">
      <h1 className="mb-4 text-center fw-bold text-primary-emphasis">Fish Track</h1>
      <form> 
        <div className="mb-3">
          <label className='form-label mb-2'>Fish Type:</label>
          <select className="form-select" value={fishType} onChange={(e) => setFishType(e.target.value)}>
            <option value="">Select Fish Type</option>
            <option value="Tuna">Tuna</option>
            <option value="Salmon">Salmon</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label mb-2">Fish Size:</label>
          <select className="form-select" value={fishSize} onChange={(e) => setFishSize(e.target.value)}>
            <option value="">Select Fish Size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label mb-2">Fish Grade:</label>
          <select className="form-select" value={fishGrade} onChange={(e) => setFishGrade(e.target.value)}>
            <option value="">Select Fish Grade</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label mb-2">Weight:</label>
          <input type="number" className="form-control" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label mb-2">Damage Weight:</label>
          <input type="number" className="form-control" value={damageWeight} onChange={(e) => setDamageWeight(e.target.value)} />
        </div>

        <div className="mb-3">
        <label className="form-label mb-2">Barcode</label>
        <input type="text" className="form-control mb-4" placeholder="Enter or scan barcode" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>

    
  );

  
}



export default ReceivingInterface;
