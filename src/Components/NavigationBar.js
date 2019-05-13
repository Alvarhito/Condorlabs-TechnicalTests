import React,{Component} from 'react';
import '../Styles/App.css';

class NavigationBar extends Component  {
    render (){
    //This componet is only to show the navigation bar on the page
      return(
        <nav className="navbar is-warning is-fixed-top " role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://reactjs.org/">
                    <img alt="img" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" width="112" height="28"/>
                </a>
                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="principalBarMenu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>

            </div>

            <div id="principalBarMenu" className="navbar-menu">
                <div className="navbar-end">
                    <a className="navbar-item"  href="/">
                        Home 
                    </a>

                    <a className="navbar-item" href="/team">
                        Our team
                    </a>

                    <a className="navbar-item" href="/work">
                        Our work
                    </a>

                    <a className="navbar-item" href="/about">
                        About us
                    </a>

                    <a className="navbar-item" href="/contact">
                        Contact us
                    </a>
                </div>
            </div>
        </nav>
      );
    }
}

export default NavigationBar;