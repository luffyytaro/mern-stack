function addDetail() {
    let input = document.querySelector("#LOGIN");
    let LOGIN = input.value;
    
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
        print();
        alert("error occured");
    })
    .catch(error =>{
        console.log(error);
        alert("couldn't add todo");
    });
}