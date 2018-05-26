import { masterCode } from './masterCode';

let turn = 0
let guess = 0
let guesses = []
let correctSpots = 0

function guessStage() {
  if(guesses.length === 4) {
    alert('Only 4 guesses/turn')
  }
  console.log(masterCode)
  guesses.push(event.target.id)
  console.log(guesses)
  console.log(event.target.id)
  $(`#t-${guess}`).attr('id', event.target.id)
  guess += 1
}

function submitGuess() {
  for(let i = 0; i < guesses.length; i++) {
    if (guesses[i] === masterCode[i]) {
      correctSpots += 1
    }
  }
  $(`#c-place-${turn}`).html(correctSpots)
}

export { guessStage, submitGuess };
