import React, { useState } from 'react';

const FishTestingForm = () => {
    const [formData, setFormData] = useState({
      mercuryLevel: '',
      histamineLevel: '',
      selectedBarcodes: '',
    
    });
  
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, 
          [name]: name === 'mercuryLevel' || name === 'histamineLevel'
          ? value === '' ? '' : parseFloat(value)
          : value,
      });
    };

    const validateForm = () => {
        let formErrors = {};
    
        
        // MercuryLevel
        if (!formData.mercuryLevel) {
            formErrors.mercuryLevel = 'Mercury Level is required';
        }else if (formData.mercuryLevel < 0){
            formErrors.mercuryLevel = 'Mercury Level should be decimal point';
        }else{
            formErrors.mercuryLevel = ''; 
        }

        // HistamineLevel
        if (!formData.histamineLevel) {
            formErrors.histamineLevel = 'Histamine Level is required';
        }else if (formData.histamineLevel < 0){
            formErrors.histamineLevel = '';
        }else{
            formErrors.histamineLevel = ''; 
        }

        // SelectedBarcodes
        if (!formData.selectedBarcodes) {
            formErrors.selectedBarcodes = 'Barcode is required';
        }else if (formData.selectedBarcodes.length < 8){
            formErrors.weselectedBarcodesght = 'Barcode must be at least 8 characters long (ex: FD123768)';
        }else{
            formErrors.selectedBarcodes = ''; 
        }

        return formErrors;
};

const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted successfully:', formData);
      setFormData({ mercuryLevel: '', histamineLevel: '', selectedBarcodes: '' }); 
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label className="form-label mb-2">MercuryLevel:</label>
            <input type="number" className="form-control" name="mercuryLevel" value={formData.mercuryLevel} onChange={handleChange} />
    
            {errors.mercuryLevel && <span style={{ color: 'red' }}>{errors.mercuryLevel}</span>}
        </div>

        <div className="mb-3">
            <label className="form-label mb-2">Histamine Level:</label>
            <input type="number" className="form-control" name="histamineLevel" value={formData.histamineLevel} onChange={handleChange}/>

            {errors.histamineLevel && <span style={{ color: 'red' }}>{errors.histamineLevel}</span>}
          </div>

        <div className="mb-3">
            <label className="form-label mb-2">Barcodes:</label>
            <input type="text" placeholder="Enter or scan barcode" className="form-control"  name="selectedBarcodes" value={formData.selectedBarcodes} onChange={handleChange}/>

            {errors.selectedBarcodes && <span style={{ color: 'red' }}>{errors.selectedBarcodes}</span>}
          </div>

          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button type="submit" className="btn btn-primary me-md-2">Save</button>
          </div>


    </form>
  );
};

export default FishTestingForm;
