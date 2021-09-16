const CW1 = [
    {
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
    },
];

const wordInfo = document.getElementById('wordInfo');
const trueBtn = document.getElementById('true');
const falseBtn = document.getElementById('false');
const RW1 = [];
const DW1 = [];
let current_array = 0; //CW1 = 0, RW1 = 1, DW1 = 2;
let current_number=0;

function upDatePage(dictionary){
    if(current_array===0){
        current_number = getRndInteger(0,(CW1.length)-1);
        dictionary = CW1;
        console.log('learning');
    }else{
        current_number = getRndInteger(0,(RW1.length)-1);
        dictionary = RW1;
        console.log('reviewing');
    }
    
    console.log('current_number:', current_number);
    console.log('dictionary:', dictionary);
    const selectedWordObj = dictionary[current_number];
    wordInfo.innerHTML = `
    <div class="state">
        <span>${selectedWordObj.state.toUpperCase()}</span>
    </div>
     <div class="word">
        <h1>${selectedWordObj.word}</h1>
     </div>
        <div class="definition"><strong class="type">${selectedWordObj.type}</strong>: ${selectedWordObj.meaning}</div>
            <div class="example">
                ${selectedWordObj.example}
        </div>
`
;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }


function RunDictionary(){
    if(CW1.length === 0 && RW1.length === 0){
        console.log('inside 1');
        return
    }
    if(CW1.length > 0 && RW1.length > 0){
        console.log('inside 2');
        current_array = Math.random() <=0.5 ? 0:1;
        upDatePage(current_array);
        return
    }
    if(CW1.length === 0 && RW1.length > 0){
        console.log('inside 3');
        current_array = 1;
        upDatePage(current_array);
        return
    }
    if(CW1.length > 0){
        console.log('inside 4');
        current_array = 0;
        upDatePage(current_array);
        return
    }
}

//P0008521972

trueBtn.addEventListener('click',()=>{
    if(current_array === 0){
        DW1.push(CW1[current_number]);
        CW1.splice(current_number,1);
    RunDictionary();
    return
    }
    if(current_array === 1){
        RW1[current_number].count = RW1[current_number].count + 1;
        if(RW1[current_number].count===3){
            DW1.push(RW1[current_number]);
            RW1.splice(current_number,1);
        }
    }
    RunDictionary();
});

falseBtn.addEventListener('click',()=>{
    if(current_array===1){
        RW1[current_number].count = RW1[current_number].count - 1;

    }else{
        const review_word = CW1[current_number];
        review_word.state = 'reviewing';
        review_word.count = 0;
        RW1.push(review_word);
        CW1.splice(current_number,1);
    }
    
    RunDictionary();
});


RunDictionary();