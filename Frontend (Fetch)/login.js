const form = document.getElementById("form");

form.addEventListener("submit", function (e) {

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    e.preventDefault();

    const userData = JSON.stringify({
        email: email.value,
        password: password.value,
    });

    fetch("http://10.92.198.38:8080/auth/singin", {
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
