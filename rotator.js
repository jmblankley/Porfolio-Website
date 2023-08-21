const leftWords = ['Developer', 'Designer', 'Programmer'];
let leftCurrentWordIndex = 0;
let rightCurrentWordIndex = 0;

// Speed of the transition (in milliseconds)
const transitionSpeed = 50;

function rotateWords(wordRotatorId, words, currentWordIndex) {
  const wordRotator = document.getElementById(wordRotatorId);
  const currentWord = words[currentWordIndex];
  const currentWordLength = currentWord.length;

  let i = 0;
  let currentText = '';

  // Update the text content letter by letter
  const intervalId = setInterval(() => {
    if (i < currentWordLength) {
      currentText += currentWord[i];
      wordRotator.textContent = currentText;
      i++;
    } else {
      clearInterval(intervalId);
    }
  }, transitionSpeed);

  currentWordIndex = (currentWordIndex + 1) % words.length;
  return currentWordIndex;
}

// Show first words on load
window.onload = function () {
  document.getElementById('word-rotator-left').textContent = leftWords[0];
  document.getElementById('word-rotator-right').textContent = rightWords[0];

  leftCurrentWordIndex++;
  rightCurrentWordIndex++;
};

// Start rotating words
setInterval(() => {
  leftCurrentWordIndex = rotateWords(
    'word-rotator-left',
    leftWords,
    leftCurrentWordIndex
  );
}, 2000);

setInterval(() => {
  rightCurrentWordIndex = rotateWords(
    'word-rotator-right',
    rightWords,
    rightCurrentWordIndex
  );
}, 2500);
