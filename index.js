import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

console.log(fifaData[828]["Home Team Name"]);
console.log(fifaData[828]["Away Team Name"]);
console.log(fifaData[828]["Home Team Goals"]);
console.log(fifaData[828]["Away Team Goals"]);
console.log(fifaData[828]["Win conditions"]);


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {

    const finalsData = data.filter(function(item){
        return item.Stage === "Final";
    });

    // console.log(finalsData);
    return finalsData;

};

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(getFinalsCb) {

    const years = getFinalsCb.map(function(item) {
        return item.Year;
    });

    // const years = finals.map(function(item) {
    //     return item.Year;
    // });

    return years;

};

console.log(getYears(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(getFinalsCb) {

        let winners = getFinalsCb.map(function(item) {
            // console.log(item["Home Team Goals"]);
            if (item["Home Team Goals"] > item["Away Team Goals"]) {
                return item["Home Team Name"];
            } else if (item["Home Team Goals"] < item["Away Team Goals"]) {
                return item["Away Team Name"];
            }
        });

        return winners;
    }


console.log(getWinners(getFinals(fifaData)));


    // if (getFinalsCb[item]["Home Team Goals"] > getFinalsCb[item]["Away Team Goals"]) {
    //         getFinalsCb(fifaData).map(function(item) {
    //         return item["Home Team Name"];
    //     });
    // } else if (getFinalsCb[item]["Home Team Goals"] < getFinalsCb[item]["Away Team Goals"]) {
    //         getFinalsCb(fifaData).map(function(item) {
    //         return item["Away Team Name"];
    //     });
    // }
    




/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(country, year) {
    for(let i = 0; i < country.length; i++) {
        console.log(`In ${year[i]}, ${country[i]} won the world cup!`);
    }
};

getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData)));

    // let winners = getWinnersCb;
    // let years = getYearsCb;

    // for (let i = 0; i < years.length; i++) {
    //     return `In ${years[i]}, `;
    // }

    // for (let i = 0; i < winners.length; i++) {
    //     return `${country[i]} won the world cup!`;
    // }
        
        
    // }



// console.log(getWinnersByYear(getWinners, getYears));



/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

    const averageHome = data.reduce(function(adding, item) {
        return adding + item["Home Team Goals"];
    }, 0);

    const averageAway = data.reduce(function(adding, item) {
        return adding + item["Away Team Goals"];
    }, 0);

    return `${(averageHome / data.length).toFixed(2)}, ${(averageAway / data.length).toFixed(2)}`;

};

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
