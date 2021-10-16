const header = document.querySelector("header");
const article = document.querySelector("article");
const table = document.querySelector("table");
const tBody = document.querySelector("tbody");

const nameField = document.querySelector(".name");
const dateField = nameField.nextElementSibling;
const amountField = dateField.nextElementSibling;

const error = document.createElement("p");

const nameForm = article.children[0];
const dateForm = article.children[1];
const amountForm = article.children[2];
const button = article.children[3];

const nameInput = nameForm.children[1];
const dateInput = dateForm.children[1];
const amountInput = amountForm.children[1];

let x = 0;

button.addEventListener("click", () => {
  if (
    nameInput.value.length > 0 &&
    dateInput.value.length > 0 &&
    amountInput.value.length > 0 &&
    x === 0
  ) {
    nameField.innerText = nameInput.value;
    dateField.innerText = dateInput.value;
    amountField.innerText = amountInput.value;
    x = 1;

    // Reset Fields
    nameInput.value = "";
    nameInput.setAttribute("placeholder", "where was the expense made");
    dateInput.value = "initial";
    amountInput.value = "initial";
    error.innerText = "";
    // error Message
  } else if (
    nameInput.value.length > 0 &&
    dateInput.value.length > 0 &&
    amountInput.value.length > 0 &&
    x === 1
  ) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    const td_2 = document.createElement("td");
    const td_3 = document.createElement("td");
    const deleteButton = document.createElement("span");
    td.innerText = nameInput.value;
    td_2.innerText = dateInput.value;
    td_3.innerText = "$" + amountInput.value;
    deleteButton.innerText = "X";
    deleteButton.classList.toggle("span");

    tBody.appendChild(tr);
    tr.appendChild(td);
    tr.appendChild(td_2);
    tr.appendChild(td_3);
    tr.appendChild(deleteButton);

    // Reset The Input Fields after Submit
    nameInput.value = "";
    nameInput.setAttribute("placeholder", "where was the expense made");
    dateInput.value = "initial";
    amountInput.value = "initial";
    error.innerText = "";

    // remove row when Clicked
    deleteButton.addEventListener("click", () => {
      tBody.removeChild(tr);
    });

    // Error Message
  } else {
    header.appendChild(error);
    let styles = {
      color: "red",
      marginTop: "2rem",
      fontSize: "initial",
      fontWeight: "normal",
    };
    Object.assign(error.style, styles);
    error.innerText = "Please Fill out The Form";
  }
});
