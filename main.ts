//Alien Colors #1: Imagine an alien was just shot down in a game. 

//Create a variable called alien_color 
let alien_color :string = 'green';

//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
if(alien_color === 'green'){
    console.log("Player Just earned 10 Points !");
}

//• Write one version of this program that passes the if test and another that fails. 
alien_color ='yellow';

//(The version that fails will have no output.)
if(alien_color === 'green'){
    console.log("Player Just earned 10 points !");
}