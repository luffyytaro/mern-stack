
let list = document.getElementById("list");

fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.products.forEach(item => {
            let li =
                `<li>
                <img src="${item.thumbnail}" width = "200" />
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        </li>`;
         

            list.innerHTML += li;


        })
    })

    .catch(error => console.log(error));