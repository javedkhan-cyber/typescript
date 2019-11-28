var MobilePhone1 = /** @class */ (function () {
    function MobilePhone1(screen_Size, _camera, operating_System) {
        var _this = this;
        //getter
        this.getScreenSize = function () {
            return _this.operatingSystem;
        };
        this.getCameraPixels = function () {
            return _this.camera;
        };
        this.setPixels = function (pixels) {
            _this.camera = pixels;
        };
        this.screenSize = screen_Size;
        this.camera = _camera;
        this.operatingSystem = operating_System;
    }
    return MobilePhone1;
}());
var onePlus5t = new MobilePhone1('6 inch', 20, 'Android');
var specification = onePlus5t.getScreenSize();
console.log(specification);
//tell existing
console.log(onePlus5t.getCameraPixels());
//set pixels
onePlus5t.setPixels(30);
//and call the new method
console.log(onePlus5t.getCameraPixels());
