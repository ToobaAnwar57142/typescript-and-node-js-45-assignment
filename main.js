"use strict";
//Excerise 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guest_list = void 0;
var Guest_list = ["Muhammad", "Anwar", "Sakina"];
exports.Guest_list = Guest_list;
for (var a = 0; a < Guest_list.length; a++) {
    console.log("Dear ".concat(Guest_list[a], ": /n you are invited to dinner! /n"));
}
