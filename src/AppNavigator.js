import React,{Component} from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Team from './Screens/TeamScreen'; 
import Home from './Screens/HomeScreen'; 
import Work from './Screens/WorkScreen'; 
import About from './Screens/AboutScreen'; 
import Contact from './Screens/ContactScreen'; 
 
import NavigationBar from './Components/NavigationBar';
//import './Styles/App.css';

class AppNavigator extends Component  {
    render (){
      return(
        <Router>
            <div>
                <NavigationBar/>
                {/*<div className="App-header">
                    <h5 className="App-link"><Link className="App-link" to="/">Home</Link></h5>
                    <h5 className="App-link"><Link className="App-link" to="/team">Our team</Link></h5>
                    <h5 className="App-link"><Link className="App-link" to="/about">About us</Link></h5>
                    <h5 className="App-link"><Link className="App-link" to="/work">Our work</Link></h5>
                    <h5 className="App-link"><Link className="App-link" to="/Contact">Contact us</Link></h5>
                </div>*/}

                <Route exact path="/" component={Home} />
                <Route exact path="/About" component={About} />
                <Route exact path="/team" component={Team} />
                <Route exact path="/work" component={Work} />
                <Route exact path="/Contact" component={Contact} />
            </div>
        </Router>
      );
    }
}

export default AppNavigator;