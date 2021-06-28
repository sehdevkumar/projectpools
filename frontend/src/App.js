import React from 'react'
import './App.css'
import SectionOne from './components/Sections/SectionOne'
import SectionThree from './components/Sections/SectionThree'
import SectionTwo from './components/Sections/SectionTwo'

function App() {
  return (
    <>
      <div className="Section-Container">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>
    </>
  );
}

export default App
