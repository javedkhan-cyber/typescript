//declare
class MobilePhone {
    

    //declararion field and properties
    screenSize : string;
    RAM : string;
    battery : number;
    camera : number;
    processor : string;
    operatingSystem :string


    //declare constructor for initialization
    constructor(screen_size:string,_RAM : string,_battery : number,_camera : number, _processor : string,  operating_system :string){

    this.screenSize = screen_size;
    this.RAM = _RAM;
    this.camera = _camera;
    this.battery = _battery;
    this.processor = _processor;
    this.operatingSystem = operating_system

}//end
getOperatingSystem=()=>{
    return this.operatingSystem;
}
}//end of class
let onePlus5T = new MobilePhone('6 Inch','4 GB',4000,25,'snapdarfon','android')
let os=onePlus5T.getOperatingSystem();
console.log(os)