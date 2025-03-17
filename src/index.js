document.getElementById("registerBtn").addEventListener("click", (event) => {
    event.preventDefault();

    let fullName = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phone").value;
    let age = document.getElementById("age").value;
    let dob = document.getElementById("dob").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let nameMessage = document.getElementById("nameMessage");
    let emailMessage = document.getElementById("emailMessage");
    let phoneMessage = document.getElementById("phoneNumberMessage");
    let ageMessage = document.getElementById("ageMessage");
    let dobMessage = document.getElementById("dobMessage");
    let passwordMessage = document.getElementById("passwordMessage");
    let confirmPasswordMessage = document.getElementById("confirmPasswordMessage");
    let responseMessage = document.getElementById("responseMessage");

    nameMessage.innerText = emailMessage.innerText = phoneMessage.innerText = "";
    ageMessage.innerText = dobMessage.innerText = passwordMessage.innerText = confirmPasswordMessage.innerText = responseMessage.innerText = "";

    let hasError = false; 

    if (!fullName) {
        nameMessage.innerText = " dont be unfortunate Fill in your name!";
        nameMessage.style.color = "red";
        hasError = true;
    }
    if (!email) {
        emailMessage.innerText = "Enter your email!";
        emailMessage.style.color = "red";
        hasError = true;
    }
    if (!phoneNumber) {
        phoneMessage.innerText = "Enter your phone number!";
        phoneMessage.style.color = "red";
        hasError = true;
    }
    if (!age) {
        ageMessage.innerText = "Enter your age!";
        ageMessage.style.color = "red";
        hasError = true;
    }
    if (!dob) {
        dobMessage.innerText = "Enter your date of birth!";
        dobMessage.style.color = "red";
        hasError = true;
    }
    if (!password) {
        passwordMessage.innerText = "Set a password!";
        passwordMessage.style.color = "red";
        hasError = true;
    } else if (password.length < 6) {
        passwordMessage.innerText = "Password must be at least 6 characters!";
        passwordMessage.style.color = "red";
        hasError = true;
    }
    if (confirmPassword !== password) {
        confirmPasswordMessage.innerText = "Passwords do not match!";
        confirmPasswordMessage.style.color = "red";
        hasError = true;
    }

    if (hasError) {
        responseMessage.innerText = "Please fix errors!";
        responseMessage.style.color = "red";
        return;
    }

    
    let storedEmail = localStorage.getItem("email");
    if (storedEmail === email) {
        responseMessage.innerText = "Email already exists! Redirecting to login...";
        responseMessage.style.color = "blue";

        setTimeout(() => {
            window.location.href = "login.html";
        }, 2000);
        return;
    }

   
    localStorage.setItem("fullname", fullName);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phoneNumber);
    localStorage.setItem("age", age);
    localStorage.setItem("dob", dob);
    localStorage.setItem("password", password);

    responseMessage.innerText = "Registration successful! Processing...";
    responseMessage.style.color = "green";

    
    document.getElementById("registerForm").reset();

    setTimeout(() => {
        window.location.href = "login.html";
    }, 2000);
});
