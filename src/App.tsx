import React from 'react';
import logo from './logo.svg';
import HeaderPanel from "./components/HeaderPanel";
import SidePanel from "./components/SidePanel";
import MapPanel from "./components/MapPanel";
import FooterPanel from "./components/FooterPanel";
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderPanel></HeaderPanel>
      <SidePanel></SidePanel>
      <MapPanel></MapPanel>
      <FooterPanel></FooterPanel>
    </div>
  );
}

export default App;
