import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Web Streaming</h1>
        <video controls>
          <source src="http://localhost:3000/stream" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </header>
    </div>
  );
}

export default App;
