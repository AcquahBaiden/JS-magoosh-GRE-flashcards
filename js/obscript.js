//import array of words
import Word from './word.js';
//create array of learning
//create array of learned
//get document object for display inside a display function
const anchor = document.getElementById('wordInfo');
const trueBtn = document.getElementById('true');
const falseBtn = document.getElementById('false');
//loop and add each as object

//Object methods
//1. 
let currentWord;
const RW1 = [];
const DW1=[];
const CW1 = [ {
    'word':'disinterested',
    'type': 'adjective',
    'meaning': 'unbiased; neutral',
    'example': `The potential juror knew the defendant, and therefore could not servce on the jury,
     which must consist only of <strong>disinterested</strong> members`,
    'state':'learning'
},
{
    'word':'maintain',
    'type': 'verb',
    'meaning': 'to assert',
    'example': `The scientist <strong>maintained</strong> that the extinction of dinosaurs was most likley brought about by a drastic change in climate`,
    'state':'learning'
},
{
    'word':'upbraid',
    'type': 'verb',
    'meaning': 'to reproach; to scold',
    'example':`Bob took a risk walking into the "Students Barbershop"-in the end he had to <strong>upbraid</strong> the apparently
    drunk baber for giving him an uneven bow cut`,
    'state':'learning'
},
{
    'word':'qualify',
    'type': 'verb',
    'meaning': 'unbiased; neutral',
    'example':`Chris <strong>qualified</strong> his love for San Francisco, adding he didn't like the weather there as much as he liked the weather in 
    Los Angeles`,
    'state':'learning'
},
{
    'word':'iconoclast',
    'type': 'noun',
    'meaning': 'somebody who attacks cherished beliefs or institutions',
    'example':`Lady Gaga, in challenging what it means to be clothed, is an <strong>iconoclast</strong>for wearing a "meat dress" to a prominent awards show`,
    'state':'learning'
},
{
    'word':'vapid',
    'type': 'adjective',
    'meaning': 'offering nothing that is stimulating or challenging',
    'example':`Elliot was surprised when she called him <strong>vapid</strong>. He had always thought of himself as ingenious. `,
    'state':'learning'
},]

const displayWord = function (selectedWordObj) {
  anchor.innerHTML = `
    <div class="state">
        <span>${selectedWordObj.state}</span>
    </div>
     <div class="word">
        <h1>${selectedWordObj.word}</h1>
     </div>
        <div class="definition"><strong class="type">${
          selectedWordObj.type
        }</strong>: ${selectedWordObj.meaning}</div>
            <div class="example">
                ${selectedWordObj.example}
        </div>
`;
};

function getNextWord(){
    //Math.floor(Math.random() * (max - min) ) + min;
    if(CW1.length!=0){
        currentWord = CW1[Math.floor(Math.random()*(CW1.length - 0))+0];
        const currentWordIndex = CW1.indexOf(currentWord);
        console.log('index is',currentWordIndex);
        CW1.splice(currentWordIndex,1);
        console.log('currentWord:',currentWord);
        console.log('typeOf(currentWord):',typeof(currentWord));
        console.log('CW1:',CW1);
        console.log('RW1:',RW1);
        console.log('DW1:',DW1);
        displayWord(currentWord);
    }
}
(function () {
    CW1.forEach((word,idx) => {
      CW1[idx] = new Word(
        word.word,
        word.type,
        word.meaning,
        word.example,
        word.state,
        0
      );
    });
    getNextWord()
  })();

  trueBtn.addEventListener('click',()=>{
      if(currentWord.knowsWord){
         DW1.push(currentWord);
      }else{
         CW1.push(currentWord);
      }
      getNextWord();
      
});