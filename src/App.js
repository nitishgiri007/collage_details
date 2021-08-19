import React,{useState} from 'react';
import Dropdown from './component/Dropdown';
import Hero from './component/Hero';
import InfoSection from './component/InfoSection';
import Navbar from './component/Navbar';
import { InfoData } from './data/InfoData';
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalStyle';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero slides={SliderData} />
      <InfoSection {...InfoData}/>
    </>
  );
}

export default App;