var salaries = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400
  };
  console.log(salaries['Вася']); // 300
  console.log(salaries.Коля); // 200 (если ключ без пробелов)

  salaries['Даша'] = 500;
console.log(salaries); // {Коля: 200, Вася: 300, Петя: 400, Даша: 500}

var students = {
    boys: ['Коля', 'Вася'],
    girls: ['Даша', 'Маша']
  };
  console.log(students.boys[0]); // "Коля"