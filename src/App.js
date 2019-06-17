import React from 'react';
import Board from './components/Board'
import './App.css';

class Game extends React.Component  {

  constructor(){
    super();
    this.state={
        cells: Array(9).fill(null),
        whoNext: 'X',
        countStep: 0,
        winner: null
    };
  }

  playerStep=(index)=>{
      let {cells, whoNext, countStep, winner} = this.state;
      cells=[...cells];
      if(cells[index] || winner){
          return;
      }

      cells[index]=whoNext;
      countStep= countStep+1;
      whoNext = whoNext==='X' ? '0': 'X';
      winner=getWinner(cells);

      this.setState({
         cells: cells,
         whoNext: whoNext,
         countStep: countStep,
         winner: winner,
      });

  };

  resetGame=()=>{
      this.setState({
          cells: Array(9).fill(null),
          whoNext: 'X',
          countStep: 0,
          winner: null
      });

  };
  render(){
      const {whoNext, winner, countStep} = this.state;

      return (
      <div className="tic-tac-toe">
        <div className={"game-status"}>
            <h3>Step: {countStep}</h3>
            <h3>Who Next: {whoNext}</h3>
            {
                winner ?
                    <h3 >Winner: <span className={'winner'}>{winner}</span></h3> :
                    <h3> Winner: {winner}</h3>
            }

        </div>
        <div className="container">
            <h1>Tic Tac Toe</h1>
            <Board
             playerStep={this.playerStep}
             cells={this.state.cells}
            />
            {winner || countStep===9 ?
                <button
                className={"reset"}
                onClick={this.resetGame}
                >Reset</button>:
                null
            }
        </div>
      </div>
  );
  }
}

function getWinner(cells) {

    const winLies =[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    const [winCombo] = winLies.filter((combo)=>{
        let [a, b, c] = combo;
        return cells[a] && cells[a]===cells[b] && cells[b]===cells[c]
    });

    if(winCombo){
        return cells[winCombo[0]];
    }else {
        return null;
    }
}


export default Game;
