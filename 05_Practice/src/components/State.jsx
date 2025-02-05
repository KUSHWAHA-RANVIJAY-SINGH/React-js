import React, { useState } from 'react';

function State() {
  const [data, setData] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
        setData("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <p>Car Name is {data}</p>
      <div>
        <button onClick={() => setData("")}>Clear</button>
      </div>
    </div>
  );
}

export default State;
