

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


function add() {
    let text = document.getElementById("test1").value;
    
    document.getElementById("list").innerHTML +=`<li>${text}</li>`;
}


