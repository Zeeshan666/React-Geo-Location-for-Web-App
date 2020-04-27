import React from 'react';
import logo from './logo.svg';
import './App.css';
import { usePosition } from 'use-position';


function App() {
  const watch = true;
const {
  latitude,
  longitude,
  timestamp,
  accuracy,
  error,
} = usePosition(watch,{enableHighAccuracy: true});
  return (
    <div className="App">
      latitude: {latitude}<br/>
      longitude: {longitude}<br/>
      timestamp: {timestamp}<br/>
      accuracy: {accuracy && `${accuracy}m`}<br/>
      error: {error}
    </div>
  );
}

export default App;
