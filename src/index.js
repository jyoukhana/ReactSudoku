import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import sudoku from 'sudoku';

//var squareIndex = 0;
var puzzle = sudoku.makepuzzle();

//Empty square for user to enter a number
function Square(props) {
  return (
    <input
    value = {props.value}
    className="square"
    maxLength="1"
    onChange = {props.onChange}>
    </input>
  );
}

//Squares filled with number for hint for user
function FullSquare(props){
  return(
    <input
    value = {props.value}
    classname="fullsquare"
    readonly>
    </input>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    //squareIndex++;
    if(this.props.squares[i] === null){
      return (
        <Square
          value = {this.props.squares[i]}
          onChange = {(j) => this.props.onChange(j, i)}
          />
      );
    } else {
      return (
        <FullSquare
          value={this.props.squares[i]}
          />
      );
    }
  }

  //Rendering each individual Square/fullSquare
  render(){
    return (
      <div>
        <table>
          <tbody>

            <tr>
              <td> {this.renderSquare(0)} </td>
              <td> {this.renderSquare(1)} </td>
              <td> {this.renderSquare(2)} </td>
              <td> {this.renderSquare(3)} </td>
              <td> {this.renderSquare(4)} </td>
              <td> {this.renderSquare(5)} </td>
              <td> {this.renderSquare(6)} </td>
              <td> {this.renderSquare(7)} </td>
              <td> {this.renderSquare(8)} </td>
            </tr>

            <tr>
              <td> {this.renderSquare(9)} </td>
              <td> {this.renderSquare(10)} </td>
              <td> {this.renderSquare(11)} </td>
              <td> {this.renderSquare(12)} </td>
              <td> {this.renderSquare(13)} </td>
              <td> {this.renderSquare(14)} </td>
              <td> {this.renderSquare(15)} </td>
              <td> {this.renderSquare(16)} </td>
              <td> {this.renderSquare(17)} </td>
            </tr>

            <tr>
              <td> {this.renderSquare(18)} </td>
              <td> {this.renderSquare(19)} </td>
              <td> {this.renderSquare(20)} </td>
              <td> {this.renderSquare(21)} </td>
              <td> {this.renderSquare(22)} </td>
              <td> {this.renderSquare(23)} </td>
              <td> {this.renderSquare(24)} </td>
              <td> {this.renderSquare(25)} </td>
              <td> {this.renderSquare(26)} </td>
            </tr>

            <tr>
              <td> {this.renderSquare(27)} </td>
              <td> {this.renderSquare(28)} </td>
              <td> {this.renderSquare(29)} </td>
              <td> {this.renderSquare(30)} </td>
              <td> {this.renderSquare(31)} </td>
              <td> {this.renderSquare(32)} </td>
              <td> {this.renderSquare(33)} </td>
              <td> {this.renderSquare(34)} </td>
              <td> {this.renderSquare(35)} </td>
            </tr>

            <tr>
              <td> {this.renderSquare(36)} </td>
              <td> {this.renderSquare(37)} </td>
              <td> {this.renderSquare(38)} </td>
              <td> {this.renderSquare(39)} </td>
              <td> {this.renderSquare(40)} </td>
              <td> {this.renderSquare(41)} </td>
              <td> {this.renderSquare(42)} </td>
              <td> {this.renderSquare(43)} </td>
              <td> {this.renderSquare(44)} </td>
            </tr>

            <tr>
              <td> {this.renderSquare(45)} </td>
              <td> {this.renderSquare(46)} </td>
              <td> {this.renderSquare(47)} </td>
              <td> {this.renderSquare(48)} </td>
              <td> {this.renderSquare(49)} </td>
              <td> {this.renderSquare(50)} </td>
              <td> {this.renderSquare(51)} </td>
              <td> {this.renderSquare(52)} </td>
              <td> {this.renderSquare(53)} </td>
            </tr>

            <tr>
              <td> {this.renderSquare(54)} </td>
              <td> {this.renderSquare(55)} </td>
              <td> {this.renderSquare(56)} </td>
              <td> {this.renderSquare(57)} </td>
              <td> {this.renderSquare(58)} </td>
              <td> {this.renderSquare(59)} </td>
              <td> {this.renderSquare(60)} </td>
              <td> {this.renderSquare(61)} </td>
              <td> {this.renderSquare(62)} </td>
            </tr>

            <tr>
              <td> {this.renderSquare(63)} </td>
              <td> {this.renderSquare(64)} </td>
              <td> {this.renderSquare(65)} </td>
              <td> {this.renderSquare(66)} </td>
              <td> {this.renderSquare(67)} </td>
              <td> {this.renderSquare(68)} </td>
              <td> {this.renderSquare(69)} </td>
              <td> {this.renderSquare(70)} </td>
              <td> {this.renderSquare(71)} </td>
            </tr>

            <tr>
              <td> {this.renderSquare(72)} </td>
              <td> {this.renderSquare(73)} </td>
              <td> {this.renderSquare(74)} </td>
              <td> {this.renderSquare(75)} </td>
              <td> {this.renderSquare(76)} </td>
              <td> {this.renderSquare(77)} </td>
              <td> {this.renderSquare(78)} </td>
              <td> {this.renderSquare(79)} </td>
              <td> {this.renderSquare(80)} </td>
            </tr>

          </tbody>
        </table>
     </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: puzzle
        }
      ],
      stepNumber: 0,
      currentStepNum: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  //Handling clicks/entry in cells from user
  handleClick(i, click) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const currentSq = history[history.length - 1];
    const squares = currentSq.squares.slice();
    var sqVal = click.target.value;

    if(!isNaN(sqVal)){
      if(sqVal.length === 0){
        squares[i] = null;
      } else {
        squares[i] = parseInt(sqVal);
      }
    } else {
      squares[i] = null;
      return click.target.value = '';
    }

    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
    });
  }

  //Use to complete entire (except 1st cell) Sudoku puzzle
  almostSolve() {
    const history = this.state.history;
    var hintNum = history[0].squares
    var solved = sudoku.solvepuzzle(puzzle)
    solved[0] = null

    if(hintNum != null ) {
      hintNum[0] = null

      this.setState({
        hints: hintNum
      })
    }

    this.setState({
      history: history.concat([{
        squares: solved
      }]),
      stepNumber: history.length})

  }

  jumpTo(step){
      this.setState({
          stepNumber: step,
      });
  }

  equal(squares, solved) {
    if(solved === null){
      return false
    } else {

      for (var i=0; i < squares.length; i++) {

        if (squares[i] === null || squares[i] !== solved[i] ) {
          return false;
        }
      }
    }
    return true
  }

  render() {

    const history = this.state.history;
    const currentSq = history[this.state.stepNumber];
    const solved = sudoku.solvepuzzle(puzzle)
    var squares = currentSq.squares

    const moves = history.map((step,move) => {
        const desc = move ? 'Go to move #' +
        move : 'Go to game start';

        return (
            <li key={move}>
                <button onClick={() =>
                  this.jumpTo(move)}>
                      {desc}
                  </button>
            </li>
        );
    });

    if(this.equal(squares, solved)) {
      var boardStyle = "game-win"
      var gameStatus = "Game completed!"
    } else {
      var boardStyle = "game-board"
      var gameStatus = "Game not completed";
    }

    return(
      <div className="game">
        <div className= {boardStyle}>
           <Board squares={squares} onChange={
             (sqVal,index) =>
             this.handleClick(index, sqVal)
           } hints = {
             this.state.history[0]
           }/>

        </div>
        <div className="game-info">
          <button onClick={
            () => this.almostSolve()
          }> Complete most of puzzle
          </button>
          <div>{gameStatus}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
