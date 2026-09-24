const form = document.getElementById("studentForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const course = document.getElementById("course").value;
    const agree = document.getElementById("agree").checked;

    const message = document.getElementById("message");

    if (fullName === "") {
        message.textContent = "Введите ФИО";
        message.style.color = "red";
        return;
    }

    if (email === "" || !email.includes("@")) {
        message.textContent = "Введите корректный e-mail";
        message.style.color = "red";
        return;
    }

    if (course === "") {
        message.textContent = "Выберите курс";
        message.style.color = "red";
        return;
    }

    if (!agree) {
        message.textContent = "Подтвердите согласие с правилами";
        message.style.color = "red";
        return;
    }

    message.textContent = "Форма заполнена корректно!";
    message.style.color = "green";
});
