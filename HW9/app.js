// const buttonEl = document.querySelector('#send');
// const textMessageEl = document.querySelector('[name="textMessage"]');
// const commentEl = document.querySelector('#container');

// buttonEl.addEventListener("click", onClick);

// function onClick() {
//   console.log("clicked")
//   const el = document.createElement("li");
//   el.textContent = textMessageEl.value;
//   commentEl.append(el);
//   textMessageEl.value = '';

// }

function addData() {
  let name = document.getElementById("nameid");
  let surname = document.getElementById("lastName");
  let numberEl = document.getElementById("mobile");

  // ///////////////////////////////////////////////
  //   function checkNumber(number) {
  //     return number.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/);
  // }

  ////////////////////////////////////////////////
  function validatePhone(numberEl) {
    let RegExp = (/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/);
    return RegExp.test(numberEl.value);
  }
  //  // Вызов функции
 
  if (!validatePhone(numberEl)) {
    console.log("Not a Telephone Number!!");
    return;
  } else {
    console.log("Yeepp)");
  }
  ////////////////////////////////

  let table = document.getElementById("dynamictable");

  const rowCount = table.rows.length;
  const row = table.insertRow(rowCount);

  row.insertCell(0).innerHTML = name.value;
  row.insertCell(1).innerHTML = surname.value;
  row.insertCell(2).innerHTML = numberEl.value;

  name.value = "";
  surname.value = "";
  numberEl.value = "";
}

function validateData(name,surname,numberEl) {
  if (!validateName(name.value) || !validateLastName(surname.value) || !validatePhone(numberEl.value)) {
    return false;
  }
}
