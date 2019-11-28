let partyList:string[]=[];
let pushToParty=(...people:string[])=>{
    //console.log(people)
    let newPeopleArray=people;
    partyList= partyList.concat(newPeopleArray)
    
    console.log(partyList)
    return partyList;

}
pushToParty('khan','nusrat','samreen')
pushToParty('kkk','llll','mnbjhj')
