/**
 * Function : check for valid name input
 * condition : 2 characters length minimum
 * @param {string} firstName.value
 * @param {string} lastName.value
 * @throws {Error}
 */
function validFirst(name) {
  let parentElement = firstName.parentElement;
  if (name.length < 2) {
    if (parentElement) {
      parentElement.setAttribute("data-error-visible", "true");
      parentElement.setAttribute("data-error", "Le prénom est trop court");
    }
    throw new Error("Le prénom est trop court");
  } else {
    if (
      parentElement &&
      parentElement.getAttribute("data-error-visible") === "true"
    ) {
      parentElement.removeAttribute("data-error-visible");
    }
  }
}

/**
 * Function : check for valid name input
 * condition : 2 characters length minimum
 * @param {string} firstName.value
 * @param {string} lastName.value
 * @throws {Error}
 */
function validLast(name) {
  let parentElement = lastName.parentElement;
  if (name.length < 2) {
    if (parentElement) {
      parentElement.setAttribute("data-error-visible", "true");
      parentElement.setAttribute("data-error", "Le nom est trop court");
    }
    throw new Error("Le nom est trop court");
  } else {
    if (
      parentElement &&
      parentElement.getAttribute("data-error-visible") === "true"
    ) {
      parentElement.removeAttribute("data-error-visible");
    }
  }
}

/**
 * Function : check for valid e-mail format
 * condition : passes the defined RegExp test
 * @param {string} emailValue
 * @throws {Error}
 */
function validEmail(emailValue, email) {
  let regExEmail = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
  let parentElement = email.parentElement;
  if (!regExEmail.test(emailValue) || emailValue === "") {
    if (parentElement) {
      parentElement.setAttribute("data-error-visible", "true");
      parentElement.setAttribute(
        "data-error",
        "Veuillez renseigner un e-mail valide"
      );
    }
    throw new Error("Veuillez renseigner un e-mail valide");
  } else {
    if (
      parentElement &&
      parentElement.getAttribute("data-error-visible") === "true"
    ) {
      parentElement.removeAttribute("data-error-visible");
    }
  }
}

/**
 * Function : check that birthdate is given and plausible
 * @param {Date} birthdateObject
 * @param {string} birthdateValue
 * @throws {Error}
 */
function validBirthdate(birthdateObject, birthdateValue, birthdate) {
  let dateTooOld = new Date("04/03/1907"); // birthdate of the current world's oldest person (dd-mm-YYYY)
  let parentElement = birthdate.parentElement;
  if (birthdateValue === "") {
    if (parentElement) {
      parentElement.setAttribute("data-error-visible", "true");
      parentElement.setAttribute(
        "data-error",
        "Veuillez entrer une date de naissance"
      );
    }
    throw new Error("Veuillez entrer une date de naissance");
  } else if (isNaN(birthdateObject.getTime())) {
    if (parentElement) {
      parentElement.setAttribute("data-error-visible", "true");
      parentElement.setAttribute(
        "data-error",
        "Veuillez entrer une date de naissance valide"
      );
    }
    throw new Error("Veuillez entrer une date de naissance valide");
  } else if (birthdateObject < dateTooOld.getTime()) {
    if (parentElement) {
      parentElement.setAttribute("data-error-visible", "true");
      parentElement.setAttribute(
        "data-error",
        "Veuillez entrer une date de naissance valide"
      );
    }
    throw new Error("Veuillez entrer une date de naissance valide");
  } else {
    if (
      parentElement &&
      parentElement.getAttribute("data-error-visible") === "true"
    ) {
      parentElement.removeAttribute("data-error-visible");
    }
  }
}

/**
 * Function : check for valid number input
 * @param {number} quantity
 * @throws {Error}
 */
function validQuantity(quantityValue, quantity) {
  let parentElement = quantity.parentElement;
  if (quantityValue === "") {
    if (parentElement) {
      parentElement.setAttribute("data-error-visible", "true");
      parentElement.setAttribute("data-error", "Veuillez indiquer un chiffre");
    }
    throw new Error("Veuillez indiquer un chiffre");
  } else if (quantityValue < 0 || quantityValue > 99) {
    if (parentElement) {
      parentElement.setAttribute("data-error-visible", "true");
      parentElement.setAttribute(
        "data-error",
        "Veuillez indiquer un chiffre valide"
      );
    }
    throw new Error("Veuillez indiquer un chiffre valide");
  } else {
    if (
      parentElement &&
      parentElement.getAttribute("data-error-visible") === "true"
    ) {
      parentElement.removeAttribute("data-error-visible");
    }
  }
}

