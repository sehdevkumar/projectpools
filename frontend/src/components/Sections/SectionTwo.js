import React from 'react'
import "./Section.css"
import Cards from './Cards/Cards'

function SectionTwo(props) {
    return (
      <>
        <section className='sectionTwo'>
            <h1>Start Development...</h1>
        </section>
        <div className="card-container2">
          <Cards
            cardTitle="HTML"
            cardSrc="https://i.pinimg.com/originals/a2/7d/14/a27d14a27b5ef7d35c241d5cc9c1deb4.png"
          />
          <Cards
            cardTitle="CSS"
            cardSrc="https://miro.medium.com/max/600/1*OFsc0SD55jhi8cjo7aCA4w.jpeg"
          />
        </div>
      </>
    );
}

export default SectionTwo
