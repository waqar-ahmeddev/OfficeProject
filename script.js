let btn = document.getElementById('bt');
let btnSignOut = document.getElementById('sign-out');

if (btn) {
    btn.addEventListener("click", handleLogin);
}

function handleLogin(e) {
    e.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email !== "" && password !== "") {
        window.location.href = "Dashboard.html";
    } else {
        alert("Please fill both Email and Password!");
    }
}

if (btnSignOut) {
    btnSignOut.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "index.html";
    });
}