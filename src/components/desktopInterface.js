import React, { useState } from 'react';



const DesktopFishTesting = () => {
  const [mercuryLevel, setMercuryLevel] = useState('');
  const [histamineLevel, setHistamineLevel] = useState('');
  const [selectedBarcodes, setSelectedBarcodes] = useState([]);

  const handleBarcodeSelect = (barcode) => {
    setSelectedBarcodes([...selectedBarcodes, barcode]);
  };

  const handleBulkUpdate = () => {
    console.log({ selectedBarcodes, mercuryLevel, histamineLevel });
  };


  return (

    <div className="row mb-4 mx-4" style={{ marginTop: '200px' }}>
      <div className="col-md-6 p-4 d-flex align-items-center">
        <h1 className="my-8 display-3 fw-bold px-5">
              Fish Processing System <br />
              <span className="text-primary">for your business</span>
        </h1>
      </div>
      <div className="col-md-6 py-5" style={{ paddingLeft: '120px', paddingRight: '120px' }}>
        <div className="mt-3 bg-light shadow rounded p-5">
          <h2 className="text-center fw-bold text-primary-emphasis">Fish Testing</h2>
          <form>
          <div className="mb-3">
            <label className="form-label mb-2">Mercury Level:</label>
            <input type="number" className="form-control" value={mercuryLevel} onChange={(e) => setMercuryLevel(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label mb-2">Histamine Level:</label>
            <input type="number" className="form-control" value={histamineLevel} onChange={(e) => setHistamineLevel(e.target.value)}/>
          </div>

          <div className="mb-3">
            <label className="form-label mb-2">Barcodes:</label>
            <input type="text" placeholder="Enter or scan barcode" className="form-control"  onChange={(e) => handleBarcodeSelect(e.target.value)}/>
          </div>

      
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button type="submit" className="btn btn-primary me-md-2" onClick={handleBulkUpdate}>Save</button>
          </div>

          </form>   
        </div>
      </div>
    </div>
   
  );
};

export default DesktopFishTesting;
