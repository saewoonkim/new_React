import React from 'react'
import './Square.css'

// export default class Square extends Component {
const Square = ({onClick, value}) => {
  
// //  render() {
//     return (
//       <button className="square" onClick={() => this.props.onClick()}>
//            {this.props.value}
//       </button>
//     )
// //  }
  return (
    <button className="square" onClick={() => onClick()}>
         {value}
    </button>
  )
}




export default Square
