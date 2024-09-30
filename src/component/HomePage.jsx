import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = () => {
    navigate(`/room/${input}`); // Correct string interpolation
  };

  return (
    <div>
      <div>
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          type="text" 
          placeholder='Enter the room ID...'
        />
        <button onClick={submitHandler}>Join</button> {/* Fixed "button" typo */}
      </div>
    </div>
  );
};

export default HomePage;
