//let userName = 'Ott';
const lastName = 'Kott';

//userName = 'Karl';
//lastName = 'Mark'; - constanti ei saa muuta hiljem nagu saab leti

//console.log(userName);
//console.log(lastName);

let age = 11;

//if(age < 11) {
    //console.log(`${lastName}, you are too young to become a student.`);
//}
//else if (age >11 ) {
    //console.log(`Have you missed your letter from University, ${lastName}?`);
//}
//else {
    //console.log(`Congratulations, ${lastName}! You are a student now!`);
//}
const isStudent = true;  //true/false-boolean value

//and
//if(lastName === 'Kott' && age === 11 && isStudent === true) {
    //console.log(`${lastName}, here is your letter from the University.`);
//}
//else {
    //console.log(`You are not a student, ${lastName}. Here is your package.`);
//}

//or

//if(lastName !== 'Kott' || age !== 11 || isStudent !== true){
    //console.log(`You are not a student, ${lastName}. Here is your package.`);
//}
//else {
    //console.log (`${lastName}, here is your letter from the University.`);
//}

//for(let i = 0; i < 5;i++){
    //console.log(`${i+1} I am a student now! Hurray!`);
//}

let friends = ['Mihkel', 'Karl', 'Paula'];
friends.push('Drake');

//let numberOffFriends = friends.length;

//console.log(`${lastName} has got ${friends.length} friends.`); 

//console.log(friends[0]);
//console.log(friends[1]);
//console.log(friends[2]);

for(let i=0; i < friends.length; i++) {
    if(friends[i] === 'Drake'){
        weAreNotFriends(friends[i]);
        continue;
    }
    friends[i] = friends[i] + '*'; 
    greeting(friends[i]);//salvestab muudatust
    //console.log(`${i+1}. ${friends[i]}`);
}

friends.forEach(friend => { //ei lase salvestada muudatust
    //friend = friend + '*';
    console.log(friend);
})

function greeting(friendsName) {
    console.log(`Hello, ${friendsName}!`);
}

function weAreNotFriends(enemyName) {
    console.log(`Go away, ${enemyName}! We are not friends!`);
}
