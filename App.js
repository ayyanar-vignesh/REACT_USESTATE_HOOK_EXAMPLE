import React, { useState } from 'react';
import './App.css';

import Monday from './Monday.js';
import Sunday from './Sunday.js';
import Section from './Section.js';
import Tuesday from './Tuesday.js';

function App() {
  // State to hold the movie name input by the user
  const [movieName, setMovieName] = useState('');

  // Function to handle form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // You can add more logic here if needed
  // };

  // Function to handle the input change
  const handleInputChange = (e) => {
    setMovieName(e.target.value);
  };

  // Conditional rendering based on the movie name input
  let componentToRender;
  if (movieName === "GOAT") {

    componentToRender = <Sunday />;
  } else if (movieName === "KANGUVA") {
    componentToRender = <Tuesday />;
  } else if (movieName === "VETTAYAN") {
    componentToRender = <Monday />;
  } else {
    componentToRender = <Section />;
  }

  return (
    <div className="App">
      <form >
        <label>
          Enter Movie Name:
          <input type="text" value={movieName} onChange={handleInputChange} />

        </label>


    
        {/* <button type="submit">Submit</button> */}
      </form>

      {/* Render the component based on the movie name */}
      {componentToRender}
    </div>
  );
}

export default App;



