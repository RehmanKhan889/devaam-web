import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import logo_ct from "../assets/images/dawaam/logo-ct.png";
import enabled from "../assets/images/dawaam/Dasboard enabled.png";
import machines from "../assets/images/dawaam/Machines enabled.png";
import locations from "../assets/images/dawaam/Locations enabled.png";
import routes from "../routes/index";
import SideBarItems from "./SideBarItems";

function Sidebar({ showToggle }) {
  const [active, setActive] = useState("Dashboard");
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <aside className="left-sidebar" data-sidebarbg="skin6">
        <div className="scroll-sidebar">
          <nav className="sidebar-nav">
            <header className="topbar" data-navbarbg="skin6">
              <nav className="navbar top-navbar navbar-expand-md navbar-light">
                <div className="navbar-header" data-logobg="skin6">
                  <a className="navbar-brand" href="/">
                    <b className="logo-icon d-block d-md-block">
                      <img src={logo_ct} alt="homepage" className="dark-logo" />
                    </b>
                  </a>
                  <a
                    className="nav-toggler waves-effect waves-light d-block d-md-none"
                    // href='javascript:void(0)'
                    onClick={() => showToggle()}
                  >
                    <i className="fas fa-bars fa-1x"></i>
                  </a>
                </div>
              </nav>
            </header>
            <ul id="sidebarnav">
              {routes.map((route, i) => {
                if (route.isMenu == false) {
                  return null;
                }
                if (route.isAdmin == true && user?.role != "admin") {
                  return null;
                }

                switch (route.layout) {
                  case "main":
                    return (
                      <SideBarItems key={i}
                        route={route}
                        active={active}
                        setActive={setActive}
                      />
                    );
                }
              })}
              {/* <li className='sidebar-item'>
								<b></b>
								<b></b>
								<a
									className='sidebar-link waves-effect waves-dark sidebar-link'
									href='/'
									aria-expanded='false'
								>
									<i className='mdi'>
										<img
											src={enabled}
											// src='../assets/images/dawaam/Dasboard enabled.png'
											alt=''
										/>
									</i>
									<span className='hide-menu'>Dashboard</span>
								</a>
							</li>
							<div id='second'>
								<li className='sidebar-item'>
									<b></b>
									<b></b>
									<a
										className='sidebar-link waves-effect waves-dark sidebar-link'
										href='/machines'
										aria-expanded='false'
									>
										<i className='mdi'>
											<img
												src={machines}
												// src='../assets/images/dawaam/Machines enabled.png'
												alt=''
											/>
										</i>
										<span className='hide-menu'>
											Machines
										</span>
									</a>
								</li>
							</div>
							<li className='sidebar-item'>
								<b></b>
								<b></b>
								<a
									className='sidebar-link waves-effect waves-dark sidebar-link'
									href='/locations'
									aria-expanded='false'
								>
									<i className='mdi'>
										<img
											src={locations}
											// src='../assets/images/dawaam/Locations enabled.png'
											alt=''
										/>
									</i>
									<span className='hide-menu'>Locations</span>
								</a>
							</li>
							<li className='sidebar-item'>
								<b></b>
								<b></b>
								<a
									className='sidebar-link waves-effect waves-dark sidebar-link'
									href='/stock_inventory'
									aria-expanded='false'
								>
									<i class='fas fa-smile'></i>

									<span className='hide-menu'>
										Stock & Inventory
									</span>
								</a>
							</li>
							<li className='sidebar-item'>
								<b></b>
								<b></b>
								<a
									className='sidebar-link waves-effect waves-dark sidebar-link'
									href='/sales_usage'
									aria-expanded='false'
								>
									<i class='fas fa-file'></i>
									<span className='hide-menu'>
										Sales & Usage
									</span>
								</a>
							</li>
							<li className='sidebar-item'>
								<b></b>
								<b></b>
								<a
									className='sidebar-link waves-effect waves-dark sidebar-link'
									href='/finance_billing'
									aria-expanded='false'
								>
									<i class='fas fa-file'></i>
									<span className='hide-menu'>
										Finance & Billing
									</span>
								</a>
							</li> */}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
