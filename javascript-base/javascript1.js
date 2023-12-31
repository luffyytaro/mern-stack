//Synchronous Single Threaded Language

//there are two types-synchronous and asynchronous
//Javascript logs synchronous first then only asynchronous will be checked,if a asynchronous data came before a synchronous ,even though they came first the priority is synchronous.


console.log("first line");
console.log("second line");

// setTimeout(()=> {
//     console.log("from setTimeOut...");
// },2000);

let datas = fetch("")
console.log("datas:",datas);//microtask queue has higher priority

console.log("third line");


//web space development
//Jaascript engine - callback queue and microtask queue (higher priority)
//Event Loop
//Call Stack


    let xhr = new XMLHttpRequest();
    let btn = document.getElementById('btn');
    btn.addEventListener('click',()=> {
        xhr.send();

    });
 //GET 
 //POST
 //PUT
 //DELETE

 xhr.open("get",'https://jsonplaceholder.typicode.com/users');


 console.log("xhr:",xhr);

 xhr.onreadystatechange = function() {
    console.log("readystate", xhr.readyState);
    console.log("statusCode:", xhr.status);

    let content = document.getElementById('content');

    if (xhr.readyState==4) {
        if(xhr.status==200) {

            let response = xhr.response;
            console.log("response:",response);
            console.log("types of response:",response);

            let parsed_response = JSON.parse(response);
            console.log("parsed_response:",parsed_response);
            console.log("types of parsed_response:",typeof(parsed_response));

            datas = '';
            for(let i=0;i<parsed_response.length;i++) {
                datas=datas+ `
                <tr>
                <td>${parsed_response[i].id}</td>
                <td>${parsed_response[i].name}</td>
                <td>${parsed_response[i].username}</td>
                <td>${parsed_response[i].website}</td>
                </tr>
                `
            }

            content.innerHTML = datas;


        }else {
            console.log("failed");
        }
    }else{
        console.log("state not completed");
    }
 }
