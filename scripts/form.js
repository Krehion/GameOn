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
 * @throws {Error}
 */
function validBirthdate(birthdate) {
  let dateTooOld = new Date("04/03/1907"); // birthdate of the current world's oldest person (dd-mm-YYYY)
  if (birthdate === "") {
    throw new Error("Veuillez entrer une date de naissance");
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
  for (let i = 0; i < location.length; i++) {
    if (!location[i].checked) {
      break;
    } else {
      throw new Error("Veuillez sélectionner un tournoi");
    }
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

// Validity check of the form
function validate() {
  // Retrieval of the form's data
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const birthdate = document.getElementById("birthdate");
  const valueBirthdate = birthdate.getTime();
  const quantity = document.getElementById("quantity");
  const location = document.getElementsByName("location");
  const cgu = document.getElementById("checkbox1");

  // Check that all the data is valid
  try {
    validName(firstName.value);

    validName(lastName.value);

    validEmail(email.value);

    validBirthdate(valueBirthdate);

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
