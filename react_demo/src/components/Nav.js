import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const Nav = (props) => {
  return (
    <div>
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <a class="navbar-brand" href="/">
          <NavLink to="/" exact>
            Home
          </NavLink>
        </a>

        <div class="collapse navbar-collapse" id="navbarsExample02">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <NavLink activeClassName="selected" to="/about">
                <li>About</li>
              </NavLink>
            </li>
          </ul>
          <form class="form-inline my-2 my-md-0">
            <input class="form-control" type="text" placeholder="Search" />
          </form>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(Nav);
