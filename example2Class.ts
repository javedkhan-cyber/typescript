class human {

    head : string;
    eye:number;
    nose : number;
    hand : number;
    skinColor : string;

    constructor(_head:string,_eye:number,_nose:number,_hand:number,skin_Color:string){
this.head = _head;
this.eye = _eye;
this.nose = _nose;
this.hand  = _hand;
this.skinColor = skin_Color
    }//end constructer

getAllInfo=()=>{
    return this.skinColor;
}
}

let findAboutHuman = new human('smart',2,1,2,'white')
let info = findAboutHuman.getAllInfo();
console.log(info)