let myName={
fName:'javed',
sName:'khan',
calculatefullName:()=>{
    console.log(this)
    return this.fName+ '  ' +this.sName
}


}
console.log(myName.calculatefullName());
