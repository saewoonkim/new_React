import React, { Component, useState } from 'react'
import './Board.css'
import Square from './Square'

// export default class Board extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//         squares: Array(9).fill(null),
//     };
//   }  

const Board = () => { 
    const status = 'Next player: X' 
    const [squares, setSquares] = useState(Array(9).fill(null))

    const handleClick = (i) => {
      const newSquares = squares.slice();
      newSquares[i] ='X';
      setSquares(newSquares);

    }


// //값을 가져오고 , 내보내고 , 사용하는
//   // handleClick(i) {
//   //   const squares = this.state.squares.slice();
//   //   squares[i] = 'X';
//   //   this.setState({squares: squares});
//   // }

    const renderSquare = (i) => {
      return (
          <Square 
                  value={squares[i]}
                  onClick={() => handleClick(i)} />
        );
    }
  
//   // renderSquare(i){
//   //     return <Square 
//   //               value={this.state.squares[i]}
//   //               onClick={() => this.handleClick(i)} />
//   // }

//   // render() {
      return (
        <div>
            <div className='status'>{status}</div>
            <div className='board-row'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className='board-row'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className='board-row'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            
        </div>
    )
}

// // }




