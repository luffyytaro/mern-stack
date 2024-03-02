function addTodo() {
    let input = document.querySelector("#todo");
    let todo = input.value;
    
    fetch("/api/setTodo", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({todo})
    })

    .then(res=> res.json())
    .then(data =>{
        input.value = "";
        print();
        alert(data.msg);
    })
    .catch(error =>{
        console.log(error);
        alert("couldn't add todo");
    })
}

function print() {
    let list = document.querySelector("#list");
    fetch("/api/getTodo")
    .then(res => res.json())
    .then(data => {
        list.innerHTML = "";
        data.result.forEach(item=> {
            let li = `<li>
            <span>
            ${item.text}
            </span>

            <button onclick="update('${item._id}')">UPDATE</button>
            <button onclick ="del('${item._id}')">DELETE</button>
            </li>`;
            list.innerHTML += li;

        })
    })
}

print();

function update(id){
    let newTodo = prompt("enter new todo");
    fetch
    ("/api/editTodo",{
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({newTodo, id})
    })
    .then(res=> res.json())
    .then(data =>{
        print();
        alert(data.msg);
    })
    .catch(error =>{
        console.log(error);
        alert("couldn't update todo");
    })
}

function del(id) {
    fetch
    ("/api/delTodo",{
        method: "delete",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id})
    })
    .then(res=> res.json())
    .then(data =>{
        print();
        alert(data.msg);
    })
    .catch(error =>{
        console.log(error);
        alert("couldn't deleted todo");
    })
}