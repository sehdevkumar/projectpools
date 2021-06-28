import React,{useRef} from 'react'
import './Section.css'
import Cards from './Cards/Cards'
import Authcontainer from '../Subcomponents/Authcontainer'


function SectionOne() {

   const slide = useRef()

   const activeHandler = ()=>{
       slide.current.classList.toggle("active")
   }


    return (
      <>
        <section className="sectionOne">
          <div className="burger" onClick={activeHandler}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
            <h1>Projects...</h1>
          </div>
        </section>
        {/* Cards */}

        <div ref={slide} className="Slide-Menu-Bar">
               <Authcontainer/>
        </div>

        <div className="card-container">
          <Cards
            cardTitle="MERN"
            cardSrc="https://www.offshoreitstaffing.com/blog/wp-content/uploads/2021/04/Blog-Article-MERN-Stack.jpeg"
          />
          <Cards
            cardTitle="JavaScript"
            cardSrc="https://www.ocpsoft.org/wp-content/uploads/2013/01/javascript_logo_unofficial.png"
          />
        </div>




      </>
    );
}

export default SectionOne
