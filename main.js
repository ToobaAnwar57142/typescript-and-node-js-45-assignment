"use strict";
/* Excerise :18 ExceriseSeeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var places = ['Karachi', 'Islamabad', 'Lahore', 'Multan'];
console.log('original :' + places);
/*• Print your array in alphabetical order without modifying the actual list.*/
console.log('copy' + __assign({}, places).sort());
/*• Show that your array is still in its original order by printing it.*/
console.log('original :' + places);
/*• Print your array in reverse alphabetical order without changing the order of the original list.*/
console.log('copy' + __assign({}, places).sort().reverse());
/*• Show that your array is still in its original order by printing it again.*/
console.log('copy' + __assign({}, places).sort().reverse());
/*• Reverse the order of your list. Print the array to show that its order has changed.*/
console.log('original :' + places.sort());
/*• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed*/
console.log('original :' + places.sort().reverse());
