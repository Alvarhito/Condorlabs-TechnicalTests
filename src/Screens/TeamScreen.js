import React,{Component} from 'react';
import '../Styles/App.css';

const token='1821160367.1677ed0.1fef08ca4eda4420b9a78cba01a04a57';

class Team extends Component  {
    static navigationOptions = { 
        title: 'Home',
    };
    constructor(props) {
      super(props);
      this.state = {
        data: undefined,
      };
  
      this.getData();
    }

    getData = () =>{
      var thisAux=this;
      async function getData() {
        try {
          let response = await fetch(`https://api.instagram.com/v1/users/self/media/recent?access_token=${token}`);
          let responseJson = await response.json();
          thisAux.setState({data:responseJson});
          console.log(thisAux.state.data);
        } catch (error) {
          console.log(error);
        }
      }
      getData();
    }

    renderImages = () => this.state.data.data.map(this.renderImage);

    renderImage = (item) =>{
      return(
          <a key={item.id} className="App-containerImage" href={item.link} >
              <img alt="img" class="App-image" src={item.images.thumbnail.url}/>
          </a>
        )
    }
    render (){
      return(
        <div className="App-body">
          <h1 class="title is-1 color" >Our Team</h1>
          <h2 class="subtitle">Our team always at your service</h2>
          
          <div className="App-imageList">
            {this.state.data===undefined?<div></div>:this.renderImages()}
            {this.state.data===undefined?<div></div>:this.renderImages()}
          </div>
        </div>
      );
    }
}

export default Team;