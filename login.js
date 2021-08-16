/*==================
*   Login Submit
==================*/
document.getElementById('login').addEventListener('click', function() {
    // user Email
    let userEmailField = document.getElementById('email');
    let userEmail = userEmailField.value;

    // user password
    let userPasswordField = document.getElementById('password');
    let userPassword = userPasswordField.value;

    if (userEmail == 'raihanuddin0000@gmail.com' && userPassword == '123456') {
        window.location.href = "banking.html"; // for own window
        //window.open("banking.html", "_blank"); //==> for new window
        // document.getElementById('abc').setAttribute('href', "banking.html"); //=> using a tag
    } else if (userEmail == '' && userPassword == '') {
        alert("Enter email and password!");
    } else {
        alert("Username and password not mathed!");
    }
});