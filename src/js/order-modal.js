import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const backdrop = document.querySelector(".order-backdrop");
const modalCloseBtn = document.querySelector(".order-modal-btn");
const form = document.querySelector(".order-modal-form");
const sendBtn = document.querySelector(".send-button");
const nameInput = document.querySelector("#user-name");
const phoneInput = document.querySelector("#user_phone");


const nameError = nameInput
  .closest(".order-modal-form-field")
  .querySelector(".error-message");

const phoneError = phoneInput
  .closest(".order-modal-form-field")
  .querySelector(".error-message");


// вiдкриття модалки
function openModal() {
  backdrop.classList.add("is-open");
  document.body.classList.add("no-scroll");
}

function closeModal() {
  backdrop.classList.remove("is-open");
  document.body.classList.remove("no-scroll");

  form.reset();

  clearError(nameInput, nameError);
  clearError(phoneInput, phoneError);


  updateSendButtonState();
}

modalCloseBtn.addEventListener("click", closeModal);

backdrop.addEventListener("click", e => {
  if (e.target === backdrop) {
    closeModal();
  }
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeModal();
  }
});

function showError(input, errorBlock, message = "Error") {
  input.classList.add("error");
  errorBlock.textContent = message;
}

function clearError(input, errorBlock) {
  input.classList.remove("error");
  errorBlock.textContent = "";
}

sendBtn.disabled = true;
sendBtn.classList.add("disabled");

function updateSendButtonState() {
  const nameValid = nameInput.value.trim() !== "";
  const phoneValid = /^380\d{9}$/.test(phoneInput.value.trim());

  sendBtn.disabled = !(nameValid && phoneValid);

  if (sendBtn.disabled) {
    sendBtn.classList.add("disabled");
  } else {
    sendBtn.classList.remove("disabled");
  }
}

function validateForm() {
  let valid = true;

  if (!nameInput.value.trim()) {
    showError(nameInput, nameError, "Введіть ім'я");
    valid = false;
  } else {
    clearError(nameInput, nameError);
  }

  if (!/^380\d{9}$/.test(phoneInput.value.trim())) {
    showError(
      phoneInput,
      phoneError,
      "Введіть 12-значний номер телефону, починаючи з 380"
    );
    valid = false;
  } else {
    clearError(phoneInput, phoneError);
  }

  updateSendButtonState();

  return valid;
}

[nameInput, phoneInput].forEach(input => {
    const errorBlock = input
    .closest(".order-modal-form-field, .order-modal-form-comment")
    .querySelector(".error-message");
    
  input.addEventListener("blur", () => {
    if (input === phoneInput) {
      if (!/^380\d{9}$/.test(input.value.trim())) {
        showError(input, errorBlock, "Невірний формат телефону");
      }
    } else if (input.value.trim() === "") {
      showError(input, errorBlock, "Поле обов'язкове");
    } else {
      clearError(input, errorBlock);
    }

    updateSendButtonState();
  });

  input.addEventListener("input", () => {
    clearError(input, errorBlock);
    updateSendButtonState();
  });
});

form.addEventListener("submit", async event => {
  event.preventDefault();
   let animalId = null;
  animalId = document.querySelector('.pet-card-btn').dataset.id;

  if (!validateForm()) return;

  if (!animalId) {
    iziToast.error({
      title: "Помилка",
      message: "Не обрано тварину",
      position: "topRight",
    });
    return;
  }
 

  const { name, phone, comment } = form.elements;

  const payload = {
    name: name.value.trim(),
    phone: phone.value.trim(),
    comment: comment.value.trim() || undefined,
    animalId: animalId,
  };

  try {
    await axios.post(
      "https://paw-hut.b.goit.study/api/orders",
      payload
    );

    iziToast.success({
      title: "Успішно",
      message: "Заявку відправлено",
      position: "topRight",
    });

    closeModal();
  } catch (error) {
    iziToast.error({
      title: "Помилка",
      message: "Не вдалося відправити заявку",
      position: "topRight",
    });
  }
});