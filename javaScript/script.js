let submitBottun = document.getElementById('submitBtn');

let conditions1 = function(event) {

    let email1 = document.getElementById("email").value;
    let number1 = document.getElementById("number").value;
    let name1 = document.getElementById("name_").value;
    let message1 = document.getElementById("message").value;
    let phoneError1 = document.getElementById("numberError");
    let nameError1 = document.getElementById("nameError");
    let messageError1 = document.getElementById("messageError");
    let emailError1 = document.getElementById("emailError");

    let sentMessage1 = document.getElementById("sentMessage");

    if (name1 === "") {
        nameError1.textContent = "Name is required";
        event.preventDefault();
    } else if (name1.length < 3 || name1.length > 25) {
        nameError1.textContent = "Name must be 3-25 characters";
        event.preventDefault();
    } else {
        nameError1.textContent = "";
    }
    if (email1 === "" && number1 === "") {
        phoneError1.textContent = "Phone number or Email are required";
        event.preventDefault();
    } else {
        phoneError1.textContent = "";
        if (email1 && !/^.+@.+\..+$/.test(email1)) {
            emailError1.textContent = "The pattern of the EMAIL should be example@exm.exm";
            event.preventDefault();
        } else {
            emailError1.textContent = "";
        }
        if (number1) {
            if (number1.length !== 10 || !/[0-9]+/.test(number1)) {
                phoneError1.textContent = "Phone number should be 10 digits long";
                event.preventDefault();
            } else {
                phoneError1.textContent = "";
            }
        }
    }
    if (message1 === "") {
        messageError1.textContent = "Message is required";
        event.preventDefault();
    } else {
        messageError1.textContent = "";
    }
    //sentMessage1.textContent = "Message has been sent, I will be in touch soon!"
}

submitBottun.addEventListener('click', conditions1);

/*document.getElementById("contactForm").onclick("submit", function(event) {
    // Get input values
    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Validate inputs
    if (name.length < 3 || name.length > 25) {
        alert("Name must be between 3 and 25 characters");
        event.preventDefault();
    } else if (message.trim() === "") { // Also check if message is not just whitespace
        alert("Message cannot be empty");
        event.preventDefault();
    } else if (!number && !email) { // If neither number nor email is filled
        alert("Either Number or Email must be filled");
        event.preventDefault();
    } else if (number && number.length !== 10) { // If number is filled, it must be 10 characters
        alert("Number must be 10 characters");
        event.preventDefault();
    } else if (email && !email.includes("@")) { // If email is filled, it must be in email format
        alert("Invalid Email Format");
        event.preventDefault();
    }
});*/