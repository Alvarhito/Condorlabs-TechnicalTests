import React,{Component} from 'react';
import '../Styles/App.css';

//Token associated with instagram account
const token='1821160367.1677ed0.1fef08ca4eda4420b9a78cba01a04a57';

class Team extends Component  {
    static navigationOptions = { 
        title: 'Home',
    };
    constructor(props) {
      super(props);
      this.state = {
        //'data' is to save json information got of API
        data: undefined,
      };
      
      //This fuction is to obtain the information of API and it is async
      this.getData();
    }

    getData = () =>{
      var thisAux=this;
      async function getData() {
        try {
          let response = await fetch(`https://api.instagram.com/v1/users/self/media/recent?access_token=${token}`);
          let responseJson = await response.json();
          //when I get the information i change the state of the 'data' variable
          thisAux.setState({data:responseJson});
          console.log(thisAux.state.data);
        } catch (error) {
          console.log(error);
        }
      }
      getData();
    }

    //When you get the information, this function will render the account images one by one
    renderImages = () => this.state.data.data.map(this.renderImage);

    renderImage = (item) =>{
      return(
          <a key={item.id} className="App-containerImage" href={item.link} >
              <img alt="img" className="is-rounded App-image" src={item.images.low_resolution.url}/>
          </a>
        )
    }
    render (){
      return(
        <div className="App-body">
          <h1 className="title is-1 color" >Our Team</h1>
          <h2 className="subtitle">Our team always at your service</h2>
          
          <div className="App-imageList">
            {this.state.data===undefined?<div className="button is-loading"></div>:this.renderImages()}
          </div>
          
        </div>
      );
    }
}

export default Team;