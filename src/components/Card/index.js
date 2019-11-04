import React from 'react'
import './index.scss'
import Horizontal from './../../assets/icons/Horizontal.svg'

function Card() {
  return (
    <div className="Card">
      <header className="Card__header">
        <h3 className="Card__title">List Name</h3>
      </header>
      <div className="Card__foto">
        <img src="https://picsum.photos/249/208" alt="" />
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
        <button className="Card__more-button">
          <img src={Horizontal} alt="" />
        </button>
      </footer>
    </div>
  )
}

export default Card
