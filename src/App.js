import './App.css';
import Gameboard from "./Components/Gameboard";
import { useState } from 'react';
import { Button } from 'reactstrap';

function App() {

const[board,setBoard]=useState(Array(9).fill(null));
const [addX, SetAddX]=useState(true);
const checkWinner=(board)=>{
  const winRow =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [2,5,8]
  ];

  for(let i=0;i<winRow.length;i++){
    const [a,b,c]=winRow[i];
    if(board[a] ===board[b] && board[a] === board[c]){
      return board[a];
    }

  }
  return null;
}
const winner = checkWinner(board);
const insertValue=(i)=>{

  const playBoard =[...board];

  if(winner || playBoard[i]) return;

  playBoard[i]= addX ? "X":"O";
  setBoard(playBoard);
  localStorage.setItem("oldBoard",JSON.stringify(playBoard)); 
  console.log(JSON.parse(localStorage.getItem("oldBoard")))
  console.log(playBoard);
  SetAddX(!addX);

}
const emptyBoard=()=>{
  localStorage.setItem("oldBoard",JSON.stringify(Array(9).fill(null)));
  setBoard(Array(9).fill(null));
}

const loadBoard=()=>{
  console.log(localStorage.getItem("oldBoard"))
 setBoard(JSON.parse(localStorage.getItem("oldBoard")));
}
  return (
    <div className="App"><br></br>
      <Gameboard  board={board} insertValue={insertValue} /><br></br><br></br>
      <h3>{winner ? "The winner is :"+ " "+ winner:""} </h3><br></br><br></br>

      <Button color="primary" onClick={emptyBoard}>New Game</Button>{' '}
      <Button onClick={loadBoard}>load Game</Button>

        
    </div>
  );
}

export default App;
