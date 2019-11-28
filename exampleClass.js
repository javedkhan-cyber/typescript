//declare
var MobilePhone = /** @class */ (function () {
    //declare constructor for initialization
    function MobilePhone(screen_size, _RAM, _battery, _camera, _processor, operating_system) {
        this.screenSize = screen_size;
        this.RAM = _RAM;
        this.camera = _camera;
        this.battery = _battery;
        this.processor = _processor;
        this.operatingSystem = operating_system;
    } //end
    MobilePhone.prototype.getOperatingSystem = function () {
        return this.operatingSystem;
    };
    return MobilePhone;
}()); //end of class
var onePlus5T = new MobilePhone('6 Inch', '4 GB', 4000, 25, 'snapdarfon', 'android');
var os = onePlus5T.getOperatingSystem();
console.log(os);
