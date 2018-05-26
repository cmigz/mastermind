import { masterCode } from './masterCode';

let turn = 0
let guess = 0
let guesses = []
let correctSpots = 0
let correctColors = 0

function guessStage() {
  // Doesnt allow more then 4 guesses/turn
  if(guesses.length === 4) {
    alert('Only 4 guesses/turn')
    return
  }
  guesses.push(event.target.id)
  $(`#g-${guess}`).addClass(event.target.id)
  guess += 1
}

function submitGuess() {
  console.log(`Master Code Submit Guess ${masterCode}`)
  for(let i = 0; i < guesses.length; i++) {
    console.log(`Guess = ${guesses[i]}`)
    console.log(`Master Code = ${masterCode[i]}`)
    console.log('--------------')
    if (guesses[i] === masterCode[i]) {
      correctSpots += 1
    }
    console.log(correctSpots)
  }
  $(`#c-place-${turn}`).html(correctSpots)

  function remove(array, element) {
    const index = array.indexOf(element);
    array.splice(index, 1);
  }

  let masterClone = masterCode

  for (let i = 0; i < guesses.length; i++) {
    for(let x = 0; x < masterClone.length; x++) {
      if(guesses[i] === masterClone[x]) {
        correctColors += 1
        remove(masterClone, masterClone[x])
      }
    }
  }
  $(`#c-color-${turn}`).html(correctColors)
  turn += 1
  guesses = []
  // correctSpots = 0;
  // correctColors = 0;
  masterClone = masterCode;
}

function resetTurn () {
  $(`#turn-${turn}`).children().removeClass('red blue green yellow orange purple')
  guesses = []
  switch (turn) {
    case 0:
      guess = 0;
      break;
    case 1:
      guess = 4;
      break;
    case 2:
      guess = 8;
      break;
    case 3:
      guess = 12;
      break;
    case 4:
      guess = 16;
      break;
    case 5:
      guess = 20;
      break;
    case 6:
      guess = 24;
      break;
    case 7:
      guess = 28;
      break;
    case 8:
      guess = 32;
      break;
    case 9:
      guess = 36;
      break;
    default:
      break;
  }
  // $(`#turn-${turn}`).
}

export { guessStage, submitGuess, resetTurn };
