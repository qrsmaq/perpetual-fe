import React from "react";

import Footer from "../Footer/Footer";
import Card from "../BaseComponents/Card";
import Calendar from "../Calendar/Calendar";
import Tasks from "../Tasks/Tasks";

import mock from "./mock-content";

import {
  BellFill,
  EnvelopeFill,
  ThreeDotsVertical,
} from "react-bootstrap-icons";

const Content = () => {
  return (
    <>
      {/* Content Wrapper */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          {/* Topbar */}
          <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            {/* Topbar Search */}
            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-light border-0 small"
                  placeholder="Search for..."
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="fas fa-search fa-sm"></i>
                  </button>
                </div>
              </div>
            </form>

            {/* Topbar Navbar */}
            <ul className="navbar-nav ml-auto">
              {/* Nav Item - Search Dropdown (Visible Only XS) */}
              <li className="nav-item dropdown no-arrow d-sm-none">
                <button
                  className="nav-link dropdown-toggle"
                  id="searchDropdown"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-search fa-fw"></i>
                </button>
                {/* Dropdown - Messages */}
                <div
                  className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                  aria-labelledby="searchDropdown"
                >
                  <form className="form-inline mr-auto w-100 navbar-search">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control bg-light border-0 small"
                        placeholder="Search for..."
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                          <i className="fas fa-search fa-sm"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </li>

              {/* Nav Item - Alerts */}
              <li className="nav-item dropdown no-arrow mx-1">
                <button
                  className="nav-link dropdown-toggle"
                  id="alertsDropdown"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <BellFill />
                  {/* Counter - Alerts */}
                  <span className="badge badge-danger badge-counter">3+</span>
                </button>
                {/* Dropdown - Alerts */}
                <div
                  className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="alertsDropdown"
                >
                  <h6 className="dropdown-header">Alerts Center</h6>
                  <button className="dropdown-item d-flex align-items-center">
                    <div className="mr-3">
                      <div className="icon-circle bg-primary">
                        <i className="fas fa-file-alt text-white"></i>
                      </div>
                    </div>
                    <div>
                      <div className="small text-gray-500">
                        December 12, 2019
                      </div>
                      <span className="font-weight-bold">
                        A new monthly report is ready to download!
                      </span>
                    </div>
                  </button>
                  <button className="dropdown-item d-flex align-items-center">
                    <div className="mr-3">
                      <div className="icon-circle bg-success">
                        <i className="fas fa-donate text-white"></i>
                      </div>
                    </div>
                    <div>
                      <div className="small text-gray-500">
                        December 7, 2019
                      </div>
                      $290.29 has been deposited into your account!
                    </div>
                  </button>
                  <button className="dropdown-item d-flex align-items-center">
                    <div className="mr-3">
                      <div className="icon-circle bg-warning">
                        <i className="fas fa-exclamation-triangle text-white"></i>
                      </div>
                    </div>
                    <div>
                      <div className="small text-gray-500">
                        December 2, 2019
                      </div>
                      Spending Alert: We've noticed unusually high spending for
                      your account.
                    </div>
                  </button>
                  <button className="dropdown-item text-center small text-gray-500">
                    Show All Alerts
                  </button>
                </div>
              </li>

              {/* Nav Item - Messages */}
              <li className="nav-item dropdown no-arrow mx-1">
                <button
                  className="nav-link dropdown-toggle"
                  id="messagesDropdown"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <EnvelopeFill />
                  {/* Counter - Messages */}
                  <span className="badge badge-danger badge-counter">7</span>
                </button>
                {/* Dropdown - Messages */}
                <div
                  className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="messagesDropdown"
                >
                  <h6 className="dropdown-header">Message Center</h6>
                  <button className="dropdown-item d-flex align-items-center">
                    <div className="dropdown-list-image mr-3">
                      <img
                        className="rounded-circle"
                        src="img/undraw_profile_1.svg"
                        alt="..."
                      />
                      <div className="status-indicator bg-success"></div>
                    </div>
                    <div className="font-weight-bold">
                      <div className="text-truncate">
                        Hi there! I am wondering if you can help me with a
                        problem I've been having.
                      </div>
                      <div className="small text-gray-500">
                        Emily Fowler · 58m
                      </div>
                    </div>
                  </button>
                  <button className="dropdown-item d-flex align-items-center">
                    <div className="dropdown-list-image mr-3">
                      <img
                        className="rounded-circle"
                        src="img/undraw_profile_2.svg"
                        alt="..."
                      />
                      <div className="status-indicator"></div>
                    </div>
                    <div>
                      <div className="text-truncate">
                        I have the photos that you ordered last month, how would
                        you like them sent to you?
                      </div>
                      <div className="small text-gray-500">Jae Chun · 1d</div>
                    </div>
                  </button>
                  <button className="dropdown-item d-flex align-items-center">
                    <div className="dropdown-list-image mr-3">
                      <img
                        className="rounded-circle"
                        src="img/undraw_profile_3.svg"
                        alt="..."
                      />
                      <div className="status-indicator bg-warning"></div>
                    </div>
                    <div>
                      <div className="text-truncate">
                        Last month's report looks great, I am very happy with
                        the progress so far, keep up the good work!
                      </div>
                      <div className="small text-gray-500">
                        Morgan Alvarez · 2d
                      </div>
                    </div>
                  </button>
                  <button className="dropdown-item d-flex align-items-center">
                    <div className="dropdown-list-image mr-3">
                      <img
                        className="rounded-circle"
                        src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                        alt="..."
                      />
                      <div className="status-indicator bg-success"></div>
                    </div>
                    <div>
                      <div className="text-truncate">
                        Am I a good boy? The reason I ask is because someone
                        told me that people say this to all dogs, even if they
                        aren't good...
                      </div>
                      <div className="small text-gray-500">
                        Chicken the Dog · 2w
                      </div>
                    </div>
                  </button>
                  <button className="dropdown-item text-center small text-gray-500">
                    Read More Messages
                  </button>
                </div>
              </li>

              <div className="topbar-divider d-none d-sm-block"></div>

              {/* Nav Item - User Information */}
              <li className="nav-item dropdown no-arrow">
                <button
                  className="nav-link dropdown-toggle"
                  id="userDropdown"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                    Douglas McGee
                  </span>
                  <img
                    className="img-profile rounded-circle"
                    src="https://i.pravatar.cc/300"
                    alt="A smiling Douglas McGee"
                  />
                </button>
                {/* Dropdown - User Information */}
                <div
                  className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="userDropdown"
                >
                  <button className="dropdown-item">
                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                    Profile
                  </button>
                  <button className="dropdown-item">
                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                    Settings
                  </button>
                  <button className="dropdown-item">
                    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                    Activity Log
                  </button>
                  <div className="dropdown-divider"></div>
                  <button
                    className="dropdown-item"
                    href="#"
                    data-toggle="modal"
                    data-target="#logoutModal"
                  >
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    Logout
                  </button>
                </div>
              </li>
            </ul>
          </nav>
          {/* End of Topbar */}

          {/* Begin Page Content */}
          <div className="container-fluid">
            {/* Page Heading */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
              <button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                {/* ADD ICON HERE */}
                Generate Report
              </button>
            </div>

            {/* Header Cards */}
            <div className="row justify-content-between">
              {mock.cards.map((info) =>
                Card(
                  info.title,
                  info.sideColor,
                  info.plantCount,
                  info.faIcon,
                  info.cardKey
                )
              )}
            </div>

            {/* Content Row */}
            <div className="row">
              {/* Area Chart */}
              <div className="col-xl-8 col-lg-7">
                <div className="card shadow mb-4">
                  {/* Card Header - Dropdown */}
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Calendar
                    </h6>
                    <div className="dropdown no-arrow">
                      <button
                        className="dropdown-toggle"
                        id="dropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <ThreeDotsVertical />
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <div className="dropdown-header">Dropdown Header:</div>
                        <button className="dropdown-item">Action</button>
                        <button className="dropdown-item">
                          Another action
                        </button>
                        <div className="dropdown-divider"></div>
                        <button className="dropdown-item">
                          Something else here
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Card Body */}
                  <div className="card-body calendar-card-wrapper">
                    <div className="calendar-area">
                      <Calendar id="calendar" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-5">
                <div className="card shadow mb-4">
                  {/* Card Header - Dropdown */}
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">Tasks</h6>
                    <div className="dropdown no-arrow">
                      <button
                        className="dropdown-toggle"
                        id="dropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <ThreeDotsVertical />
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <div className="dropdown-header">Dropdown Header:</div>
                        <button className="dropdown-item">Action</button>
                        <button className="dropdown-item">
                          Another action
                        </button>
                        <div className="dropdown-divider"></div>
                        <button className="dropdown-item">
                          Something else here
                        </button>
                      </div>
                    </div>
                  </div>

                  <Tasks />
                </div>
              </div>
            </div>
            {/* Content Row */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* End of Main Content */}
        <Footer />
      </div>
    </>
  );
};

export default Content;
