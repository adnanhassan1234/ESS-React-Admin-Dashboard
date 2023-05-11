import { Link } from "react-router-dom";
import "./sidebar.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function SideBar() {
  const navigate = useNavigate();

  // const [mobileScreen, setMobileScreen] = useState(false);
  const mobileScreen = useSelector((state) => state.dashboard.mobileView);

  const removeToken = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
    window.location.reload();
  };



  return (
    <>
      {mobileScreen ? (
        <div classNameName="header-container">
          <nav className="navbar navbar-dark navbar-theme-primary px-4 col-12 d-lg-none">
            <Link className="navbar-brand me-lg-5" to={{ pathname: "/" }}>
              <img
                className="navbar-brand-dark"
                src="assets/img/light.svg"
                alt="Rich logo"
              />
              <img
                className="navbar-brand-light"
                src="assets/img/dark.svg"
                alt="Rich logo"
              />
            </Link>
            <div className="d-flex align-items-center">
              <button
                className="navbar-toggler d-lg-none collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#sidebarMenu"
                aria-controls="sidebarMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </nav>

          <nav
            id="sidebarMenu"
            className="sidebar d-lg-block bg-gray-800 text-white collapse"
            data-simplebar
          >
            <div className="sidebar-inner px-4 pt-3">
              <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
                <div className="d-flex align-items-center">
                  <div className="avatar-lg me-4">
                    <img
                      src="assets/img/profile-picture-3.jpg"
                      className="card-img-top rounded-circle border-white"
                      alt="Bonnie Green"
                    />
                  </div>
                  <div className="d-block" onClick={removeToken}>
                    <a
                      href="#"
                      className="btn btn-secondary btn-sm d-inline-flex align-items-center"
                    >
                      <svg
                        className="icon icon-xxs me-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        ></path>
                      </svg>
                      Sign Out
                    </a>
                  </div>
                </div>

                <div className="collapse-close d-md-none">
                  <a
                    href="#sidebarMenu"
                    data-bs-toggle="collapse"
                    data-bs-target="#sidebarMenu"
                    aria-controls="sidebarMenu"
                    aria-expanded="true"
                    aria-label="Toggle navigation"
                  >
                    <svg
                      className="icon icon-xs"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <ul className="nav flex-column pt-3 pt-md-0">
                <li className="nav-item">
                  <Link
                    to={{ pathname: "/" }}
                    className=" d-flex align-items-center"
                  >
                    <span className="sidebar-icon">
                      <img
                        src="assets/img/light.svg"
                        height="20"
                        width="20"
                        alt="Rich Logo"
                      />
                    </span>
                    <span className="mt-1 ms-1 sidebar-text spur">Spur</span>
                  </Link>
                </li>
                <li className="nav-item  mt-4">
                  <Link className="nav-link" to={{ pathname: "/" }}>
                    <span className="sidebar-icon">
                      <i className="fa fa-home" aria-hidden="true"></i>
                    </span>
                    <span className="sidebar-text">Dashboard</span>
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to={{ pathname: "/product" }}>
                    <span className="sidebar-icon">
                      <i
                        className="fa fa-shopping-basket"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <span className="sidebar-text">Products</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link collapsed d-flex justify-content-between align-items-center"
                    data-bs-toggle="collapse"
                    data-bs-target="#submenu-app"
                  >
                    <span>
                      <span className="sidebar-icon">
                        <i class="fa fa-bar-chart" aria-hidden="true"></i>
                      </span>
                      <span className="sidebar-text">Charts</span>
                    </span>
                    <span className="link-arrow">
                      <svg
                        className="icon icon-sm"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </span>
                  <div
                    className="multi-level collapse"
                    role="list"
                    id="submenu-app"
                    aria-expanded="false"
                  >
                    <ul className="flex-column nav">
                      <li className="nav-item">
                        <Link className="nav-link" to={{ pathname: "/chart" }}>
                          <span className="sidebar-text">Charts.Js</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item">
                  <span
                    className="nav-link collapsed d-flex justify-content-between align-items-center"
                    data-bs-toggle="collapse"
                    data-bs-target="#submenu-pages2"
                  >
                    <span>
                      <span className="sidebar-icon">
                        <i className="fa fa-list-alt" aria-hidden="true"></i>
                      </span>
                      <span className="sidebar-text">Components</span>
                    </span>
                    <span className="link-arrow">
                      <svg
                        className="icon icon-sm"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </span>
                  <div
                    className="multi-level collapse"
                    role="list"
                    id="submenu-pages2"
                    aria-expanded="false"
                  >
                    <ul className="flex-column nav">
                      <li className="nav-item">
                        <Link className="nav-link" to={{ pathname: "/card" }}>
                          <span className="sidebar-text">Cards</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to={{ pathname: "/form" }}>
                          <span className="sidebar-text">Forms</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to={{ pathname: "/tables" }}>
                          <span className="sidebar-text">Tables</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to={{ pathname: "/states" }}>
                          <span className="sidebar-text">States</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link collapsed d-flex justify-content-between align-items-center"
                    data-bs-toggle="collapse"
                    data-bs-target="#submenu-pages"
                  >
                    <span>
                      <span className="sidebar-icon">
                        <i className="fa fa-file" aria-hidden="true"></i>
                      </span>
                      <span className="sidebar-text">Layouts</span>
                    </span>
                    <span className="link-arrow">
                      <svg
                        className="icon icon-sm"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </span>
                  <div
                    className="multi-level collapse"
                    role="list"
                    id="submenu-pages"
                    aria-expanded="false"
                  >
                    <ul className="flex-column nav">
                      <li className="nav-item">
                        <Link className="nav-link" to={{ pathname: "/sign in" }}>
                          <span className="sidebar-text">Sign In</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={{ pathname: "/sign-up" }}
                        >
                          <span className="sidebar-text">Sign Up</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={{ pathname: "/forgotpassword" }}
                        >
                          <span className="sidebar-text">Forgot password</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={{ pathname: "/resetpassword" }}
                        >
                          <span className="sidebar-text">Reset password</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <li className="nav-item">
                    <span
                      className="nav-link collapsed d-flex justify-content-between align-items-center"
                      data-bs-toggle="collapse"
                      data-bs-target="#submenu-pages1"
                    >
                      <span>
                        <span className="sidebar-icon">
                          <i
                            className="fa fa-question-circle"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <span className="sidebar-text">About</span>
                      </span>
                      <span className="link-arrow">
                        <svg
                          className="icon icon-sm"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                    <div
                      className="multi-level collapse"
                      role="list"
                      id="submenu-pages1"
                      aria-expanded="false"
                    >
                      <ul className="flex-column nav">
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="https://github.com/adnanhassan1234"
                            target="_blank"
                          >
                            <span className="sidebar-text">Github</span>
                          </a>
                          <a
                            className="nav-link"
                            href="https://github.com/adnanhassan1234"
                            target="_blank"
                          >
                            <span className="sidebar-text">Hake Theme</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <Link
                      className="nav-link mt-3"
                      to={{ pathname: "/settings" }}
                    >
                      <span className="sidebar-icon ">
                        <i className="fa fa-cog" aria-hidden="true"></i>
                      </span>
                      <span className="sidebar-text">Settings</span>
                    </Link>
                  </li>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      ) : (
        <div classNameName="header-container">
          <nav className="navbar navbar-dark navbar-theme-primary px-4 col-12 d-lg-none">
            <Link className="navbar-brand me-lg-5" to={{ pathname: "/" }}>
              <img
                className="navbar-brand-dark"
                src="assets/img/light.svg"
                alt="Rich logo"
              />
              <img
                className="navbar-brand-light"
                src="assets/img/dark.svg"
                alt="Rich logo"
              />
            </Link>
            <div className="d-flex align-items-center">
              <button
                className="navbar-toggler d-lg-none collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#sidebarMenu"
                aria-controls="sidebarMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </nav>

          <nav
            id="sidebarMenu"
            className="sidebar d-lg-block bg-gray-800 text-white collapse"
            data-simplebar
            style={{ maxWidth: "100px" }}
          >
            <div className="sidebar-inner px-4 pt-3">
              <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
                <div className="d-flex align-items-center">
                  <div className="avatar-lg me-4">
                    <img
                      src="assets/img/profile-picture-3.jpg"
                      className="card-img-top rounded-circle border-white"
                      alt="Bonnie Green"
                    />
                  </div>
                </div>

                {/* bar icon */}
                <div className="collapse-close d-md-none">
                  <a
                    href="#sidebarMenu"
                    data-bs-toggle="collapse"
                    data-bs-target="#sidebarMenu"
                    aria-controls="sidebarMenu"
                    aria-expanded="true"
                    aria-label="Toggle navigation"
                  >
                    <svg
                      className="icon icon-xs"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <ul className="nav flex-column pt-3 pt-md-0">
                <li className="nav-item">
                  <Link
                    to={{ pathname: "/" }}
                    className=" d-flex align-items-center"
                  >
                    <span className="sidebar-icon">
                      <img
                        src="assets/img/light.svg"
                        height="20"
                        width="20"
                        alt="Rich Logo"
                       style={{marginLeft:'11px'}}
                      />
                    </span>
                  </Link>
                </li>
                <li className="nav-item  mt-4" title="Dashboard">
                  <Link className="nav-link" to={{ pathname: "/" }}>
                    <span className="sidebar-icon">
                      <i className="fa fa-home" aria-hidden="true"></i>
                    </span>
                  </Link>
                </li>
                <li className="nav-item " title="product">
                  <Link className="nav-link" to={{ pathname: "/product" }}>
                    <span className="sidebar-icon">
                      <i
                        className="fa fa-shopping-basket"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </Link>
                </li>
                <li className="nav-item " title="charts">
                  <Link className="nav-link" to={{ pathname: "/chart" }}>
                    <span className="sidebar-icon">
                      <i class="fa fa-bar-chart" aria-hidden="true"></i>
                    </span>
                  </Link>
                </li>
                <li className="nav-item " title="states">
                  <Link className="nav-link" to={{ pathname: "/states" }}>
                    <span className="sidebar-icon">
                      <i class="fa fa-id-card-o" aria-hidden="true"></i>
                    </span>
                  </Link>
                </li>
                <li className="nav-item " title="tables">
                  <Link className="nav-link" to={{ pathname: "/tables" }}>
                    <span className="sidebar-icon">
                      <i class="fa fa-table" aria-hidden="true"></i>
                    </span>
                  </Link>
                </li>
                <li className="nav-item" title="Setting">
                  <Link className="nav-link" to={{ pathname: "/settings" }}>
                    <span className="sidebar-icon ">
                      <i className="fa fa-cog" aria-hidden="true"></i>
                    </span>
                  </Link>
                </li>
                <li className="nav-item " title="Sign In">
                  <Link className="nav-link" to={{ pathname: "/sign in" }}>
                    <span className="sidebar-icon">
                      <i class="fa fa-sign-in" aria-hidden="true"></i>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

export default SideBar;
