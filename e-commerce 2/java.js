let xhr = new XMLHttpRequest();
    let btn = document.getElementById('btn');
    btn.addEventListener('click',()=> {
        xhr.send();

    });


 xhr.open("get",'https://fakestoreapi.com/products');


 console.log("xhr:",xhr);

 xhr.onreadystatechange = function() {
    console.log("readystate", xhr.readyState);
    console.log("statusCode:", xhr.status);

    let content = document.getElementById('section');

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

               
                <p>${parsed_response[i].title}</p>
                <p>${parsed_response[i].price}</p>
                
                <p>${parsed_response[i].category}</p>
                <p><img src=" ${parsed_response[i].image}" alt="" width="100px" height="100px"></p>
                <p>${parsed_response[i].rating}</p>
                <p>${parsed_response[i].rate}</p>
                
                
                
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



//  <p>${parsed_response[i].id}</p>
// <p>${parsed_response[i].description}</p>
// <p>${parsed_response[i].count}</p>