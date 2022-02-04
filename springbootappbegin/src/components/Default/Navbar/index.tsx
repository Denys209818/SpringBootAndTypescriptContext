import React from "react";


const Navbar: React.FC = () => 
{
    return (<>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
  <a className="navbar-brand" href="#">SpringBootAndReact</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Головна сторінка</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/create">Додавання</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
    </>);
}

export default Navbar;