import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold fs-4" href="#">
            The collection
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contacts
                </a>
              </li>
            </ul>
            <div className="buttons">
              <a className="btn btn-outline-dark">Login</a>
              <a className="btn btn-outline-dark ms-2">
                <i className=" me-1">Register</i>
              </a>
              <a className="btn btn-outline-dark ms-2">
                <i className=" me-1">Cart (0)</i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
