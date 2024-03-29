//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.



 function makeSandwich (item: string[]){
    console.log("Making your sandwhich with:");

    item.forEach(element => console.log("-" + element));

    console.log("Enjoy your sandwhich !");
 }


makeSandwich (['Chicken','Cheese','Egg']);

makeSandwich (['Butter','Peanut butter']);

makeSandwich (['Turkey','Lettuce','Cheese', 'Fish']);