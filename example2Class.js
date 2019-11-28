var human = /** @class */ (function () {
    function human(_head, _eye, _nose, _hand, skin_Color) {
        var _this = this;
        this.getAllInfo = function () {
            return _this.skinColor;
        };
        this.head = _head;
        this.eye = _eye;
        this.nose = _nose;
        this.hand = _hand;
        this.skinColor = skin_Color;
    } //end constructer
    return human;
}());
var findAboutHuman = new human('smart', 2, 1, 2, 'white');
var info = findAboutHuman.getAllInfo();
console.log(info);
