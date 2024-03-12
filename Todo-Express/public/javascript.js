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

    .then(res=> {
        if (res.status == 201) location.href = "/login.html"
        return res.json()
    })
    .then(data =>{
        // input.value = "";
        // print();
        console.log(data);
        // location.href = "/login.html"
        alert(data.msg);
    })
    .catch(error =>{
        console.log(error);
        alert("authorization failed");
    });
}