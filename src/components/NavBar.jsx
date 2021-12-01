import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="http://aprende.colombiaaprende.edu.co/sites/default/files/naspublic/orig_image/mision_tic_2022.png"
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-bottom"
          />
          <span className="mx-2">Primer Ejemplo</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Inicio
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/contador">
                Contador
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
