import { masterCode } from './masterCode';

let turn = 0;
let guess = 0;
let guesses = [];
let correctSpots = 0;
let correctColors = 0;

function guessStage() {
  // Doesnt allow more then 4 guesses/turn
  if (guesses.length === 4) {
    alert('Only 4 guesses/turn');
    return;
  }
  guesses.push(event.target.id)
  $(`#g-${guess}`).addClass(event.target.id)
  guess += 1
}

function submitGuess() {
  for(let i = 0; i < guesses.length; i++) {
    if (guesses[i] === masterCode[i]) {
      correctSpots += 1
    }
  }
  $(`#c-place-${turn}`).html(correctSpots)

  function remove(array, element) {
    const index = array.indexOf(element);
    array.splice(index, 1);
  }

  let masterClone = masterCode.slice()

  for(let i = 0; i < guesses.length; i++) {
    if (guesses[i] === masterClone[0]) {
      correctColors += 1
      remove(masterClone, masterClone[0])
    } else if (guesses[i] === masterClone[1]) {
      correctColors += 1
      remove(masterClone, masterClone[1])
    } else if (guesses[i] === masterClone[2]) {
      correctColors += 1
      remove(masterClone, masterClone[2])
    } else if (guesses[i] === masterClone[3]){
      correctColors += 1
      remove(masterClone, masterClone[3])
    }
  }

  $(`#c-color-${turn}`).html(correctColors);
  turn += 1;
  guesses = [];
  correctSpots = 0;
  correctColors = 0;
  masterClone = masterCode.slice();
}

function resetTurn() {
  $(`#turn-${turn}`)
    .children()
    .removeClass('red blue green yellow orange purple');
  guesses = [];
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
}

export { guessStage, submitGuess, resetTurn };
