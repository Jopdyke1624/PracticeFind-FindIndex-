// do While Loop
let result = "";
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 1000);

console.log(result);

//object with keys and values of person
const person = {
  firstName: "Jane",
  lastName: "Doe",
  birthdate: "Jan 5, 1925",
  gender: "female",
};

console.log(person);

// object keys
const personKeys = () => {
  console.log(Object.keys(person));
};
personKeys();

//Object Entries
const personEntries = () => {
  console.log(Object.entries(person));
};
personEntries();

const arrayOfPersons = [
  {
    firstName: "Captain",
    lastName: "America",
    birthdate: "Jan 5, 1925",
    gender: "male",
  },
  {
    firstName: "Spider",
    lastName: "Man",
    birthdate: "July 5, 1995",
    gender: "male",
  },
  {
    firstName: "Black",
    lastName: "Widdow",
    birthdate: "Oct 5, 1986",
    gender: "female",
  },
];

// console.log(arrayOfPersons)
const oddBirthYear = () => {
  for (const element of arrayOfPersons) {
    if (parseInt(element.birthdate.slice(-4)) % 2 == 1) {
      console.log(`${parseInt(element.birthdate.slice(-4))} is a odd Year`);
    } else return false;
  }
};

oddBirthYear();

const map1 = arrayOfPersons.map((info) => {
  return info;
});

console.log(map1);

const males = arrayOfPersons.filter((male) => {
  return male.gender === "male";
});

console.log(males);

// function for birthdate befor jan 1 1990
const younger = () => {
  for (const birth of arrayOfPersons) {
    if (parseInt(birth.birthdate.slice(-4)) < 1990) {
      console.log(
        birth.firstName + " " + birth.lastName + " " + birth.birthdate
      );
    } else return false;
  }
};

younger();
