//Unchanged Magicians: Start with your work from Exercise 40. Call let magician : string[] = ['Harry Potter','Hermione Granger','Ron Weasley','Albus Dumbledore'];
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magician = ['Harry Potter', 'Herminoe Granger', 'Ron Weasley', 'Albus Dumbledore'];
function copyArray(arr) {
    return __spreadArray([], arr, true);
}
function make_great(magicanArry) {
    for (var i = 0; i < magicanArry.length; i++) {
        magician[i] = 'the Great' + magicanArry[i];
    }
}
function show_magicians(magicans) {
    magician.forEach(function (element) {
        console.log(element);
    });
}
var copyMagicianArray = copyArray(magician);
make_great(copyMagicianArray);
console.log('\n\nthis is my orignal array:');
show_magicians(magician);
console.log('\n\nThis is my modfied copy of the array:');
show_magicians(copyMagicianArray);
