import React from 'react'

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
     <a className="navbar-brand" href="/">Navbar</a>
     <a className="navbar-brand" href="/read">Read</a>
     <a className="navbar-brand" href="/create">Create</a>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
        </div></div> </nav>
    </div>
  )
}

export default Header
