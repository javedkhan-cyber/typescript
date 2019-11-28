var fullName = {
    firstName: 'javed ',
    lastName: 'khan',
    calculateFullName: function () {
        return function () {
            console.log(this);
            return this.firstName + ' ' + this.lastName;
        };
    }
};
var someNamekkk = fullName.calculateFullName();
someNamekkk();
