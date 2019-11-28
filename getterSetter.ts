class MobilePhone1{
private screenSize:string;
private camera : number;
private operatingSystem : string;

constructor(screen_Size:string,_camera:number,operating_System:string){
this.screenSize = screen_Size;
this.camera = _camera;
this.operatingSystem = operating_System
}
//getter
getScreenSize=()=>{
    return this.operatingSystem;
}
getCameraPixels=()=>{
    return this.camera;
}
setPixels = (pixels:number)=>{
    this.camera=pixels
}
}
let onePlus5t = new MobilePhone1('6 inch',20,'Android')
let specification = onePlus5t.getScreenSize();
console.log(specification);
//tell existing
console.log(onePlus5t.getCameraPixels());
//set pixels
onePlus5t.setPixels(30)
//and call the new method
console.log(onePlus5t.getCameraPixels())