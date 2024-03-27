/**
 * Function : check for valid name input
 * condition : 2 characters length minimum
 * @param {string} firstName.value
 * @param {string} lastName.value
 * @throws {Error}
 */
function validName(name) {
  if (name.length < 2) {
    throw new Error("Le nom est trop court"); // renvoie une erreur si le nom a une longueur < 2
  }
}

/**
 * Function : check for valid e-mail format
 * condition : passes the defined RegExp test
 * @param {string} email.value
 * @throws {Error}
 */
function validEmail(email) {
  let regExEmail = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
  if (!regExEmail.test(email)) {
    throw new Error("Veuillez renseigner un e-mail valide");
  }
}

/**
 * Function : check that birthdate is given and plausible
 * @param {Date} birthdate
 * @param {string} birthdateValue
 * @throws {Error}
 */
function validBirthdate(birthdate, birthdateValue) {
  let dateTooOld = new Date("04/03/1907"); // birthdate of the current world's oldest person (dd-mm-YYYY)
  if (birthdateValue === "") {
    throw new Error("Veuillez entrer une date de naissance");
  } else if (isNaN(birthdate.getTime())) {
    throw new Error("Veuillez entrer une date de naissance valide");
  } else if (birthdate < dateTooOld.getTime()) {
    throw new Error("Veuillez entrer une date de naissance valide");
  }
}

/**
 * Function : check for valid number input
 * @param {number} quantity
 * @throws {Error}
 */
function validQuantity(quantity) {
  if (quantity === "") {
    throw new Error("Veuillez indiquer un chiffre");
  } else if (quantity < 0 || quantity > 99) {
    throw new Error("Veuillez indiquer un chiffre valide");
  }
}

/**
 * Function : check for a radio input
 */
function validLocation(location) {
  let checked = false; // Variable to keep track of whether any radio button is checked
  for (let i = 0; i < location.length; i++) {
    if (location[i].checked) {
      checked = true;
      break;
    }
  }
  if (!checked) {
    throw new Error("Veuillez sélectionner un tournoi");
  }
}

/**
 * Function : verify mandatory checkbox is checked
 */
function validCgu(cgu) {
  if (!cgu.checked) {
    throw new Error(
      "Vous devez accepter les Conditions Générales d'Utilisation"
    );
  }
}

/**
 * Function : open confirmation when form is successfuly sent
 */
function openThanks() {
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
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const birthdateValue = document.getElementById("birthdate").value;
  const birthdate = new Date(birthdateValue); // Convert birthdate string to Date object
  const quantity = document.getElementById("quantity");
  const location = document.getElementsByName("location");
  const cgu = document.getElementById("checkbox1");

  // Check that all the data is valid
  try {
    validName(firstName.value);

    validName(lastName.value);

    validEmail(email.value);

    validBirthdate(birthdate);

    validQuantity(quantity.value);

    validLocation(location);

    validCgu(cgu);

    openThanks();
  } catch (error) {
    alert("Merci de compléter correctement votre inscription");
  }
}

// Sending the form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});

// add : empty form when sent
