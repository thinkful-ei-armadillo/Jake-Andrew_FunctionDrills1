function getYearOfBirth(age){
  if(age<0){
    throw new Error("Age cannot be negative")
  }
  const yearOfBirth = 2019 - age;
  return `I was born in ${yearOfBirth}` 
}
function createGreeting (name, age){
  return `Hi my name is ${name} and I'm ${age} years old.}`;
}
try{
  const greeting1 = createGreeting('Bob', 23);
} catch(error){
console.log('Arguments not valid')
};

