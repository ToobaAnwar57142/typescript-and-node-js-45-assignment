/*Excerise :16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
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
