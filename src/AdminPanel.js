import Dashboard from './Dashboard';
import {Link,Route,Switch} from 'react-router-dom';
import MenuUpdation from './MenuUpdation';
import AddCategory from './AddCategory';
import AddItem from './AddItem';
import Error from './Error';
import {BrowserRouter as Router} from 'react-router-dom';
import {useEffect,useState} from 'react';
import Edit_item from './Edit_item';

import React from 'react'
import Login from './Login';

function AdminPanel(props) {

  const admin = JSON.parse(localStorage.getItem("user_name"));

  const [login, setlogin] = useState("");

  console.log(props.history);

  useEffect(() => {
    var locallog = localStorage.getItem("login")?JSON.parse(localStorage.getItem("login")):{login:false};
    console.log(locallog.login);
    setlogin(localStorage.getItem("login"));
    if(!locallog.login){
      props.history.push('/login')
    }
  }, [login])
    return (
       <Router>
    <div className="App">
    <div id="wrapper">
    {/* Sidebar */}
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      {/* Sidebar - Brand */}
      <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/dashboard">
        <div>
          <img src="img\feasta.jpeg" width={47} height={47} />
        </div>
        <div className="sidebar-brand-text mx-3">FEASTA</div>
      </Link>
      {/* Divider */}
      <hr className="sidebar-divider my-0" />
      {/* Nav Item - Dashboard */}
      <li className="nav-item active">
        <Link to='/dashboard' className="nav-link" >
          <i className="fas fa-fw fa-tachometer-alt" />
          <span>Dashboard</span></Link>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider" />
      {/* Heading */}
      <div className="sidebar-heading">
        Interface
      </div>
     
  
      <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
          {/*<i class="fas fa-fw fa-wrench"></i>*/}
          <span>Menu</span>
        </a>
        <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Utilities:</h6>
            <Link className="collapse-item" to="/menu_updation">Menu Updation</Link>
            <Link to="/error" className="collapse-item">Special Offer</Link>
            <Link to="/error" className="collapse-item">Special Item</Link>
          </div>
        </div>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider" />
      {/* Heading */}
      <div className="sidebar-heading">
        Addons
      </div>
      {/* Nav Item - Pages Collapse Menu */}
      <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
          <i className="fas fa-fw fa-folder" />
          <span>Pages</span>
        </a>
        <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <a className="collapse-item" href="404.html">404 Page</a>
            <a className="collapse-item" href="blank.html">Blank Page</a>
          </div>
        </div>
      </li>
      {/* Nav Item - Charts */}
      <li className="nav-item">
        <a className="nav-link" href="charts.html">
          <i className="fas fa-fw fa-chart-area" />
          <span>Charts</span></a>
      </li>
      {/* Nav Item - Tables */}
      <li className="nav-item">
        <a className="nav-link" href="tables.html">
          <i className="fas fa-fw fa-table" />
          <span>Tables</span></a>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider d-none d-md-block" />
      {/* Sidebar Toggler (Sidebar) */}
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" />
      </div>
    </ul>
    {/* End of Sidebar */}
    {/* Content Wrapper */}
    <div id="content-wrapper" className="d-flex flex-column">
      {/* Main Content */}
      <div id="content">
        {/* Topbar */}
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          {/* Sidebar Toggle (Topbar) */}
          <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
            <i className="fa fa-bars" />
          </button>
          {/* Topbar Search */}
          <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div className="input-group">
              <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  <i className="fas fa-search fa-sm" />
                </button>
              </div>
            </div>
          </form>
          {/* Topbar Navbar */}
          <ul className="navbar-nav ml-auto">
            {/* Nav Item - Search Dropdown (Visible Only XS) */}
            <li className="nav-item dropdown no-arrow d-sm-none">
              <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-search fa-fw" />
              </a>
              {/* Dropdown - Messages */}
              <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                <form className="form-inline mr-auto w-100 navbar-search">
                  <div className="input-group">
                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="button">
                        <i className="fas fa-search fa-sm" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>
            {/* Nav Item - Alerts */}
            
            {/* Nav Item - Messages */}
           
              {/* Dropdown - Messages */}
            {/* Nav Item - User Information */}
            <li className="nav-item dropdown no-arrow">
              <a  className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">FEASTA welcomes you, <span style={{color:'Orange',fontWeight:"700",fontSize:'14px'}}>{" "+ admin.user_name}</span></span>
                <img className="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60" />
              </a>
              {/* Dropdown - User Information */}
              <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <a className="dropdown-item" href="#">
                  <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                  Profile
                </a>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                  Settings
                </a>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                  Activity Log
                </a>
                <div className="dropdown-divider" />
                <button className="dropdown-item"  data-toggle="modal" data-target="#logoutModal" onClick={()=>{localStorage.setItem("login",JSON.stringify({login:false}));props.history.push('/login')} }>
                  <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                  Logout
                </button>
              </div>
            </li>
          </ul>
        </nav>
        {/* End of Topbar */}
        {/* Begin Page Content */}
        <div className="container-fluid">
        
         <Switch>
          <Route path="/error" component={Error}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/menu_updation" component={MenuUpdation}></Route>
          <Route path="/add_category" component={AddCategory}></Route>
          <Route path="/add_item" component={AddItem}></Route>
          <Route path="/edit_item" component={Edit_item}></Route>
         </Switch>
        
          {/* Footer */}
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright © FEASTA 2020</span>
              </div>
            </div>
          </footer>
          {/* End of Footer */}
        </div>
        {/* End of Content Wrapper */}
      </div>
    </div></div>
    </div>
    </Router>
    )
}

export default AdminPanel
