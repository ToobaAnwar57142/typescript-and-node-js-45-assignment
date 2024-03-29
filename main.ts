//Unchanged Magicians: Start with your work from Exercise 40. Call let magician : string[] = ['Harry Potter','Hermione Granger','Ron Weasley','Albus Dumbledore'];



let magician : string[] =['Harry Potter','Herminoe Granger','Ron Weasley','Albus Dumbledore'];

function copyArray(arr:string[]){
    return[...arr]
}


function make_great (magicanArry:string[]){

       for(let i=0; i<magicanArry.length; i++){

              magician[i] = 'the Great' + magicanArry[i]
       }

}     

function show_magicians(magicans: string[]){

    magician.forEach(element => {
        console.log(element);
    });
}


const copyMagicianArray = copyArray (magician);

make_great(copyMagicianArray);

console.log('\n\nthis is my orignal array:');
show_magicians(magician);

console.log ('\n\nThis is my modfied copy of the array:');
show_magicians(copyMagicianArray);

