let people = [
    { id: 1, name: "Alex" },
    { id: 2, name: "Dimon" },
    { id: 3, name: "Troy" }
];

// Поиск по id
let person = people.find(item => item.id === 2);
console.log(person); // { id: 2, name: "Dimon" }

// Индекс элемента
let index = people.findIndex(item => item.id === 3);
console.log(index); // 2