//Excerise 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let Guest_list : string[] = ["Muhammad","Anwar","Sakina"];

for (let a=0; a < Guest_list.length; a++){
    console.log(`Dear ${Guest_list[a]}: /n you are invited to dinner! /n`);
}
export{Guest_list}
