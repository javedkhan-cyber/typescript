var partyList = [];
var pushToParty = function () {
    var people = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        people[_i] = arguments[_i];
    }
    //console.log(people)
    var newPeopleArray = people;
    partyList = partyList.concat(newPeopleArray);
    console.log(partyList);
    return partyList;
};
pushToParty('khan', 'nusrat', 'samreen');
pushToParty('kkk', 'llll', 'mnbjhj');
