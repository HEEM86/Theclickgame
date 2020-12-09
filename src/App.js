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


  // clicked = (id) => {
  //   console.log("clicked");
  //   let fruits = this.state.fruits;
  //   let fruitsClicked = fruits.filter(fruits => fruits.id === id);


  

 fruitsClicked = (id) => {
    console.log(fruits);
    const fruitsClicked = this.state.fruits.find((fruits) => fruits.id === id);
    const shuffleFruits= (fruits) => {
      //shallow copy of the array
      //you do not ever want to modify the state directly
      const copy = fruits.concat();
      return copy.sort(() => Math.random() - 0.5);
    };
    const resetClick = (list) =>{
      window.location.reload(false);
      console.log("reset")
      list.map((current) => ({
        ...current,
        clicked: false,
      }))};
    //checks if current click has been clicked before
 
    if (fruitsClicked.clicked === true) {
      resetClick(fruits)
      this.setState({
        score: 0
      })
      return;
    }
  
  else{var Apple=this.state.fruits.map(Scan=>{
    console.log(Scan)
    if (Scan.id === id) {
      return {
        ...Scan, clicked: true
      }
    

    }return Scan;
  })

    this.setState({
      fruits: shuffleFruits(Apple),
    score: this.state.score+1
    }
    )
  

  }
}   
  

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
        <footer className="App-footer">
          <p>
            Fruit Game 2020
          </p>
        </footer>
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
              fruitsClicked={this.fruitsClicked}
              />
              

          ))}
          
        </Wrapper>

      </div>
    );
  };


}


export default App;
