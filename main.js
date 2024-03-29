/*Exercise 17:Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
var Guest_List = ["Muhammad", "Anwar", "Sakina"];
console.log("\nNEW LIST OF INVITATION :  \n");
for (var i = 0; i < Guest_List.length; i++) {
    console.log("Dear ".concat(Guest_List[i], " :  /n you are invited to dinner!\n"));
}
console.log("Good news! We've found a bigger dinner table, so more space is available. so our new guests are :\n");
Guest_List.unshift("Areeba");
Guest_List.splice(2, 0, "Ayesha");
Guest_List.push("Hiba");
for (var a = 0; a < Guest_List.length; a++) {
    console.log("Dear ".concat(Guest_List[a], " :   /n you are invited to dinner! \n"));
}
console.log("Unfortunately, the new dinner table want arrive on time,so i can only invited two Guests with dinner with me");
while (Guest_List.length > 2) {
    var removedGuest = Guest_List.pop();
    console.log("Sorry, ".concat(removedGuest, " I cant invite you to dinner"));
}
console.log("Invitations to the last 2 Guests");
Guest_List.forEach(function (lasttwo) { return console.log("Lukly ".concat(lasttwo, ", you are still invited to dinner")); });
Guest_List.pop();
Guest_List.pop();
console.log("Empty List:", Guest_List);
