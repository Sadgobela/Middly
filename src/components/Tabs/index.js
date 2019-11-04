import React from 'react'
import './index.scss'

const Tabs = () => {
  return (
    <div className="Tabs">
      <a href="#0" className="Tabs__tab">
        Posts
      </a>
      <a href="#0" className="Tabs__tab Tabs__tab--active">
        Lists
      </a>
      <a href="#0" className="Tabs__tab">
        Activity
      </a>
    </div>
  )
}

export default Tabs
