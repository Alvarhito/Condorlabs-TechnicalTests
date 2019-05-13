import React,{Component} from 'react';
import logo from '../Assets/logo.svg';
import '../Styles/App.css';

class About extends Component  {
    static navigationOptions = { 
        title: 'Home',
    };

    render (){
      return(
        <div className="App">
          <header className="App-body">
            <img src={logo} className="App-logo" alt="logo" />
            <p className="title" >About us</p>
          </header>
        </div>
      );
    }
}

export default About;