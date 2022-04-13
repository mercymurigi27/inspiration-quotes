export class Quote {
    public showDescription:boolean;
    constructor(public quote: string,public upvote:number=0, public downvote:number=0, public author: string, public person: string){
        this.showDescription= false;
        this.quote =  quote;
        this.upvote = upvote || 0;
        this.downvote = downvote || 0;
    }
    increaseVotes(){
        this.upvote++ 
      }
      decreaseVotes(){
        this.downvote++
      }
}
