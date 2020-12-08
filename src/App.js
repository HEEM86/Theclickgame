import React, { Component } from "react";
import FruitsCard from "./components/FruitsCard/FruitsCard";
import Wrapper from "./components/Wrapper/Wapper";
// import Title from "./components/Title/Title";
import fruits from "./fruits.json";

class App extends Component {
  // Setting this.state.fruits to the fruits json array
  state = {
    fruits: fruits,
    score: 0,
    leadScore: 0,
    maxScore: 12,
    // message: "Click on an image to begin"
  };

  // componentDidMount() {
  //   this.setState({ fruits: this.sortInfo(this.state.fruits) });
  // }

  // sortInfo = (fruits) => {
  //   let index = 11;
  //   let temporary;
  //   let random;
  //   while (index > 0) {
  //     random = Math.floor(Math.random() * (index + 1));
  //     temporary = fruits[index];
  //     fruits[index] = fruits[random];
  //     fruits[random] = temporary;
  //     index--;
  //   }
  //   return fruits;
  // };

  // handleClick = (id) => {
  //   console.log("clicked");
  //   // let fruits = this.state.fruits;
  //   // let fruitsClicked = fruits.filter(fruits => fruits.id === id);
  // };
  // Map over this.state.fruits and render a fruitCard component for each fruit object
  render() {
    console.log(this.state.fruits);
    return () => (
        <div>
          <header>
            <h1>
              The Fruit Click Game
            </h1>
            <h4>
              Try not to click the same image twice!
            </h4>

          </header>


   
        
      <Wrapper>
        {this.state.fruits.map((fruits) => {
          <FruitsCard
            key={fruits.id}
            id={fruits.id}
            name={fruits.name}
            image={fruits.image}
            clicked={fruits.clicked}
            OnClick={this.handleClick}
          />;
        })}
        
      </Wrapper>
      </div>
    );
  }
}

export default App;
