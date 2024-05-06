const form = document.getElementById("form");

form.addEventListener("submit", function (e) {

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const telefone = document.getElementById("telefone");
    const password = document.getElementById("password");
    const cidade = document.getElementById("cidade");
    const estado = document.getElementById("estado");

    e.preventDefault();

    const userData = JSON.stringify({
        name: name.value,
        email: email.value,
        phone: telefone.value,
        password: password.value,
        city: cidade.value,
        state: estado.value,
        image: ""
    });

    fetch("http://10.92.198.38:3001/signup", {
        method: "POST",
        body: userData,
        headers:{
            "Content-Type": "application/json; charset=utf-8"
        }
    })
    .then((result) => result.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
    
})
