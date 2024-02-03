let xhr = new XMLHttpRequest();
    let btn = document.getElementById('button');
    btn.addEventListener('click',()=> {
        xhr.send();

    });


 xhr.open("get",'https://dummyjson.com/products');


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

            let parsed_response = JSON.parse(response).products;
            console.log(parsed_response);
            console.log("parsed_response:",parsed_response);
            console.log("types of parsed_response:",typeof(parsed_response));

            datas = '';
            for(let i=0;i<parsed_response.length;i++) {
                datas=datas+ `
                <tr>
                <td>${parsed_response[i].id}</td>
                <td>${parsed_response[i].title}</td>
                <td>${parsed_response[i].price}</td>
                <td>${parsed_response[i].rating}</td>
                <td>${parsed_response[i].category}</td>
                <td><img src=" ${parsed_response[i].images}" alt=""></td>
                <tr/>
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