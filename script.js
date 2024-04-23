// 1. Задачка на форми :
// Створити форму та додати до неї валідації:
//   - Ім'я користувача: type:text -> перевірка: потрібна; minlength = 2;
//      Якщо порожнє вивести повідомлення: "Як тебе звати"

//  - Електронна пошта: тип: електронна пошта -> перевірка: потрібна; minlength = 3; validEmail;
//    Якщо імейл не валідний вивести повідомлення "Невірна пошта"

//  - Пароль: тип: пароль -> перевірка: обов'язкова; minlength = 8; максимальна довжина=16;
//    Якщо пусте вивести повідомлення: "Я нікому не скажу наш секрет";

//   - Напиши, яка сьогодні погода в полі інпута: тип: текст -> перевірка: потрібна;
//     Якщо текст == ""  -  вивести помилку з повідомленням "Так яка ж погода?"

//  - Виключиіи всі електронні прибори при візході з дому: type: checkbox -> validation: required;
// Якщо не вибрано вивести помилку з повідомленням: "Не забудь!"

//  Внизу дві кнопки:
// 1) Звичайний надіслати форму, якщо вона дійсна.
// 2) Кнопка Validate(Перевірити), яка запускає методи:
// - yourForm.checkValidity: і виводить на сторінку повідомлення з результатом перевірки
// - yourForm.reportValidity: викликає перевірку всіх правил і висновок повідомлень з помилкою, якщо така є

// Методи:
// form.checkValidity()
// form.reportValidity()
// Та ін

const validateBtn = document.getElementById("validateBtn");
const submitBtn = document.getElementById("submitBtn");
let formElements = document.getElementsByClassName("formElement");
let errorMessages = document.getElementsByClassName("errorMessage");
let errorText = [
  " Як тебе звати?",
  " Невірна пошта.",
  " Я нікому не скажу наш секрет.",
  " Так яка ж погода?",
];

function addCustomValidityText() {
  for (let i = 0; i < formElements.length; i++) {
    if (formElements[i].validity.valueMissing) {
      formElements[i].setCustomValidity(errorText[i]);
      console.log(formElements[i].value);
      console.log("validity");
    } else {
      formElements[i].setCustomValidity("");
    }
    if (!electricity.checked) {
      electricity.setCustomValidity(" Не забудь!");
    } else {
      electricity.setCustomValidity("");
    }
  }
}
function cleanReport() {
  for (let i = 0; i < errorMessages.length; i++) {
    errorMessages[i].innerText = "";
  }
}
function checkForm() {
  for (let i = 0; i < formElements.length; i++) {
    if (formElements[i].value === "") {
      errorMessages[i].innerText = errorText[i];
      errorMessages[i].style.color = "red";
    } else {
      errorMessages[i].innerText = "OK";
      errorMessages[i].style.color = "green";
    }
  }
}

function checkElectricity() {
  if (!electricity.checked) {
    reportElectricity.innerText = " Не забудь!";
    reportElectricity.style.color = "red";
  } else {
    reportElectricity.innerText = "OK";
    reportElectricity.style.color = "green";
  }
}
function sendBtnOn() {
  for (let i = 0; i < errorMessages.length; i++) {
    if (!formElements[i].validity.valueMissing || electricity.checked) {
      submitBtn.disabled = false;
    }
  }
}

validateBtn.addEventListener("click", function validate(e) {
  e.preventDefault;
  cleanReport();
  checkForm();
  checkElectricity();
  addCustomValidityText();
  sendBtnOn();
});

// if (username.value == "") {
//   username.setCustomValidity("Як тебе звати?");
// } else {
//   username.setCustomValidity("");
// }
// if (mail.value == "") {
//   mail.setCustomValidity("Невірна пошта.");
// } else {
//   mail.setCustomValidity("");
// }
// if (password.validity.valueMissing) {
//   password.setCustomValidity("Я нікому не скажу наш секрет.");
// } else {
//   password.setCustomValidity("");
// }
// if (weather.validity.valueMissing) {
//   weather.setCustomValidity("Так яка ж погода?");
// } else {
//   weather.setCustomValidity("");
// }
// if (electricity.checked == false) {
//   electricity.setCustomValidity(" Не забудь!");
// } else {
//   electricity.setCustomValidity("");
// }

// function checkName() {
//   if (name.value == "") {
//     reportName.innerText = " Як тебе звати?";
//   }
// }
// function checkMail() {
//   if (mail.value == "") {
//     reportMail.append(" Невірна пошта.");
//   }
// }
// function checkPassword() {
//   if (password.value == "") {
//     reportPassword.append(" Я нікому не скажу наш секрет.");
//   }
// }
// function checkWeather() {
//   if (weather.value == "") {
//     reportWeather.append(" Так яка ж погода?");
//   }
// }
