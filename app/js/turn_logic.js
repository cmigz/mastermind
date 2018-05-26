import { masterCode } from './masterCode';

let turn = 0
let guess = 0
let guesses = []
let correctSpots = 0
let correctColors = 0

function guessStage() {
  if(guesses.length === 4) {
    alert('Only 4 guesses/turn')
  }
  console.log(masterCode)
  guesses.push(event.target.id)
  console.log(guesses)
  console.log(event.target.id)
  $(`#t-${guess}`).addClass(event.target.id)
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

  let masterClone = masterCode

  for (let i = 0; i < guesses.length; i++) {
    for(let x = 0; x < masterClone.length; x++) {
      if(guesses[i] === masterClone[x]) {
        correctColors += 1
        remove(masterClone, masterClone[x])
      }
    }
  }
  console.log(masterCode)
  console.log(correctColors)
  $(`#c-color-${turn}`).html(correctColors)
}

export { guessStage, submitGuess };