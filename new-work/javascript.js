

// function add (){
// let num1 = Number(document.getElementById("test1").value);
// let num2 = Number(document.getElementById("test2").value);
// let sum = num1 + num2;

// document.getElementById("sum").value= sum;
// }


// function add () {
//     let text1 = document.getElementById("name1").value;
//     let result = text1;

//     document.getElementById("result").value =result;
// }

// function add() {
//     let text2 = document.getElementById("name2").value;
//     let result1 = text2;
//     document.getElementById("result1").value = result1;
// }

// function add() {
//     let text3 = document.getElementById("name3").value;
//     let result2 = text3;
//     document.getElementById("result2").value = result2;
// }


// let input = promt("bcsjab");

let todos = [];

function add() {
    let todo = document.getElementById("test1").value;
    todos.push(todo);
    print();
}

function print(){
    document.getElementById("list").innerHTML ="";
    todos.forEach((item,index) =>{
        let li= `<li>${item}
        <button onclick="del(${index})">delete</button>
        <button onclick="edit(${index})">edit</button>
        </li>`;
        document.getElementById("list").innerHTML +=li;
    })
}

function del(index) {
    todos = todos.filter((item,ind) =>index != ind);
    print();
}

function edit(index) {
    let newTodo = prompt("enter new todo:");
    todos[index] = newTodo;
    // todos = todos.map((item,ind) =>index == ind? newTodo :item);
    print();
}


