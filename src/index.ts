type user = {
    name : String,
    id: Number,
    isPaid: Boolean
}

function returnUser(someUser: user){
    console.log(`Hi this is ${someUser.name} of id ${someUser.id}`);
    if (someUser.isPaid == true){
        console.log("Fees paid");
    }else{
        console.log("Please pay the fee for this course.")
    }
}

let user1 : user = {
    name : "Swapnil",
    id : 1759229267,
    isPaid: true
}

returnUser(user1);
console.log("This is the end")