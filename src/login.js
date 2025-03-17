document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("loginBtn").addEventListener("click", (event) => {
        event.preventDefault();

        let email = document.getElementById("loginEmail").value.toLowerCase();
        let password = document.getElementById("loginPassword").value;
        let loginResponseMessage = document.getElementById("loginResponseMessage");

        loginResponseMessage.innerText = "";
        loginResponseMessage.style.display = "block";

        
        let storedEmail = localStorage.getItem("email");
        let storedPassword = localStorage.getItem("password");

        if (!storedEmail || !storedPassword) {
            loginResponseMessage.innerText = "No registered user found. Please register first!";
            loginResponseMessage.style.color = "red";
            return;
        }

        if (storedEmail !== email) {
            loginResponseMessage.innerText = "Email not found. Please register first!";
            loginResponseMessage.style.color = "red";
            return;
        }

        if (storedPassword !== password) {
            loginResponseMessage.innerText = "Incorrect password. Try again!";
            loginResponseMessage.style.color = "red";
            return;
        }

        loginResponseMessage.innerText = "Login successful! Redirecting...";
        loginResponseMessage.style.color = "green";

        
        localStorage.setItem("loggedInUser", email);

        setTimeout(() => {
            window.location.href = "index.html"; 
        }, 2000);
    });
});
