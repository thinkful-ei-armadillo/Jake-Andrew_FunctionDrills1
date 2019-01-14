function getYearOfBirth (age) {
  if (age < 0) {
    throw new Error('Age cannot be negative')
  }
  const yearOfBirth = 2019 - age
  return `I was born in ${yearOfBirth}`
}
function createGreeting (name, age) {
  if (typeof age !== 'number') {
    throw new TypeError('Age is not a number')
  };
  if (typeof name !== 'string') {
    throw new TypeError('Name is invalid')
  };
  return `Hi my name is ${name} and I'm ${age} years old.}`
};
try {
  const greeting1 = createGreeting('Bob', 23)
} catch (error) {
  console.log('Arguments not valid')
};
