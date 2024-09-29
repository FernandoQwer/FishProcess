import React, { useState } from 'react';

const FishTrackForm = () => {
  const [formData, setFormData] = useState({
    fishType: '',
    fishSize: '',
    fishGrade: '',
    weight: '',
    damageWeight: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, 
        [name]: name === 'weight' || name === 'damageWeight'
        ? value === '' ? '' : parseFloat(value)
        : value,
    });
  };

  const validateForm = () => {
    let formErrors = {};

    // Fish Type
    if (!formData.fishType) {
        formErrors.fishType = 'Fish Type is required'
    }else{
        formErrors.fishType = ''; 
    }

    // Fish Size
    if (!formData.fishSize) {
        formErrors.fishSize = 'Fish Size is required'
    }else{
        formErrors.fishSize = '';
    }

    // Fish Grade
    if (!formData.fishGrade) {
        formErrors.fishGrade = 'Fish Grade is required'
    }else{
        formErrors.fishGrade = '';
    }

    // Weight
    if (!formData.weight) {
        formErrors.weight = 'Weight is required';
    }else if (formData.weight <= 0){
        formErrors.weight = 'Weight must be higher than 0';
    }else{
        formErrors.weight = ''; 
    }

    // Damage Weight
    if (!formData.damageWeight) {
        formErrors.damageWeight = 'Damage weight is required';
    }else if (formData.damageWeight < 0){
        formErrors.damageWeight = 'Damage weight can only start from 0';
    }else{
        formErrors.damageWeight = '';
    }

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted successfully:', formData);
      setFormData({ fishType: '', fishSize: '', fishGrade: '', weight: '', damageWeight:'' }); 
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className='form-label mb-2'>Fish Type:</label>
          <select className="form-select" name="fishType" value={formData.fishType} onChange={handleChange}>
            <option value="">Select Fish Type</option>
            <option value="Tuna">Tuna</option>
            <option value="Salmon">Salmon</option>
          </select>
          {errors.fishType && <span style={{ color: 'red' }}>{errors.fishType}</span>}
        </div>

        <div className="mb-3">
          <label className="form-label mb-2">Fish Size:</label>
          <select className="form-select" name="fishSize" value={formData.fishSize} onChange={handleChange}>
            <option value="">Select Fish Size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
          {errors.fishType && <span style={{ color: 'red' }}>{errors.fishSize}</span>}
        </div>

        <div className="mb-3">
          <label className="form-label mb-2">Fish Grade:</label>
          <select className="form-select" name="fishGrade" value={formData.fishGrade} onChange={handleChange}>
            <option value="">Select Fish Grade</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
          {errors.fishGrade && <span style={{ color: 'red'}}>{errors.fishGrade}</span>}
        </div>

        <div className="mb-3">
            <label className="form-label mb-2">Weight:</label>
            <input type="number" className="form-control" name="weight" value={formData.weight} onChange={handleChange} />
    
            {errors.weight && <span style={{ color: 'red' }}>{errors.weight}</span>}
        </div>

        <div className="mb-3">
          <label className="form-label mb-2">Damage Weight:</label>
          <input type="number" className="form-control" name="damageWeight" value={formData.damageWeight} onChange={handleChange} />

          {errors.damageWeight && <span style={{ color: 'red' }}>{errors.damageWeight}</span>}
        </div>

        <div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </div>
    </form>
  );
};

export default FishTrackForm;
