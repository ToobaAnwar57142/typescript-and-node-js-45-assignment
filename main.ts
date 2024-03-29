//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.



let magician : string[] = ['Harry Potter','Hermione Granger','Ron Weasley','Albus Dumbledore'];


function make_great (magicanArry: string[]){

     for(let i=0; i<magicanArry.length; i++){

        magician[i] = 'the Great' + magicanArry[i]
     }
     
}

function show_magicians(magicans: string[]){

magician.forEach(element => {
        console.log(element);
    
    });
}

show_magicians(magician);