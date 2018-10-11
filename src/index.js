import './index.scss';

window.SpeechRecognition = window.SpeechRecognition
                          || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.interimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words');

words.appendChild(p);

recognition.addEventListener('result', e => {
  //console.log(e);
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

    //----puttiing the result into 'p' tag---
    p.textContent = transcript;
    //----Checking if th result is final, then creatin a new p tag--
    if(e.results[0].isFinal){
      p = document.createElement('p');
      words.appendChild(p);
    }
  //console.log(e.result);
});

recognition.addEventListener('end', recognition.start);

recognition.start();
