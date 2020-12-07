import React, { Component } from "react";
import FruitsCard from "./components/FruitsCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import fruits from "./fruits.json";

class App extends Component {
  // Setting this.state.fruits to the fruits json array
    state = {

      isGuessCorrect: true,
      fruits: fruits,
      score: 0,
      maxScore: 12,
      message: "Click on an image to begin"

    
  }

  componentDidMount(){
    
  }
  saveHandleClick = id => {
    console.log("clicked")
    // let fruits = this.state.fruits;
    // let fruitsClicked = fruits.filter(fruits => fruits.id === id);
  }
  // Map over this.state.fruits and render a fruitCard component for each fruit object
  render() {
    console.log(this.state.fruits[0])
    return () =>  (
      <Wrapper>
        <Title>Fruits List</Title>
        {this.state.fruits.map(fruits => {
         
          <FruitsCard
          key={fruits.id}
          id={fruits.id}
          name={fruits.name}
          image={fruits.image}
          clicked={fruits.clicked}
          OnClick={this.saveHandleClick}
          />
        })
      }
      </Wrapper>
    );
  }
}

export default App;
