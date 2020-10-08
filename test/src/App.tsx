import React from 'react';
import { LayerList, Map, Directions, Home, Zoom } from 'react-ags-maps';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{width: "100vw", height: "100vh"}}>
        <Map id="booboo">
          <LayerList />
          <Zoom />
          <Home />
          <Directions expander={true} routeServiceUrl="dsadsa" />
        </Map>
      </div>
    </div>
  );
}

export default App;
