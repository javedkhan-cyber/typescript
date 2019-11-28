let numberOfFriends =(friends:any)=>{

    if(typeof friends == 'string'){
        return 'you have one friend'
    }
    else{
        let message = `you have ${friends.length} friend`
        return message
    }


}
console.log(numberOfFriends("javed"))
console.log(numberOfFriends(["khan","nusrat","marriage"]))