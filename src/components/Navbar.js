import React from 'react';

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${props.darkMode}`}>
        <div className="container-fluid">
          <a
            className={`navbar-brand text-${props.darkMode === 'dark' ? 'white' : 'dark'}`}
            href="https://text-utill-react.onrender.com"
            // Make sure to sanitize external URLs
          >
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={`nav-link active text-${props.darkMode === 'dark' ? 'white' : 'dark'}`}
                  aria-current="page"
                  href="/"
                  // Ensure any dynamic data in the href is properly sanitized
                >
                  Home
                </a>
              </li>
              {/* ... Other nav items */}
              <li className="nav-item">
                <a
                  className={`nav-link disabled  text-${props.darkMode === 'dark' ? 'white' : 'dark'}`}
                  aria-disabled="true"
                  href="/"
                  // Ensure any dynamic data in the href is properly sanitized
                >
                  {props.quot}
                </a>
              </li>
            </ul>
          </div>

          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              onClick={props.toggleMode}
              className="btn btn-success"
            >
              Dark Mode
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.defaultProps = {
  quot: '---------->',
};
