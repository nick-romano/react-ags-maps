import React from 'react';
import { LayerList, Map, Directions, Home, Zoom, BasemapLayerList, Legend } from 'react-ags-maps';
import TestFeatureLayer from './TestFeatureLayer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{width: "100vw", height: "100vh"}}>
        <Map id="booboo" viewProps={{popup: {defaultPopupTemplateEnabled: true}}} >
          <LayerList expander={true} expanderDefaultOpen={true} />
          <Zoom />
          <Home />
          <Legend />
          <Directions expander={true} routeServiceUrl="dsadsa" viewModel={{routeParameters: {directionsLengthUnits: "miles"}, routeServiceUrl: 'dsadsa'}} />
          <BasemapLayerList expander={true} />
          <TestFeatureLayer />
        </Map>
      </div>
    </div>
  );
}

export default App;
