import React from 'react';

const OnScreenNumberPad = ({ handleInput }) => {
  const handleButtonClick = (value) => {
    handleInput(value);
  };

  const handleClear = () => {
    handleInput("");
  };

  const handleBackspace = () => {
    handleInput((prevValue) => prevValue.slice(0, -1));
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="row">
            {[1, 2, 3].map((num) => (
              <div key={num} className="col-4 mb-2">
                <button
                  className="btn btn-primary w-100"
                  onClick={() => handleButtonClick(num.toString())}
                >
                  {num}
                </button>
              </div>
            ))}
          </div>
          <div className="row">
            {[4, 5, 6].map((num) => (
              <div key={num} className="col-4 mb-2">
                <button
                  className="btn btn-primary w-100"
                  onClick={() => handleButtonClick(num.toString())}
                >
                  {num}
                </button>
              </div>
            ))}
          </div>
          <div className="row">
            {[7, 8, 9].map((num) => (
              <div key={num} className="col-4 mb-2">
                <button
                  className="btn btn-primary w-100"
                  onClick={() => handleButtonClick(num.toString())}
                >
                  {num}
                </button>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-4 mb-2">
              <button className="btn btn-danger w-100" onClick={handleClear}>
                Clear
              </button>
            </div>
            <div className="col-4 mb-2">
              <button
                className="btn btn-primary w-100"
                onClick={() => handleButtonClick("0")}
              >
                0
              </button>
            </div>
            <div className="col-4 mb-2">
              <button className="btn btn-warning w-100" onClick={handleBackspace}>
                ⌫
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnScreenNumberPad;
