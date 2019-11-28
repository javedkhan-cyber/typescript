var numberOfFriends = function (friends) {
    if (typeof friends == 'string') {
        return 'you have one friend';
    }
    else {
        var message = "you have " + friends.length + " friend";
        return message;
    }
};
console.log(numberOfFriends("javed"));
console.log(numberOfFriends(["khan", "nusrat", "marriage"]));
