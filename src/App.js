import React from 'react';
import IsoMassing from './components/three/IsoMassing';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Building Planner - 3D Massing Preview</h1>
        <p>Interactive isometric massing visualization</p>
      </header>
      
      <main className="App-main">
        <div className="massing-container">
          <IsoMassing />
        </div>
        
        <div className="info-section">
          <h2>About this 3D Preview</h2>
          <p>
            This component demonstrates a simple isometric massing preview using 
            React Three Fiber. You can interact with the 3D view using:
          </p>
          <ul>
            <li>Left mouse button: Rotate the view</li>
            <li>Right mouse button: Pan the view</li>
            <li>Mouse wheel: Zoom in/out</li>
          </ul>
        </div>
      </main>
      
      <footer className="App-footer">
        <p>Building Planner © 2026</p>
      </footer>
    </div>
  );
}

export default App;
