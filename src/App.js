import React, { Component } from "react";
import "./App.css";
import Score from "./component/Score";
import Wrapper from "./component/Wrapper";
import fruits from "./fruits.json";
import FruitsCard from "./component/FruitsCard/FruitsCard";

class App extends Component {
  state = {
    fruits: fruits,
    score: 0,
    leadScore: 0,
    maxScore: 12,
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

  // clicked = (id) => {
  //   console.log("clicked");
  //   let fruits = this.state.fruits;
  //   let fruitsClicked = fruits.filter(fruits => fruits.id === id);

  fruitsClicked = (id) => {
    console.log(fruits);
    const fruitsClicked = this.state.fruits.find((fruits) => fruits.id === id);
    const shuffleFruits = (fruits) => {
      const copy = fruits.concat();
      return copy.sort(() => Math.random() - 0.5);
    };
    const resetClick = (list) => {
      window.location.reload(false);
      console.log("reset");
      list.map((current) => ({
        ...current,
        clicked: false,
      }));
    };

    if (fruitsClicked.clicked === true) {
      resetClick(fruits);
      this.setState({
        score: 0,
      });
      return;
    } else {
      var Apple = this.state.fruits.map((Scan) => {
        console.log(Scan);
        if (Scan.id === id) {
          return {
            ...Scan,
            clicked: true,
          };
        }
        return Scan;
      });

      this.setState({
        fruits: shuffleFruits(Apple),
        score: this.state.score + 1,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Fruit Game</h1>
          <p>Try not to hit the image twice!</p>
        </header>
        <footer className="App-footer">
          <p>Fruit Game 2020</p>
        </footer>
        <Score total={this.state.score} goal={12} status={this.state.status} />
        <Wrapper>
          {this.state.fruits.map((fruit) => (
            <FruitsCard
              key={fruit.id}
              id={fruit.id}
              name={fruit.name}
              image={fruit.image}
              fruitsClicked={this.fruitsClicked}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
