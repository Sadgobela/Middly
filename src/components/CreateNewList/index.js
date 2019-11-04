import React from 'react'
import './index.scss'
import plus from './../../assets/plus.png'

const CreateNewList = () => {
  return (
    <a className="CreateNewList" href="#0">
      <img src={plus} alt="" />
      Create new list
    </a>
  )
}

export default CreateNewList
