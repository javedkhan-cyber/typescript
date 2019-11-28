var _this = this;
var myName = {
    fName: 'javed',
    sName: 'khan',
    calculatefullName: function () {
        console.log(_this);
        return _this.fName + '  ' + _this.sName;
    }
};
console.log(myName.calculatefullName());
