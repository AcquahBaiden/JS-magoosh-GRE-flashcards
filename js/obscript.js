//import array of words
import Word from './word.js';
import {CW1} from './dictionary.js'
const anchor = document.querySelector('.container');
const card = document.createElement('div');
    card.classList.add('card');


//Object methods
//1. 
let currentWord;
const RW1 = [];
const DW1=[];

const displayWord = function (selectedWordObj) {
  card.innerHTML = `
     <div class="top">
        <div class="state">
            <span>${selectedWordObj.state}</span>
        </div>
        <div class="word">
            <h1>${selectedWordObj.word}</h1>
        </div>
            <div class="definition">
                <strong class="type">${selectedWordObj.type}
                </strong>: ${selectedWordObj.meaning}
            </div>
            <div class="example">
                ${selectedWordObj.example}
            </div>
        </div>
        <div class="buttons">
            <div class="button true" id="true" onclick=""> <span>I knew this word</span> </div>
            <div class="button false" id="false" onclick=""> <span>I didn't know this word</span> </div>
        </div>
`;
    const knowBtn = card.querySelector('.button.true');
    const knowsNotBtn = card.querySelector('.button.false');

    knowBtn.addEventListener('click',()=>{
        responseHandler(true);
    });
    knowsNotBtn.addEventListener('click',()=>{
        responseHandler(false)});

    return card;
};

function responseHandler(response){
    if(response){
        currentWord.knowsWord();
        if(currentWord.state == 'learning' && currentWord.count == 0){
            DW1.push(currentWord);
        }
        if(currentWord.state == 'learning' && currentWord.count == 1){
            CW1.push(currentWord);
        }
        if(currentWord.state == 'reviewing' && currentWord.count <2){
            RW1.push(currentWord);
        }
        if(currentWord.state == 'done'){
            DW1.push(currentWord);
        }
    }else{
        currentWord.doesntKnowWord();
        switch (currentWord.state) {
            case 'done':
                DW1.push(currentWord);
                break;
            case 'reviewing':
                RW1.push(currentWord);
                break;
            case 'learning':
                CW1.push(currentWord);
                break;
            default:
                break;
        }
    }
    
    getNextWord(displayWord); 
}

function getNextWord(callback){
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
        const card = callback(currentWord);
        anchor.append(card);
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
    getNextWord(displayWord)
  })();

