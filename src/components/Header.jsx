import React from 'react'

const Header = () => {
  return (
    <div className='header' data-cy="header-background">
      <div className="container">
        <h2 className="header-title" data-cy="header-title">
          To Do List App
        </h2>
      </div>
    </div>
  )
}

export default Header