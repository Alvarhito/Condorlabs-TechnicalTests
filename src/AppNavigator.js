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
        //This work as a general navigator
        //Here, we call el nav bar component and we configure the screen of each button of navBar.
      return(
        <Router>
            <div>
                <NavigationBar/>
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