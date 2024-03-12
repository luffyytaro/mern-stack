function addLogin() {
    let username = document.querySelector("#user").value;
    let password = document.querySelector("#pass").value;
    
    fetch("/api/login", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username, password})
    })

    .then(res=> res.json())
    .then(data =>{
        // input.value = "";
        console.log(data);
        alert(data.msg);
    })
    .catch(error =>{
        console.log(error);
        alert("user not found");
    });
}