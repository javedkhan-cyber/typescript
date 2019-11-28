let fullName = {
    firstName : 'javed ',
    lastName : 'khan',
    calculateFullName(){
        return function (){
            console.log(this)
            return this.firstName+ ' ' +this.lastName
        }
    }
}
let someNamekkk = fullName.calculateFullName();
someNamekkk();

