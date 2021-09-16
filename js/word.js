class Word {
    constructor(
        word,
        type,
        meaning,
        example,
        state,
        count
    ){
        this.word = word;
        this.type = type;
        this.meaning = meaning;
        this.example = example;
        this.state = state;
        this.count = count;
    }

    knowsWord(){
        console.log('inside knows');
        if(this.state == 'learning' && (this.count == 0 || !this.count)){
            this.state = 'done';
            return true;
        }
        if(this.state == 'reviewing' && this.count == 2){
            this.state = 'done';
            return true;
        }
        if(this.state == 'reviewing' && this.count <2){
            ++this.count;
            return false;
        }
    } 

    doesntKnowWord(){
        if((this.state == 'done' || this.state == 'reviewing')){
            this.state = 'reviewing';
            if(this.count > 0){
                --this.count
            }else{
                this.count = 0;
            }
        }
    }
}

export default Word;