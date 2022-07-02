
// Для элементов массивов monday и tuesday необходимо выполнить следующие методы:
// Сконвертировать время потраченное на выполнение задач в часы, вместо минут.

// Оставить только те задачи, на выполнение которых нужно менее 2-х часов.

// Умножить результат на часовую ставку (amount) и добавить 
// полученное значение в качестве третъего элемента в массив.

// Вывести в html таблицу, которая состоит из ячеек с задачами в виде:
let amount = 100;
let monday = [
  ['Write a tutorial',180],
  ['Some web development',120]
];
let tuesday = [
  ['Keep writing that tutorial',240],
  ['Some more web development',360],
  ['A whole lot of nothing',240]
];
let trs = [];

let tasks = monday.concat(tuesday)
.map(
    function(task) {
        task[1] /= 60;
        return task;
    }
)
.filter(
    function(task) {
        return task[1] > 2;
    }
)
.map(
    function(task) {
        let price = task[1] * amount;
        task.push(price);
        return task;
    }
)
.forEach(
    function(task) {
        trs.push(`
            <tr>
                <td>Task name: ${task[0]}</td>
                <td>Taks duration: ${task[1]} hours</td>
                <td>Task amount: $${task[2]}</td>
            </tr>
        `)
    }
);

document.write(`<table>${trs.join('')}</table>`);