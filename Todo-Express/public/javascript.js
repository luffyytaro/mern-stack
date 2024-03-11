function addDetail() {
    let username = document.querySelector("#username").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    
    
    fetch("/api/register", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username, email, password})
    })

    .then(res=> res.json())
    .then(data =>{
        // input.value = "";
        // print();
        console.log(data);
        location.href = "/login.html"
        alert("successful registration");
    })
    .catch(error =>{
        console.log(error);
        alert("couldn't add todo");
    });
}