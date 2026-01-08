// Object

const firstStudent = {
    name: 'Lionel Messi',
    age: 38,
    skills: ['Dribbling', ' Freekick', ' Passing']
}

const secondStudent = {
    name: 'Cristiano Ronaldo',
    age: 40,
    skills: ['Heading', ' Shooting', ' Running']
}

let index = null;
let firstResult = '';
let secondResult = '';

for(index = 0; index <firstStudent.skills.length; index++) {
    firstResult += firstStudent.skills[index];
}

for(index = 0; index <secondStudent.skills.length; index++) {
    secondResult += secondStudent.skills[index];
}

console.log(firstStudent.name +' has '+ firstResult);
console.log(secondStudent.name +' has '+ secondResult);