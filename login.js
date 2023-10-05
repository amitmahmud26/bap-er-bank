// clicking the login button
document.getElementById("btn-submit").addEventListener('click', function(){
    const emailField = document.getElementById("user-email");
    const email = emailField.value;

    const passwordField = document.getElementById("user-password");
    const password = passwordField.value;
    // console.log(email);
    // console.log(password);
    if(email === "shontan@baap.com" && password === "secret"){
        window.location.href = 'bank.html';
    }
    else
        alert("Wrong Password!")
});
