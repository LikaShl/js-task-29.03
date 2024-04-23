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
const submitBTN = document.getElementById("submitBtn");
let formElements = document.getElementsByClassName("formElement");
let errorMessages = document.getElementsByClassName("errorMessage");
let isNotValid = "";
let errorText = [
  " Як тебе звати?",
  " Невірна пошта.",
  " Я нікому не скажу наш секрет.",
  " Так яка ж погода?",
];

function changeValidityText() {
  for (let i = 0; i < formElements.length; i++) {
    // if (formElements[i].value === isNotValid) {
    if (formElements[i].value.valueMissing) { //!!!!!!!!!!!!!!!! от тут
      
      formElements[i].setCustomValidity(errorText[i]);
      console.log("valifity");
      console.log(formElements[i].value)
    } else {
      formElements[i].setCustomValidity("");
    }
    formElements[i].reportValidity();
  }
  if (electricity.checked == false) {
    electricity.setCustomValidity(" Не забудь!");
  } else {
    electricity.setCustomValidity("");
  }
}

function cleanReport() {
  for (let i = 0; i < errorMessages.length; i++) {
    errorMessages[i].innerText = "";
  }
}
function checkForm() {
  for (let i = 0; i < formElements.length; i++) {
    if (formElements[i].value == isNotValid) {
      errorMessages[i].innerText = errorText[i];
    }
  }
}

function checkElectricity() {
  if (electricity.checked == false) {
    reportElectricity.innerText = " Не забудь!";
  }
}
validateBtn.addEventListener("click", function validate() {
  cleanReport();
  checkForm();
  checkElectricity();
});
changeValidityText();
// 2. Завдання:
// Створити список справ, до якого можна:
// - Додати новий елемент
//  - Видалити елемент
//  - Задати що пункт виконано
// Методи:
// document.createElement,
// el.appendChild

let addNewTaskBtn = document.getElementById("addNewTaskBtn");
addNewTaskBtn.addEventListener("click", function () {
  let todoList = document.getElementById("todoList");
  let newTask = document.createElement("li");
  todoList.appendChild(newTask);
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  newTask.appendChild(checkbox);
  let todoText = document.createElement("span");
  newTask.appendChild(todoText);
  let newTaskAdd = document.getElementById("newTaskAdd");
  todoText.innerText = ` ${newTaskAdd.value} `;
  let removeBtn = document.createElement("button");
  removeBtn.innerText = "Remove";
  newTask.appendChild(removeBtn);
  newTaskAdd.value = "";

  removeBtn.addEventListener("click", function () {
    removeBtn.parentElement.remove();
  });

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      todoText.style.textDecoration = "line-through";
    }
  });
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
