import React, {Component} from "react";
import './App.css';
import Score from "./component/Score";
import Wrapper from "./component/Wrapper";
import fruits from "./fruits.json";
import FruitsCard from "./component/FruitsCard/FruitsCard"




// class App extends Component {

//   state = {
//     fruits: fruits,
//     clickedImgId: [],
//     score: 0,
//     goal: 12,
//     status: ""
//   };

//   shuffleCard = id => {
//     let clickedImgId = this.state.clickedImgId;

//     if(clickedImgId.includes(id)) {
//       this.setState({ clickedImgId: [], score: 0, status: "Game Over!"});
//       return;

//     }else{
//       clickedImgId.push(id);

//       if(clickedImgId.length === 12 ){
//         this.setState({ score: 12, status: "Congratulations! You got it", clickedImgId:[]});
//         return;
//       }
//       this.setState({fruits, clickedImgId, score: clickedImgId.length, status: " "});

//       for(let i=fruits.length -1; i >0; i--) {
//         let x = Math.floor(Math.random() * (i+1));
//         [fruits[i], fruits[x] = fruits[x], fruits[i]];
//       }
      
//     }
//   }

class App extends Component {
  // Setting this.state.fruits to the fruits json array
  state = {
    fruits: fruits,
    score: 0,
    leadScore: 0,
    maxScore: 12,
    // message: "Click on an image to begin"
  };

  componentDidMount() {
    this.setState({ fruits: this.sortInfo(this.state.fruits) });
  }

  sortInfo = (fruits) => {
    let index = 11;
    let temporary;
    let random;
    while (index > 0) {
      random = Math.floor(Math.random() * (index + 1));
      temporary = fruits[index];
      fruits[index] = fruits[random];
      fruits[random] = temporary;
      index--;
    }
    return fruits;
  };


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Fruit Game
          </h1>
          <p>
            Try not to hit the image twice!
          </p>
        </header>
        <Score
          total={this.state.score}
          goal={12}
          status={this.state.status}
        />
        <Wrapper>
          {this.state.fruits.map((fruit) => (
              
              <FruitsCard
              key={fruit.id}
              id={fruit.id}
              name={fruit.name}
              image={fruit.image}
              clicked={fruit.clicked}
              />

          ))}
        </Wrapper>

      </div>
    );
  }
}

export default App;