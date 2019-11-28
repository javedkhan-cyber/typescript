let squareOfNumb = (x:number,y?:number)=>{
    if(y){
        return x*y
    }
    else{
        return x*x
    }
}
console.log(squareOfNumb(5))
console.log(squareOfNumb(5,8))