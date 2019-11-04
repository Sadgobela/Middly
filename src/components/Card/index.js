import React from 'react'
import './index.scss'
import Horizontal from './../../assets/icons/Horizontal.svg'

function Card() {
  return (
    <div className="Card">
      <header className="Card__header">
        <h3 className="Card__title">List Name</h3>
      </header>
      <div className="Card__images">
        <div className="left-col">
          <img src="https://picsum.photos/172/208" alt="" />
        </div>
        <div className="right-col">
          <img src="https://picsum.photos/130/100" alt="" />
          <img src="https://picsum.photos/130/100" alt="" />
        </div>
      </div>
      <footer className="Card__footer">
        <span className="Card__metrics">
          <span>
            <strong>701</strong> Saved
          </span>
          <span>
            <strong>890</strong> Purchsed
          </span>
        </span>
        <a className="Card__more-button" href="#0">
          <img src={Horizontal} alt="" />
        </a>
      </footer>
    </div>
  )
}

export default Card
