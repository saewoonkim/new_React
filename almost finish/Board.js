import React from 'react'
import './Board.css'
import Square from './Square'

// export default class Board extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//         squares: Array(9).fill(null),
//     };
//   }  

const Board = ({squares, onClick}) => { 
    
  //  const [squares, setSquares] = useState(Array(9).fill(null)) APP로 보냈음
    // const [xIsNext, setXIsNext] = useState(true)

    // const calculateWinner = (squares) => {
    //     const lines = [
    //         [0, 1, 2],
    //         [3, 4, 5],
    //         [6, 7, 8],
    //         [0, 3, 6],
    //         [1, 4, 7],
    //         [2, 5, 8],
    //         [0, 4, 8],
    //         [2, 4, 6],
    //     ];
    //     for (let i = 0; i < lines.length; i++) {
    //         const [a, b, c] = lines[i];
    //         console.log('a, b, c', a, b, c);
    //         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
    //             return squares[a];
    //         }
    //     }
    //     return null;
    // }

    // const winner = calculateWinner(squares);
    // let status;
    // if (winner) {
    //     status = `Winner: ${winner} `;
    // } else {
    //     status = `Next player: ${xIsNext ? 'X' : 'O'}`;//app으로 넘어갓음.
    // }

//    const status = `Next player: ${xIsNext? 'X' : 'O' }`; //위너를안만들어주고 이것만쓰면 계속 눌러짐 xo 바뀌면서

    // const [number, setNumber] = useState(0);


    // const handleClick = (i) => {
    //   const newSquares = squares.slice();
    //   if (calculateWinner(newSquares) || newSquares[i]) {
    //     return;
    // }
    //   newSquares[i] = xIsNext ? 'X' : 'O';
    //   setSquares(newSquares);
    // //   setXIsNext(!xIsNext); // 느낌표 가 붙으면 그값은 반대
    //   setXIsNext (prev => !prev); //이렇게도 사용가능하다
   
   
    // setNumber (number + 1 );     //슬라이스를 포함한 23번 줄밑으로 다 주석처리후 실행가능
    // setNumber (number + 1 );
    // console.log('number:1', number);// 넘버가 자기마음대로 나온다

    // setNumber(number => number + 1);
    // setNumber(number => number + 1);
    // console.log('number :', number);    //맞는거임 슬라이스를 포함한 23번 줄밑으로 다 주석처리후 실행가능

    // setNumber(prev => prev + 1);     //슬라이스를 포함한 23번 줄밑으로 다 주석처리후 실행가능
    // setNumber(prev => prev + 1);
    // console.log('number :', number); 맞는거임


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
                  onClick={() => onClick(i)} />
        );
    }

//   // renderSquare(i){
//   //     return <Square 
//   //               value={this.state.squares[i]}
//   //               onClick={() => this.handleClick(i)} />
//   // }

//   // render() {
      return (
        <div className='b-wrap'>
            {/* <div className='status'>{status}</div> */}
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

export default Board


// // }




