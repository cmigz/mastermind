import { masterCode, colors, masterGenerator, startGame} from './masterCode';
import { guessStage, submitGuess } from './turn_logic';

document.addEventListener('DOMContentLoaded', () => {

  console.log('initialized');
  $('#start').click(() => startGame());
  $('.option').click(() => guessStage());
  $('#submit').click(() => submitGuess());
});
