const myTodos = [
  'Pray in Mosque(Subuh)',
  'Jogging',
  'Breakfast',
  'Coding',
  'Lunch Time',
];

// 1. convert array to array object -> text, completed
// 2. create function to remove a todo by text value

const todos = [
  {
    text: 'Pray in Mosque',
    completed: true,
  },
  {
    text: 'Jogging',
    completed: false,
  },
  {
    text: 'Breakfast',
    completed: true,
  },
  {
    text: 'Coding',
    completed: false,
  },
  {
    text: 'Lunch Time',
    completed: true,
  },
];

// Sorting Arrays Object
const sortTodos = function (todos) {
  todos.sort(function (a, b) {
    if (a.completed === false && b.completed === true) {
      return -1;
    } else if (b.completed === true && a.completed === false) {
      return 1;
    } else {
      return 0;
    }
  });
};

sortTodos(todos);
console.log(todos);

//=============================//
// fungsi lowercase untuk menonaktifkan uppercase.
const deleteTodo = function (todos, todoText) {
  const index = todos.findIndex(function (todo) {
    return todo.text.toLowerCase() === todoText.toLowerCase();
  });

  if (index > -1) {
    todos.splice(index, 1);
  }
};

const getThingToDo = function (todos) {
  return todos.filter(function (todos) {
    return !todos.completed;
  });
};

// console.log(getThingToDo(todos));

// deleteTodo(todos, 'Lunch Time');
// console.log(todos);

//============================//

// Create an array with five todos
// You have x todos
// Print the first and second to last items -> Todo: walk the dog

/*
for (count = 0; count < myTodos.length; count++) {
  const num = count + 1;
  const todos = myTodos[count];
  console.log(`${num}. ${todos}`);
}
*/

// console.log(`You have ${myTodos.length} todos!`);
// console.log(myTodos);

// it's very recommended better than for loop

/*
    myTodos.forEach(function (items, indexs) {
      const number = indexs + 1;
      console.log(`${number}. ${items}`);
    });

*/

//==========================//

// Delete the 3rd item
// Add a new item onto the end
// Remove the first item from the list

/*
  myTodos.splice(2, 1);
  myTodos.push('Watch TV');
  myTodos.shift();
  console.log(myTodos);

*/

//====================//

// 1. The first item
// 2. The Second item

// console.log(`Todo 1: ${myTodos[0]}`);
// console.log(`Todo 5: ${myTodos[myTodos.length - 1]}`);
