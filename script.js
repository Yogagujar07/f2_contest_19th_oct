/** @format */

let arr = [
  {
    id: 1,
    name: "john",
    age: "18",
    profession: "developer",
  },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  const developers = arr
    .map((person) => {
      if (person.profession === "developer") {
        return person;
      }
    })
    .filter((person) => person);
  console.log(developers);
}

function PrintDeveloperbyForEach() {
  arr.forEach((person) => {
    if (person.profession === "developer") {
      console.log(person);
    }
  });
}

function addData() {
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  if (arr[3]?.id != 4) {
    arr.push(newEmployee);
  }
  console.log(arr);
}

function removeAdmin() {
  const updatedArray = arr.filter((person) => person.profession !== "admin");
  console.log(updatedArray);
}

function concatenateArray() {
  const newEmployees = [
    { id: 5, name: "alice", age: "23", profession: "designer" },
    { id: 6, name: "bob", age: "24", profession: "manager" },
    { id: 7, name: "charlie", age: "22", profession: "analyst" },
  ];
  const combinedArray = arr.concat(newEmployees);
  console.log(combinedArray);
}
