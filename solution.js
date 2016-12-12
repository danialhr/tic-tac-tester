var gameOver = false
var movesTaken = []

function playTurn(index) {
  if (index === 0) {
    return true
  }
//     movesTaken.includes(index) === true) {
//     return false
//   } else { movesTaken = movesTaken.push(index)
//     return true
//   }
// }

    //
    //
    // moves = moves.push(index)
    // if (moves.includes(index)) {
    //   return false
    // }
//   }
// }
  // } else if (index !== 0) {
  //   return true
  // }
// }

function isGameOver(){
  return gameOver
}
function whoWon(){
  return 0
  // player 1 wins
  gameOver = true
}
function restart(){

}
