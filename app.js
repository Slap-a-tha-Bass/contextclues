// define
var friends = ['Steven', 'Bob', 'Ceren', 'Corey', 'Luke'];
var loc = ['laundry room', 'kitchen', 'bathroom', 'bedroom', 'garage', 'backyard', 'treehouse', 'office', 'foyer', 'dungeon'];
var weapon = ['fly swatter', 'coke bottle', 'flower pot', 'coffee cup', 'light bulb', 'shaved ice', 'house cat', 'diaper', 'robot vacuum', 'salt shaker', 'towel', 'library book', 'zucchini', 'toothbrush', 'water hose', 'mason jar', 'rock', 'soccer ball', 'ukelele', 'wine bottle'];
// loop for all parameters
for (var i = 0; i < 100; i++) {
    // var peeps = friends[i % friends.length];
    // var weaponChoice = weapon[i % weapon.length];
    // var place = loc[i % loc.length];
    var header = $('<h3 class = "header">Accusation ' + i + '</h3>');
    // click function
    header.click(accusation(i)) 
    $('body').append(header);
        // counter();

    // end click function
    var counter = makeCounter(0);
    function makeCounter(val) {
        return function () {
            val++;
            console.log(val);
        }
    }
    function accusation (num){
        return function(){
            console.log(num);
        alert('I accuse ' + friends[num % friends.length] + ' , with the ' + weapon[num % weapon.length] + ' in the ' + loc[num % loc.length] + '!');
        }
    }
}
// const makeCounter = function (value)
// {
//     return (function ()
//     {
//         value++;
//         console.log(value);
//     });
// };

// let start = 3;
// const counter = makeCounter(start);
// start++;

// counter();