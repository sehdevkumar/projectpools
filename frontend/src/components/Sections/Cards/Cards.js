import React from 'react'

function Cards(props) {
    return (
      <>
        <div
          className="card"
          
        >
          <div className="card-header">{props.cardTitle}</div>
          <div className="card-body">
            <div
              className="card-text"
              style={{
               
               
              }}
            >
              <img src={props.cardSrc}
              style={{width:'100%'}}
              alt="" />
            </div>
          </div>
        </div>
      </>
    );
}

export default Cards
