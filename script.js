function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user && pass) {
        localStorage.setItem("greeninsight-login", "true");
        showContent();
    } else {
        alert("Isi username dan password!");
    }
}

function logout() {
    localStorage.removeItem("greeninsight-login");
    location.reload();
}

function showContent() {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("content").style.display = "block";
}

// Auto login
if (localStorage.getItem("greeninsight-login") === "true") {
    showContent();
}