/**
 * Function : check for a radio input
 */
function validLocation(location) {
  let checked = false; // Variable to keep track of whether any radio button is checked
  let parentElement = location1.parentElement;
  for (let i = 0; i < location.length; i++) {
    if (location[i].checked) {
      checked = true;
      if (
        parentElement &&
        parentElement.getAttribute("data-error-visible") === "true"
      ) {
        parentElement.removeAttribute("data-error-visible");
      }
      break;
    }
  }
  if (!checked) {
    if (parentElement) {
      parentElement.setAttribute("data-error-visible", "true");
      parentElement.setAttribute(
        "data-error",
        "Veuillez sélectionner un tournoi"
      );
    }
    throw new Error("Veuillez sélectionner un tournoi");
  }
}

/**
 * Function : verify mandatory checkbox is checked
 */
function validCgu(cgu) {
  let parentElement = cgu.parentElement;
  if (!cgu.checked) {
    if (parentElement) {
      parentElement.setAttribute("data-error-visible", "true");
      parentElement.setAttribute(
        "data-error",
        "Vous devez accepter les Conditions d'Utilisation"
      );
    }
    throw new Error("Vous devez accepter les Conditions d'Utilisation");
  } else {
    if (
      parentElement &&
      parentElement.getAttribute("data-error-visible") === "true"
    ) {
      parentElement.removeAttribute("data-error-visible");
    }
  }
}

/**
 * Function : displays error message when form is submitted but incorrect
 */
function invalidForm() {
  let invalidFormMessage = document.getElementById("invalidFormMessage"); // check that element does not already exist

  if (!invalidFormMessage) {
    // if it doesn't exist, create it
    const form = document.getElementById("form");
    invalidFormMessage = document.createElement("p");
    invalidFormMessage.id = "invalidFormMessage";

    form.append(invalidFormMessage);
  }

  invalidFormMessage.innerText =
    "Merci de compléter correctement votre inscription";
}

/**
 * Function : open confirmation when form is successfuly sent
 */
function openThanks() {
  // Hide the form and show the confirmation message
  form.style.display = "none";
  formThanks.style.display = "flex";
}

// Validity check of the form
function validate() {
  // DOM elements
  const form = document.getElementById("form");
  const formThanks = document.getElementById("formThanks");
  // Retrieval of the form's data
  const firstName = document.getElementById("firstName");
  const firstNameValue = firstName.value;
  const lastName = document.getElementById("lastName");
  const lastNameValue = lastName.value;
  const email = document.getElementById("email");
  const emailValue = email.value;
  const birthdate = document.getElementById("birthdate");
  const birthdateValue = birthdate.value;
  const birthdateObject = new Date(birthdateValue); // Convert birthdate string to Date object
  const quantity = document.getElementById("quantity");
  const quantityValue = quantity.value;
  const location = document.getElementsByName("location");
  const cgu = document.getElementById("checkbox1");

  // Array to store errors
  const errors = [];

  // Perform all validations
  try {
    validFirst(firstNameValue, firstName);
  } catch (error) {
    errors.push(error.message);
  }

  try {
    validLast(lastNameValue, lastName);
  } catch (error) {
    errors.push(error.message);
  }

  try {
    validEmail(emailValue, email);
  } catch (error) {
    errors.push(error.message);
  }

  try {
    validBirthdate(birthdateObject, birthdateValue, birthdate);
  } catch (error) {
    errors.push(error.message);
  }

  try {
    validQuantity(quantityValue, quantity);
  } catch (error) {
    errors.push(error.message);
  }

  try {
    validLocation(location);
  } catch (error) {
    errors.push(error.message);
  }

  try {
    validCgu(cgu);
  } catch (error) {
    errors.push(error.message);
  }

  // Handle errors
  if (errors.length > 0) {
    // Handle all errors collectively
    console.error(errors);
    invalidForm();
  } else {
    // If no errors, proceed with form submission
    openThanks();
  }
}

// Sending the form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});

// Emptying the form when refreshing the page
window.addEventListener("load", function () {
  const form = document.getElementById("form");
  form.reset();
});
