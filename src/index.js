function returnUser(someUser) {
    console.log("Hi this is ".concat(someUser.name, " of id ").concat(someUser.id));
    if (someUser.isPaid == true) {
        console.log("Fees paid");
    }
    else {
        console.log("Please pay the fee for this course.");
    }
}
var user1 = {
    name: "Swapnil",
    id: 1759229267,
    isPaid: true
};
returnUser(user1);
console.log("This is the end");
