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
  let number = document.getElementById("mobile");
 /////////////////////////////////////
  // function validatePhone(number){
  //   let RegExp = (/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/);
  //   return RegExp.test(tel);
  //  }
  //  // Вызов функции
  // //  let tel = '+380505050550';
    
  //  if (!validatePhone(tel)){
  //    console.log('Не соответствует');
  //  }else{
  //    console.log('Соответствует');
  //  }
    ////////////////////////////////
    let table = document.getElementById("dynamictable");

    const rowCount = table.rows.length;
    const row = table.insertRow(rowCount);

    function checkNumber(number) {
      return number.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/);
  }

   
    row.insertCell(0).innerHTML= name.value;
    row.insertCell(1).innerHTML= surname.value;
    row.insertCell(2).innerHTML= number.value;

    name.value = '';
    surname.value = '';
    number.value = '';
   
}