// LOOPS EXERCISE

//1)
for (i = 1; i <= 7; i++) {
    console.log(i);
}

                        // 1
                        // 2
                        // 3
                        // 4
                        // 5
                        // 6
                        // 7
// OR
// for (i = 1; i < 8; i++) {
//     console.log(i);
// }


console.log("==========");


//2)
for (i = 5; i <= 25; i +=4){
    console.log(i);
}
                        // 5
                        // 9
                        // 13
                        // 17
                        // 21
                        // 25

console.log("==========");


//3a)
const wizards = ["Harry Potter", "Hermione Granger", "Ron Weasley"];
//3b)
for (names of wizards) {
    console.log(names);
}
                        // Harry Potter
                        // Hermione Granger
                        // Ron Weasley

console.log("==========");


//4a)
let harryPotterMovies = 0; 
//4b)
while (harryPotterMovies++ <= 7) {
    console.log(harryPotterMovies);
}
                        // 1
                        // 2
                        // 3
                        // 4
                        // 5
                        // 6
                        // 7
                        // 8


//OR
// while (harryPotterMovies <= 7) {
//     console.log(harryPotterMovies);
//     harryPotterMovies++
// }

//OR
// while (true) {
//     harryPotterMovies++;
//     console.log(harryPotterMovies);
//     if (harryPotterMovies === 8){
//         break;
//     }
// }


console.log("==========");


//BONUS
//5a)
const hogwartsHouses = `Gryffindor, Hugglepuff, Ravenclaw, Slytherin`;
//5b)

for (house of hogwartsHouses){
    for (chr of house){
        console.log(chr);
    }
}

                                    // G
                                    // r
                                    // y
                                    // f
                                    // f
                                    // i
                                    // n
                                    // d
                                    // o
                                    // r
                                    // ,
                                    
                                    // H
                                    // u
                                    // g
                                    // g
                                    // l
                                    // e
                                    // p
                                    // u
                                    // f
                                    // f
                                    // ,
                                    
                                    // R
                                    // a
                                    // v
                                    // e
                                    // n
                                    // c
                                    // l
                                    // a
                                    // w
                                    // ,
                                    
                                    // S
                                    // l
                                    // y
                                    // t
                                    // h
                                    // e
                                    // r
                                    // i
                                    // n
                                    // G
                                    // r
                                    // y
                                    // f
                                    // f
                                    // i
                                    // n
                                    // d
                                    // o
                                    // r
                                    // ,
                                    
                                    // H
                                    // u
                                    // g
                                    // g
                                    // l
                                    // e
                                    // p
                                    // u
                                    // f
                                    // f
                                    // ,
                                    
                                    // R
                                    // a
                                    // v
                                    // e
                                    // n
                                    // c
                                    // l
                                    // a
                                    // w
                                    // ,
                                    
                                    // S
                                    // l
                                    // y
                                    // t
                                    // h
                                    // e
                                    // r
                                    // i
                                    // n
                                
console.log("==========");


//6a)
const quote = [
    "Yer",
    "A",
    "Wizard",
    "Harry"
];

//6b)

/*
let fullQuote = "";             //starting off as empty string
for (i = 0; i < quote.length; i++){         // starting for loop as 0
    fullQuote += quote[i];                  // taking value of fullQuote and adding quote[0] ("Yer")
    if (i < quote.length - 1); {            // true? false? 
        fullQuote += " ";                   // if true add " " (space)
                                            // if true run through loop again adding 1
    }
}
    console.log(fullQuote);
*/


/*
let fullQuote = "";
for i = 0  
    0 += quote[0] 
                    // "Yer"
        i = 0 (0 < quote.length -1 (3)): true add space
                    // "Yer "
0++ (=1) (1 < 4) 
    1 += quote [1]; 
                    // "Yer A"
        i = 1 ( 1 < 3): true add space
                    // "Yer a "
1++ (=2) (2 < 4)
    2 += quote [2]
                    // "Yer a wizard"
        i = 2 (2 < 3): true add space
                    // "Yer a wizard "
2++ (=3) (3 < 4)
    3 += quote[3]
                    // "Yer a wizard Harry"
        i = 3 (3 < 3): false - go back to first loop
3++ (=4) (4 < 4) : false end.
                    // "Yer a wizard Harry"

*/


let fullQuote = "";             // create variable, set to empty string
for (word of quote){
    fullQuote += `${word} `
}                               // "Yer a wizard Harry " 
fullQuote = fullQuote.trim()
console.log(fullQuote);         // "Yer a wizard Harry"