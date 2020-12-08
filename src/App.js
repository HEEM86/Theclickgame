import React, {Component} from "react";
import './App.css';
import Score from "./component/Score";
import Wrapper from "./component/Wrapper";
import fruits from "./fruits.json";




class App extends Component {

  state = {
    fruits: fruits,
    clickedImgId: [],
    score: 0,
    goal: 12,
    status: ""
  };

  render() {

    return (
      <div className="App">
        <header className="App-header"/>
          <h1>
            Fruit Game
          </h1>
          </div>

    )
    }

}
export default App;
