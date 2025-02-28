const findTheOldest = function (people) {
  return people
    .map((person) => {
      if (!person.yearOfDeath) {
        person.yearOfDeath = new Date().getFullYear();
      }
      return {
        name: person.name,
        age: person.yearOfDeath - person.yearOfBirth,
      };
    })
    .sort((a, b) => b.age - a.age)
    .reduce((oldest, person) => {
      return oldest.age > person.age ? oldest : person;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
