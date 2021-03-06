import React from 'react'

const Header = props => (
  <header style={{marginBottom: 10}}>
    <div>
      <span className="header"> {props.title} </span>
    </div>

    <div className="subheader-body">
      <span className="subheader"> Developed by <a className="link" href="https://github.com/emmre" target="_blank" >GitHub</a>. </span>
    </div>
  </header>
)

export default Header
