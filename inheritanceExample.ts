class Animal  {

    constructor(public limbs:number,public typeOfAnimal:string,public diet:string){
        this.limbs = limbs;
        this.typeOfAnimal = typeOfAnimal;
        this.diet = diet;
    }
}
    class Dog extends  Animal{
constructor(public limbs:number,public typeOfAnimal:string,public diet:string){
    super(limbs,typeOfAnimal,diet)
}
canBark=()=>{
    return this.limbs
}
    }

let dogSpeci = new Dog(4,'mammal','carnivores')
console.log(dogSpeci.canBark())