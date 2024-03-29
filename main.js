"use strict";
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
Object.defineProperty(exports, "__esModule", { value: true });
//Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, text) {
    if (size === void 0) { size = 'Large'; }
    if (text === void 0) { text = 'I love TypeScript.'; }
    console.log("Creating a ".concat(size, " shirt with the message: ").concat(text));
}
make_shirt();
make_shirt('Medium');
make_shirt('Small', "I LOVE python");
