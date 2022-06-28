import {useEffect} from 'react'
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';

function App() {

  useEffect(() => {
 let sections = document.querySelectorAll('section');
 let links = document.querySelectorAll('.nav_item_link');
 window.addEventListener('scroll',() => {
    let currentSectionId = '';
    sections.forEach(section => {
        const fromTopToTopSection = section.offsetTop;
        const yScroll = window.scrollY;
        const clientHeight = document.documentElement.clientHeight;
        
        if(yScroll >= fromTopToTopSection - clientHeight/3){
            currentSectionId = section.getAttribute('id');
            
        }

        
    });

    links.forEach(a => {
        a.classList.remove('active');
        if(a.classList.contains(currentSectionId)){
            a.classList.add('active');
        }
    })
    
 });
  },[])
  return (
    <>
      <Nav /> 
      <Header />
      <Section1 />
      <Section2 />
      <Section3 /> 
      <Section4 /> 
      <Section5 />
      <Footer /> 
    </>
  );
}

export default App;
