//Excerise 3:Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var PersonName = "Tooba Anwar";
//step 1 show in lower case:
var lowercaseName = PersonName.toLowerCase();
console.log(lowercaseName);
//step 2 show name in uppercase
var uppercaseName = PersonName.toUpperCase();
console.log(uppercaseName);
//step 3 show namein titlecase
var words = PersonName.split(" ");
var titlecaseName = "";
for (var i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLocaleLowerCase() + " ";
}
;
console.log(titlecaseName);
