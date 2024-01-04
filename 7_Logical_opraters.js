// logical operators =  used to combine or manipulate Boolean values 
//                                    (true or false)

// AND = &&
// OR  = ||
// NOT = !

// -----------EXAMPLE 1 ----------
const temp = 25;

if(temp > 0 && temp <= 30){                     // to impliment two conditions we use AND && oprator 
    console.log("The weather is GOOD");
}
else{
    console.log("The weather is BAD");          // it gives The weather is BAD, cause it satishfies the following both the  conditions

}

// ---------- EXAMPLE 2 ----------
const temp1 = 50;

if(temp1 <= 0 || temp1 > 30){                     // to impliment either condition 1 or 2 we use OR || oprator 
    console.log("The weather is BAD");
}
else{
    console.log("The weather is GOOD");          // even though the temp is grater than 30,it gives The weather is BAD, cause it satishfies the either of the following condition
}                                                // in this case first condition gets trigegr and and it satishfies the oprator state so it gives the ("The weather is BAD");

// ---------- EXAMPLE 3 ----------
const isSunny = false;

if(!isSunny){                                    // to impliment not condition we use NOt ! oprator.....it gives the boolean value as true if it is false and false if it is true
                                                 // Basically it gives the opposite of the behavior(it checks the state and gives true if it is not satishfing the condition )
    console.log("It is CLOUDY");
}
else{
    console.log("It is SUNNY");                   // it gives The output ("It is CLOUDY") , cause it satishfies the following condition that issunny is false, it means it is not.
                                                  // so it is true and its printing the expected output which is oppsite
}